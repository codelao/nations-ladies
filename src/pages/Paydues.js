import React, { Component } from 'react';
import PayPalButton from 'react-paypal-button'

export default class Paydues extends Component{
    render(){
        return(
            <div>
            <PayPalButton
        env='production'
        productionID='abcdef123456'
        amount={0.01}
        currency='GBP'
        commit={true}
      />
            </div>
        )
    }
}
