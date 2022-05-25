import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = ({order, index, setCancelOrder}) => {
    const navigate = useNavigate()
    return (
        <tr>
            <th>{index+1}</th>
            <td>{order.product}</td>
            <td>{order.price}</td>
            <td>{order.quantity}</td>
            <td>
                {!order.paid && <label onClick={() => setCancelOrder(order)} for="delete-confirm-modal" className="btn btn-xs btn-error">Cancel</label>}
            </td>
            <td>
                {!order.paid && <label onClick={()=> navigate(`/myorders/payment/${order._id}`)} for="delete-confirm-modal" className="btn btn-xs btn-success">Pay</label>}
                {order.paid && <>
                    <p className='text-success'><span>Paid</span></p>
                    <p className='text-success'>Transaction Id<span>{order?.transactionId}</span></p>
                </>}
            </td>
        </tr>
    );
};

export default OrderRow;