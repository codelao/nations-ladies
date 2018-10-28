import moment from 'moment';
import { matchPath } from "react-router";
import history from "../components/history";
import api from "../functions/api";
import clone from "clone";
const {getEvents} = api;
var now = moment()


/*
created: "YYYY-MM-DDTHH:mm:SS.mmmz"
creator: {email:"", displayName:""}
description:""
end:{dateTime: "YYYY-MM-DDTHH:mm:ss+01:00"}
start ^^ same format
htmlLink: ""
status: "confirmed"
responseStatus: "needsAction"
summary:""
id:""
*/

const getMatchPath = () => {
    const {pathname} = history.location;
    return matchPath(pathname, {
        path:"/meeting/:meeting_id",
        exact: true
    }).params.meeting_id
}

const getSpecificEvent = () => {
    return getEvents().then((res)=> {
        let events = res.data;
        events = events.map(event => {
            return event
        })
        let eventById = events.find(event => event.id === getMatchPath());
        let returnEvent = JSON.parse(JSON.stringify(eventById));
        return returnEvent;
    })
}

const isInFuture = (date) => {
    return now.isAfter(date)
}

const convertDateToMoment = (originalDate) => {
    let date = clone(originalDate);
    let convertedDate = moment(date.dateTime).toDate();
    console.log(date, convertedDate);
    return convertedDate;
}

/*const addAgendaLinks = (agendaHTMLElements, events) => {
    agendaHTMLElements.forEach(element => {
        onClick
    })
}*/

const eventIsReach = (event) => {
    console.log('test', event)
    return event.extendedProperties.shared.isReach === 'true'
}

const formatDateForDisplay = (start, end) => {
    start =  JSON.stringify(moment(start).format("dddd, MMMM Do YYYY, h:mm:ss a"))
    end = JSON.stringify(moment(end).format("h:mm:ss a"))
    return `${start} to ${end}`
}

const eventCreatedByCurrentUser = (event) => {
    if(!event.extendedProperties){
        return false
    }else{
        return event.extendedProperties.email === localStorage.getItem('email')
    }
}

const formatEvent = (event) => {
    const email = localStorage.getItem("email");
    console.log(event);
    event.start = convertDateToMoment(event.start);
    event.end = convertDateToMoment(event.end);
    let test = clone(event);
    console.log(test);
    event.title = event.summary;
    event.isReach = false
    if(!event.attendees){
        return event
    }
    if(event.extendedProperties){
        event.isReach = eventIsReach(event)
    }
    if(event.isReach && !eventCreatedByCurrentUser(event)){
        return
    }
    let currentUserResponse = event.attendees.find(attendee => attendee.email === email)
    event.hasAccepted = currentUserResponse === "accepted"
    return event
}

const parseEvents = (events) => {
    events = events.filter(event => event !== undefined)
    const upcomingEvents = events.filter(isInFuture);
    const reachEvents = events.filter(event => event.isReach)
    const mentorEvents = events.filter(event => !event.isReach)
    const pastEvents = events.filter(event => isInFuture(event) === false)
    const numberOfPastEvents = pastEvents.length
    const eventsUserHasAttended = pastEvents.filter(event => event.hasAccepted).length
    const numberOfEventsAttended = `${eventsUserHasAttended} / ${numberOfPastEvents}` 
    return {upcomingEvents, reachEvents, mentorEvents, pastEvents, numberOfEventsAttended, numberOfPastEvents}
}
const isAdmin = () => {
    return localStorage.getItem('isAdmin') === 'yes';
}

const sortEventsByUser = (events) => {
    let sortedEvents = {}
    events.forEach(event => {
        let mentorName = event.creator.email
        if(sortedEvents[mentorName]){
            sortedEvents[mentorName].push(event)
            return
        }
        else{
            sortedEvents[mentorName] = []
            sortedEvents[mentorName].push(event)
        }
    })
    console.log('object', Object.values(sortedEvents))
    return Object.values(sortedEvents)
}

export {isInFuture, 
        convertDateToMoment, 
        formatEvent,
        getMatchPath, 
        getSpecificEvent, 
        formatDateForDisplay, 
        parseEvents,
        isAdmin,
        sortEventsByUser}