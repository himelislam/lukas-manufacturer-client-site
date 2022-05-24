import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({order, index , setIsReload, isReload}) => {
    const [productId, setProductId] = useState('');
    useEffect(()=>{
        if(productId){
            fetch(`http://localhost:5000/order`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({productId})
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                toast('Product Shipped Successfully')
                setIsReload(!isReload)
            }
        })
        }
    },[productId, isReload])
    return (
        <tr>
            <th>{index+1}</th>
            <td>{order.name}</td>
            <td>{order.company}</td>
            <td>{order.address}</td>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td>{order.price}</td>
            <td>
                {order.paid ? <p>Paid</p> : <p>Unpaid</p>}
            </td>
            <td>
                {(order.pending && order.paid) ? <p>Pending</p> : '' }
            </td>
            <td>
                { (!order.shipped && order.paid ) && <button onClick={()=> setProductId(order._id)} className='btn btn-success btn-xs'>Ship Product</button>}
                { (order.shipped && order.paid ) && <button onClick={()=> setProductId(order._id)} className='btn btn-success btn-xs'>Shipped</button>}
            </td>
        </tr>
    );
};

export default ManageOrderRow;