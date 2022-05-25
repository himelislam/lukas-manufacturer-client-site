import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div class="bg-gray-100 shadow-xl rounded-xl">
            <figure class="px-4 pt-4">
                <img src={product.img} alt="Shoes" class="rounded-md" />
            </figure>
            <div class="px-4 py-4 items-center text-center">
                <h2 class="font-semibold text-xl">{product.name}</h2>
                <p className='font-light mb-[-10px]'><small>{product?.description.slice(0,100)}</small></p>
                <p><small>Minimum Order Quantity:{product.minimumQuantity}</small></p>
                <p><small>Available Quantity: {product.availableQuantity}</small></p>
                <div class="rating rating-sm">
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div class="items-center">
                    <Link to={`/purchase/${product._id}`}><button class="btn btn-primary">BOOK NOW</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;