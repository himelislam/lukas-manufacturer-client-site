import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order , total}) => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [cardSuccess, setCardSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')


    const { _id, name, email } = order;


     useEffect(() => {
        if(total){
            fetch('https://infinite-brook-85062.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
        }
    }, [total])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message);
            setCardSuccess('')
        }
        else {
            setCardError('');
        }


        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id)
            setCardSuccess('Your Payment is Completed')

            const payment = {
                order:_id,
                transactionId: paymentIntent.id
            }

            fetch(`https://infinite-brook-85062.herokuapp.com/order/${_id}`,{
                method:'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res=> res.json())
            .then(data => {
                if(data.acknowledged){
                    // toast('Your Payment is Completed')
                }
            })
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-success mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                cardSuccess && <div className='text-center'>
                    <p className='text-green-600'>{cardSuccess}</p>
                    <p className='text-green-600'>Your Transaction Id: <small className='text-red-600'>{transactionId}</small></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;