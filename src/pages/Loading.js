import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import ReactLoading from 'react-loading';

   


export default class Loading extends Component{
    constructor(props){
        super(props)
        this.state = {loading:true}
    }
    render(){
        const {loading} = this.state
        return (
            <div style={{"padding-left":"35vh"}}>
                <ReactLoading height="50vh" width="50vw" color="black" type="bars"/>
            </div>
        )
    }
} 