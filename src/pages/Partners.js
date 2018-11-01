import React, { Component } from 'react';
import PublicPageHeading from '../components/PublicPageHeading';
import PublicPageMainText from '../components/PublicPageMainText'

export default class Partners extends Component{
render(){
	let Heading = 'Partners';
    let Text = 'il ipsum dor lates';
	return(<div class="home">
            {PublicPageHeading(Heading, Text)}
            <div>
            <br/>
            <br/>
            <h3>Our partners are so important and we accomplish a lot together.</h3>
            <h1>Partners</h1>
            <p>BECOMING A PARTNER</p>
            <p>If you would like to partner with us, fill out the form below and one of 
                our staff members will get back to you
            </p>
            <form>
                <input></input>
                <input></input>
                <br/>
                <input></input>
                <br/>
                <input></input>
                <br/>
                <input></input>
            </form>
        </div>
    </div>)
}
}


