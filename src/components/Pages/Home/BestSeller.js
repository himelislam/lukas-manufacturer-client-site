import React, { useEffect, useState } from 'react';
import Product from './Product';

const BestSeller = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='px-10 my-20'>
            <div className='text-center w-[500px] mx-auto mb-10'>
                <h2 className='font-semibold text-3xl my-2'>BEST SELLER</h2>
                <p className='font-light mb-4'>All best seller product are now available for you and your can buy this product from here any time any where so sop now</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.slice(0,4).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default BestSeller;