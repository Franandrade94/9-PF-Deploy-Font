import './stripe.css'
import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckOutForm/CheckOutForm";

const stripePromise = loadStripe("pk_test_51Mgab1LkJctt9BIbmKUzfuclblBicc3JZGvq9wBpz52YpWk1i3t5m0ne2AlOD5zs6SG5mtUSiZEz7wenKSbxGTDd00iK0VLrm5")



function Stripe() {
    return (
        <Elements stripe={stripePromise}>
            <div className="CheckoutContainer">
                <CheckoutForm/>
            </div>
        </Elements>
    )
}

export default Stripe;