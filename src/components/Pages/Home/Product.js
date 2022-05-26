import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className="bg-gray-100 shadow-xl rounded-xl">
            <figure className="px-4 pt-4">
                <img src={product.img} alt="Shoes" className="rounded-md mx-auto" />
            </figure>
            <div className="px-4 py-4 items-center text-center">
                <h2 className="font-semibold text-xl">{product.name}</h2>
                <p className='font-light mb-[-10px]'><small>{product?.description.slice(0, 150)}</small></p>
                <p className='mt-2'><small>Minimum Order Quantity: {product.minimumQuantity}</small></p>
                <p><small>Available Quantity: {product.availableQuantity}</small></p>
                <div className="items-center">
                    <Link to={`/purchase/${product._id}`}><button className="btn btn-secondary mt-3">BOOK NOW</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;