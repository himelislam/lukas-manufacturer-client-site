import React, { useEffect, useState } from 'react';
import Product from './Product';

const BestSeller = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('https://infinite-brook-85062.herokuapp.com/products',{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='px-10 py-20 py-10 2xl:py-40'>
            <div className='text-center mx-auto mb-10 '>
            <span class="text-lg text-blue-400 font-bold">All The Best Selling Products</span>
            <h2 class="mb-24 text-center text-5xl font-bold font-heading">Our Products</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default BestSeller;