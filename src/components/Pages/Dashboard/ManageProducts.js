import React, { useEffect, useState } from 'react';
import DeleteProductModal from './DeleteProductModal';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [isReload, setIsReload] = useState(false)
    useEffect(()=> {
        fetch('https://infinite-brook-85062.herokuapp.com/products',{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setProducts(data))
    },[isReload])
    return (
        <div>
            <h2 className='text-center text-bold text-4xl py-4'>Manage All Products</h2>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Minimum Quantity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => <ManageProductsRow 
                                key={product._id} 
                                index={index} 
                                product={product}
                                setDeleteProduct={setDeleteProduct}
                                ></ManageProductsRow>)
                            }
                        </tbody>
                    </table>
                    <div>
                        {
                            deleteProduct && <DeleteProductModal
                            deleteProduct={deleteProduct}
                            setDeleteProduct={setDeleteProduct}
                            isReload={isReload}
                            setIsReload={setIsReload}
                            ></DeleteProductModal>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;