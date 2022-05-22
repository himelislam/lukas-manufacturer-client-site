import React from 'react';

const ManageProductsRow = ({product, index}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{product.name}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>
    );
};

export default ManageProductsRow;