import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2dQtFq5Ll526goH70IRQKcHBMFuGw2VT4EQvGfLhZucIAMdpSI5qCG0JpVaOtCPdMkfjIpVRF4UWDuDLjfju56009eMDm2xf');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`https://infinite-brook-85062.herokuapp.com/order/?id=${id}`,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [id])
    const total = parseInt(order.quantity) * parseInt(order.price);
    return (
        <div className='flex mt-10 items-center justify-center'>
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-3xl font-bold text-primary text-center mb-2'>Payment Details</h1>
                    <h2 className="card-title">Product: {order.product}</h2>
                    <h2 className="card-title">Price: ${order.price}</h2>
                    <h2 className="card-title">Quantity: {order.quantity}</h2>
                    <h2 className="card-title">Total: ${total}</h2>
                </div>
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} total={total} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;