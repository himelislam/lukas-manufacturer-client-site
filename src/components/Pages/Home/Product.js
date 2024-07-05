import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product, "product");
    return (
        // <div className="bg-gray-100 shadow-xl rounded-xl">
        //     <figure className="px-4 pt-4">
        //         <img src={product.img} alt="Shoes" className="rounded-md mx-auto" />
        //     </figure>
        //     <div className="px-4 py-4 items-center text-center">
        //         <h2 className="font-semibold text-xl">{product.name}</h2>
        //         <p className='font-light mb-[-10px]'><small>{product?.description.slice(0, 120)}{'...'}</small></p>
        //         <p className='mt-2'><small>Minimum Order Quantity: {product.minimumQuantity}</small></p>
        //         <p><small>Available Quantity: {product.availableQuantity}</small></p>
        //         <div className="items-center">
        //             <Link to={`/purchase/${product._id}`}><button className="btn btn-secondary mt-3">BOOK NOW</button></Link>
        //         </div>
        //     </div>
        // </div>

        <div key={product.id} className="group relative bg-gray-300 rounded-lg hover:bg-slate-200 cursor-pointer">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200 lg:aspect-none lg:h-80">
                <img
                    src={product?.img}
                    alt={product?.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full cursor-pointer"
                />
            </div>
            <div className="mt-4 pr-5 pl-5 pb-5 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 font-semibold cursor-pointer">
                        <a href={product?.href}>
                            {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                            {product.name}
                        </a>
                    </h3>
                    <p className='font-light mb-[-10px]'><small>{product?.description.slice(0, 220)}{'...'}</small></p>
                    <p className="mt-1 text-sm text-gray-500">{product?.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product?.price}</p>
            </div>
            <div className='w-full flex justify-center mb-5'>
            <Link to={`/purchase/${product._id}`} className="w-full mx-5 block"><button className="px-6 w-full py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Product;