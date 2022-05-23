import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CancelOrderModal from './CancelOrderModal';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [cancelOrder, setCancelOrder] = useState(null);
    const [isReload, setIsReload] = useState(false)
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        fetch(`http://localhost:5000/order/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user, isReload])
    return (
        <div>
            <h2 className='text-center text-3xl text-bold'>My Orders {orders.length}</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Cancel</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <OrderRow 
                                key={index} 
                                index={index} 
                                order={order}
                                setCancelOrder={setCancelOrder}
                                ></OrderRow>)
                            }
                        </tbody>
                    </table>
                    <div>
                        {
                            cancelOrder && <CancelOrderModal
                            cancelOrder={cancelOrder}
                            setCancelOrder={setCancelOrder}
                            setIsReload={setIsReload}
                            isReload={isReload}
                            ></CancelOrderModal>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;