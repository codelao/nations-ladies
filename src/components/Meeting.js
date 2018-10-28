
import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import history from './history'
import { Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import api from '../functions/api';
import {getSpecificEvent, formatEvent} from '../functions/utils';
import MeetingItem from './MeetingItem';


const {getEvents} = api;
export default class Meeting extends Component{
    constructor(props){
        super(props)
        this.state = {files:[], attending:false, event:{}}
        this.handleCheck = this.handleCheck.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.upload = this.upload.bind(this)
    }
    componentDidMount(){
        getSpecificEvent().then((event)=> {
            console.log('even', event)
            const formattedEvent = formatEvent(event)
            this.setState({event:formattedEvent})
        })
    }
    onDrop(files) {
        this.setState({
          files
        });
      }
      upload(){
          var {files} = this.state
          var mark = this.id
          api.uploadMinutes(files, this.event)
          history.replace("/member")
      }
      handleCheck(value){
        this.setState(()=>({attending:value}))
        console.log(value)
      }
      update(){
          var {attending} = this.state
          api.update(attending)
      }
    render(){
        return(
            MeetingItem(this.state.event, this.handleCheck, this.state.attending, this.onDrop, this.upload, this.state.files)
        )
    }
}