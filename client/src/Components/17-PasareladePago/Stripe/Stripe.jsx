import './stripe.css'
import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckOutForm/CheckOutForm";

const stripePromise = loadStripe("pk_test_51MgdeaLkh1uY73aURPAEAAE1KUg2okQQDZg3dH4Ok6r3E6vWGomme3YOro9s6h5KJSuCOs1dMdItGXe92Dpmz4Bk00MKEfU0r0")



function Stripe({ price }) {
    return (
        <Elements stripe={stripePromise}>
            <div className="CheckoutContainer">
                <CheckoutForm price={price}/>
            </div>
        </Elements>
    )
}

export default Stripe;