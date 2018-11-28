import React, { Component } from 'react';
import ReactDOM from "react-dom"
import api from '../functions/api';
import decode from "urldecode";
import Documents from '../components/Documents';
const {downloadFile, getAllFileNames} = api;


export default class DocumentsPage extends Component{
    constructor(props){
        super(props)
        this.state = {allFileNames:[], urls:[]}
    }
    componentDidMount(){
        getAllFileNames().then(() => {
            this.setState({urls: localStorage.getItem("url").split('///')})
            this.setState({allFileNames: JSON.parse(localStorage.getItem('filenames'))})
            console.log(this.state.allFileNames)
        })
    }
    render(){
        let {urls, allFileNames} = this.state;
        return(
            <div>
                {urls.map((url, index) => {
                    return(
                        <div>
                            <a href={url}>{allFileNames[index]}</a>
                        </div>
                    )
                })}
            </div>
        )
    }
}