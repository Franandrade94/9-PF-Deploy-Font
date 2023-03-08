import './checkoutform.css'
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";
import Loading2 from '../../../6-Loading/Loading2';
import ReviewPopUp from '../../../18-ReviewPopUp/ReviewPopUp';

function CheckoutForm({ price }) {

    const stripe = useStripe();
    const elements = useElements();
    const [ loading, setLoading] = useState(false);
    const [ showReviewPopUp, setShowReviewPopUp ] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement)
        });

        setLoading(true)

        if (!error) {
            const { id } = paymentMethod;
            
            try {
                const { data } = await axios.post('/checkout', {
                    id,
                    amount: price 
                });

                console.log(data.message);

                if (data?.message === "Successful Payment") {
                    setShowReviewPopUp(true);
                }

                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

    };


    return(
        <div>
            <form onSubmit={handleSubmit} className='paymentCard'>
                <h3>Total a pagar: ${ price }</h3>

                <div className="form-Check">
                  <CardElement/>
                </div>
            
                <button className='ComprarCheck' disabled={!stripe}> {loading ? 
                    (<Loading2/>) : "Comprar" }
                </button>
            </form>

            { showReviewPopUp && <ReviewPopUp /> }
        </div>
    )
}

export default CheckoutForm;
