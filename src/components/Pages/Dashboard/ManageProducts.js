import React, { useEffect, useState } from 'react';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h2>Manage All Products</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Av Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <ManageProductsRow key={index} index={index} product={product}></ManageProductsRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;