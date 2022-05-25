import React, { useEffect, useState } from 'react';
import DeleteOrderModal from './DeleteOrderModal';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deleteOrder, setDeleteOrder] = useState(null);
    const [isReload, setIsReload] = useState(false);
    useEffect(()=> {
        fetch('https://infinite-brook-85062.herokuapp.com/orders',{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    },[isReload])
    return (
        <div>
            <h2 className='text-center text-bold text-4xl py-4'>Manage All Orders</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full bg-black">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Client Name</th>
                                <th>Company</th>
                                <th>Address</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Status</th>
                                <th>Shipment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <ManageOrderRow 
                                key={order._id} 
                                index={index} 
                                order={order}
                                isReload={isReload}
                                setIsReload={setIsReload}
                                setDeleteOrder={setDeleteOrder}
                                ></ManageOrderRow>)
                            }
                        </tbody>
                    </table>
                    <div>
                        {
                            deleteOrder && <DeleteOrderModal
                            deleteOrder={deleteOrder}
                            setDeleteOrder={setDeleteOrder}
                            isReload={isReload}
                            setIsReload={setIsReload}
                            ></DeleteOrderModal>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;