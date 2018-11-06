import React, { Component } from 'react';
import FieldGroup from '../components/FieldGroup';

const ContactUsForm = () => {
    return (
        <div>
    <FieldGroup
        label="Name"
        id="CU_Name"
        type="text"
        />
        <FieldGroup
        label="Email"
        id="CU_Email"
        />
         <FieldGroup
            label="Message"
            id="CU_Message"
            componentClass="textarea"
            rows="5"
        />
    </div>
    )
}

export default ContactUsForm