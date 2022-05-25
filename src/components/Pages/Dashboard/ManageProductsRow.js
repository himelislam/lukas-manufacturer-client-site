import React from 'react';

const ManageProductsRow = ({product, index, setDeleteProduct}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.availableQuantity}</td>
            <td>{product.minimumQuantity}</td>
            <td><label onClick={() => setDeleteProduct(product)} for="delete-product-modal" class="btn btn-xs btn-error">Delete</label></td>
        </tr>
    );
};

export default ManageProductsRow;