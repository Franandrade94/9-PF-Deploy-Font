import "./payment.css";
import React, { Component } from "react";
import Logo2 from "../../Components/1-Logo/Logo2";
import Stripe from "../../Components/17-PasareladePago/Stripe/Stripe";


export default class Payment extends Component {
    render(){
        return(
            <div className="Payment">
                <div>
                    <Logo2/>
                    <Stripe/>
                </div>
            </div>
        )
    }
}