import React, { Component } from 'react';
import api from '../functions/api';
import Documents from '../components/Documents';
const {downloadFile, getAllFileNames} = api;


export default class DocumentsPage extends Component{
    constructor(props){
        super(props)
        this.state = {allFileNames:[]}
    }
    componentDidMount(){
        getAllFileNames().then((allFileNames)=> {
            this.setState({allFileNames})
            return
        })
        .then(()=> {

        })
    }
    render(){
        let {allFileNames} = this.state;
        return(
            <div>
                {Documents(allFileNames)}
            </div>
        )
    }
}