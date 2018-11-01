import React, { Component } from 'react';
import PublicPageHeading from '../components/PublicPageHeading';
import PublicPageMainText from '../components/PublicPageMainText'


export default class About extends Component{
render(){
    let Heading = 'About';
    let Text = 'Our Mission';
    let MainText = "Nations Ladies began as an idea of bringing together a group of accomplished professional women for the common purpose of encouraging greatness in London’s school-aged girls. These are women from professions such as Law, Finance and Medicine to creative fields such as Screen Writing, Fashion Design and Journalism - women who have reached the highest levels of their careers, often from humble beginnings. Together these women serve as role models and mentors supporting the development of future leaders."
    return(<div class="home">
            {PublicPageHeading(Heading, Text)}
            <span id="our_mission">{PublicPageMainText("Our Mission")}</span>
            {PublicPageMainText(MainText)}
    </div>)
    }
}

