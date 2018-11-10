import React, {Component} from "react"
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import history from './history'
import api from '../functions/api';
import { formatEvent} from '../functions/utils';

const localizer = BigCalendar.momentLocalizer(moment) 


const customEventPropGetter = event => {
    return {
        className: 'special-day',
        style: {
          "backgroundColor": (event.hasAccepted ? 'red' : 'blue'),
        },
      }
}  
function EventAgenda({ event }) {
    return (
      <span>
        <em style={{ color: 'magenta' }} >{event.title}</em>
        <p>{event.desc}</p>
      </span>
    )
  }

export default class Calender extends Component{
    constructor(props){
        super(props)
        var logged = localStorage.getItem("logged")
        if(logged === "false" ){
            history.replace("/")
        }
        this.state = {data:[]}
    }
    action(event){
        localStorage.setItem('event', JSON.stringify(event))
        history.push(`/meeting/${event.id}`)
    }
    componentDidMount(){
        api.getEvents().then(events => {   
            console.log(events)    
            var {data} = events
            console.log(data)
            var formattedEvents = data.map(formatEvent)
            this.setState({data:formattedEvents})
        })   
    }
    
    render(){
        return(
        <div style={{height: '80vh', margin: '10px'}}>
            <BigCalendar
            localizer={localizer}
            events={this.state.data}
            startAccessor="start"
        endAccessor="end"
        eventPropGetter={customEventPropGetter}
        onSelectEvent={this.action}
        selectable={true}
        components={{
            agenda: {
                event: EventAgenda,
            },
        }}
            />
        </div>
        )
    }
}