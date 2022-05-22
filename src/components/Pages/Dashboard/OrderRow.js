import React from 'react';

const OrderRow = ({order, index}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{order.name}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
    );
};

export default OrderRow;