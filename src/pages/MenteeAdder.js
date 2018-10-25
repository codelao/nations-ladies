import React, { Component } from 'react';
import * as Datetime from 'react-datetime';
import styled from 'styled-components';
import history from '../components/history';
import api from '../functions/api';
import FieldGroup from '../components/FieldGroup'
import {Button} from 'react-bootstrap'
import LocationPicker from 'react-location-picker';


const EventWrapper = styled.div`
display: grid;
grid-template-columns: auto;
grid-column-gap: 5px
`
const EventForm = styled.div`
grid-column:2/3
`



export default class EventAdder extends Component{
    constructor(props){
        super(props);
        if(!Boolean(localStorage.getItem('logged'))){
            this.props.history.replace("/home")
        }
        this.state = {summary: '', date:'', description:'', location:'', reach:true};
        this.handleSummary = this.handleSummary.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }
    handleSummary(event) {
        this.setState({summary: event.target.value});
    }
    handleDescription(event){
        this.setState({description: event.target.value})
    }
    handleSubmit(event){
        var nEvent = this.state
        console.log(nEvent)
        api.writeEventData(nEvent).then((res)=> {
            console.log(res)
            history.replace('/calendar')
        })
        event.preventDefault()
    }
    handleDate(event){
        this.setState({date: event._d})
    }
    handleLocationChange(event){
        this.setState({address: event.target.value})
    }
    render(){
        return (
        <EventWrapper >
            <link rel="stylesheet" type="text/css" href="../react-datetime.css" />
        <EventForm id="eventWrapper">
            <br/>
            <h1>Add Reach Meeting</h1>
        Date<Datetime onChange={this.handleDate}/>  
        <form onSubmit={this.handleSubmit}>
            <FieldGroup
            onChange={this.handleSummary}
            id="formControlEmail"
            type="text"
            label="Mentee Details"
            />
            <FieldGroup 
            onChange={this.handleLocationChange}
            value={this.state.location}
            id="formLocation"
            label="Location"
            rows="2"
            />
        <FieldGroup
            onChange={this.handleDescription}
            value={this.state.description}
            id="formDescription"
            componentClass="textarea"
            label="Description"
            rows="3"
        />    
        <br/>
        <Button onClick={this.handleSubmit}>Submit</Button>    
        </form>
        </EventForm>
        </EventWrapper>
        )
    }
}
