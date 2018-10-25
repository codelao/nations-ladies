import React, { Component } from 'react';
import api from '../functions/api';
import {formatEvent, isInFuture, parseEvents, isAdmin} from '../functions/utils'
import MentorHomeEvents from '../components/MentorHomeEvents'
import history from '../components/history';
import { Button } from 'react-bootstrap';
const {getEvents} = api



export default class MentorHome extends Component{
    constructor(props){
        super(props)
        this.state = {upcomingEvents: [], numberOfEventsAttended:''}
        this.addEvent.bind(this);
        this.addmeet.bind(this);
    }
    componentDidMount(){
        getEvents().then((eventsObject)=> {
            let events = eventsObject.data
            let allEvents = events.map((event) => formatEvent(event))
            const {upcomingEvents, numberOfEventsAttended} = parseEvents(allEvents)
            this.setState({upcomingEvents, numberOfEventsAttended})
        });
    }
    addEvent(){
        history.push("/addreach")
        window.location.reload(true);
    }
    addmeet(){
        history.push("/addmeeting");
        window.location.reload(true);
    }
    render(){
        return(<div class="mentor_home">
            {MentorHomeEvents(this.state)}
            {isAdmin()&&(<Button onClick={this.addmeet} bsStyle="primary" bsSize="large" active>
                   New Chapter Meeting
            </Button>)}
                <Button bsSize="large" onClick={this.addEvent} active>
                   Reach Mentoring Appointment
                </Button>
        </div>)
    }
}