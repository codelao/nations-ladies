import React, { Component } from 'react';
import api from '../functions/api';
import {formatEvent, sortEventsByUser, parseEvents} from '../functions/utils';
import SafeGuardingDisplay from '../components/SafeGuardingDisplay';
const {getEvents} = api

export default class SafeGuarding extends Component{
    constructor(props){
        super(props)
        this.state = {reachEvents: [], loading: true}

    }
    componentDidMount(){
        getEvents().then(eventsData => {
            let formattedEvents = eventsData.data.map(event =>{
                return formatEvent(event)
            })
            var {reachEvents} = parseEvents(formattedEvents)
            const eventsGroupedInArrayByUser = sortEventsByUser(reachEvents)
            this.setState({reachEvents: eventsGroupedInArrayByUser, loading: false})
        })
    }
    render(){
        var {reachEvents, loading} = this.state
        return(
            <div>
                 {!loading && SafeGuardingDisplay(reachEvents)}
            </div>
        )
    }
}

