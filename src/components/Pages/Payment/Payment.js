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
        fetch(`http://localhost:5000/order/?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [id])
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Pay for {order.product}</h2>
                    <p>Product Quantity: {order.quantity}</p>
                    <p>Please Pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;