import React, { Component } from 'react';
import api from '../functions/api';
import {formatEvent, parseEvents, isAdmin} from '../functions/utils'
import MentorHomeEvents from '../components/MentorHomeEvents'
import history from '../components/history';
import { Button } from 'react-bootstrap';
const {getEvents} = api

export default class MentorHome extends Component{
    constructor(props){
        super(props)
        this.state = {upcomingEvents: [], numberOfEventsAttended:''}

    }
    componentDidMount(){
        getEvents().then((eventsObject)=> {
            let events = eventsObject.data
            let allEvents = events.map((event) => formatEvent(event))
            const {upcomingEvents, numberOfEventsAttended} = parseEvents(allEvents)
            this.setState({upcomingEvents, numberOfEventsAttended})
        });
    }
    render(){
        return(<div class="mentor_home">
            {MentorHomeEvents(this.state)}
        </div>)
    }
}