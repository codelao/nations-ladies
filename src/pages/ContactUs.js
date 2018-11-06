import React, { Component } from 'react';
import PublicPageHeading from '../components/PublicPageHeading';
import PublicPageMainText from '../components/PublicPageMainText'
import ContactUsForm from '../components/ContactUsForm';
export default class ContactUs extends Component{
render(){
	let Heading = 'Contact Us';
    let Text = 'Learn more or keep in touch';
    let MainText = (<div>
        <ContactUsForm/>
    </div>)
    return(<div class="home">
            {PublicPageHeading(Heading, Text)}
            {PublicPageMainText(MainText)}
    </div>)
}
}