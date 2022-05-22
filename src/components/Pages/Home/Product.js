import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div class="card  bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={product.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="font-semibold text-xl">{product.name}</h2>
                <p className='font-light mb-[-10px]'><small>{product.description.slice(0, 100)}</small></p>
                <p><small>Minimum Order Quantity:{product.minimunQuantity}</small></p>
                <p><small>Available Quantity: {product.availableQuantity}</small></p>
                <div class="rating rating-sm">
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div class="card-actions">
                    <Link to={`/purchase/${product._id}`}><button class="btn btn-primary">BOOK NOW</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;