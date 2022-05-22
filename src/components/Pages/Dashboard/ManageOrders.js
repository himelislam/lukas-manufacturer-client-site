import React, { useEffect, useState } from 'react';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h2>Manage All Orders</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <ManageOrderRow key={index} index={index} order={order}></ManageOrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;