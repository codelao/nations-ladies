import React, { Component } from 'react';
import PublicPageHeading from '../components/PublicPageHeading';
import PublicPageMainText from '../components/PublicPageMainText'

export default class Services extends Component{
render(){
	let Heading = 'Service';
    let Text = 'What We Do';
    let MainText = (<ul><li>Provide 1:1 mentoring support for girls aged 14-17</li><li>Support with university applications and professional statements</li><li>Coaching for univesity interviews</li><li>Curate work experience opportunities</li><li>Host career symposiums across the fields of law, finance, marketing and STEM</li><li>CV writing preparation</li><li>Deliver busness etiquette workshops to prepare college and sixth form students for professional life</li></ul>)
	return(<div class="home">
            {PublicPageHeading(Heading, Text)}
            {PublicPageMainText(MainText)}
    </div>)
}
}