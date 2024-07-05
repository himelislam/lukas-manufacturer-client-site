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
        fetch(`https://lukas-manufacturer-server-site.vercel.app/order/${user.email}`,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    },[user, isReload])
    return (
        <div>
            <h2 className='text-center text-bold text-4xl py-6'>My Orders</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
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