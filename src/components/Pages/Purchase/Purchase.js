import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    const minimum = product.minimumQuantity;
    const available = product.availableQuantity;
    const [orderQuantity, setOrderQuantity] = useState(minimum);
    const [finalOrderQuantity, setFinalOrderQuantity] = useState();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const order = {
            name : user.displayName,
            email : user.email,
            company : data.company,
            address : data.address,
            phone : data.phone,
            quantity : finalOrderQuantity,
            product : product.name,
            price : product.price,
            paid: false
        }
        console.log(order);
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({order})
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast('Your Order Placed Successfully')
                reset()
            }
        })
    }
    
    const handleOrder = event =>{
        const quantity = event.target.value;
        setOrderQuantity(quantity)
    }

    const handleOrderQuantity = event =>{
        event.preventDefault();
        const quantity = event.target.quantity.value;
        console.log(event.target);
        setFinalOrderQuantity(quantity)
        toast('Product Quantity Updated');
        
    }
    


    let quantityError;
    if(orderQuantity > available){
        quantityError = <p className='text-red-600'>{`Sorry! Product is not Available more than ${available}`}</p>
    }
    if(orderQuantity < minimum){
        quantityError = <p className='text-red-600'>{`Sorry! The Minimum Order Quantity is ${minimum}`}</p>
    }
    return (
        <div className='px-10'>
            <h2>Purchase page {id}</h2>
            <div class="min-h-screen">
                <div class="hero-content grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className='card text-center mx-10 shadow-2xl bg-base-100'>
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Billing Details</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={user?.displayName}
                                        value={user?.displayName}
                                        disabled
                                        className="input input-bordered w-full "
                                        {...register("name")}
                                    />
                                    
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder={user?.email}
                                        value={user?.email}
                                        className="input input-bordered w-full "
                                        disabled
                                        {...register("email")}
                                    />
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Company Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="input input-bordered w-full "
                                        {...register("company", {
                                            required: {
                                                value: true,
                                                message: 'Company Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.company?.type === 'required' && <span className="label-text-alt text-red-600">{errors.company.message}</span>}

                                    </label>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Your Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Address"
                                        className="input input-bordered w-full "
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}

                                    </label>
                                </div>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text">Your Phone</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Your Phone"
                                        className="input input-bordered w-full "
                                        {...register("phone", {
                                            required: {
                                                value: true,
                                                message: 'Phone Number is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}

                                    </label>
                                </div>
                                <input className={finalOrderQuantity ? 'btn w-full max-w-xs text-white' : 'btn w-full max-w-xs text-white btn-disabled'} type="submit" value='Place Order' />
                            </form>

                        </div>
                    </div>
                    <div class="">
                        <div class="">
                            <div class="max-w-md mb-6">
                                <span class="text-xs text-gray-400 tracking-wider">APPLE #3299803</span>
                                <h2 class="mt-6 mb-4 text-3xl md:text-4xl lg:text-4xl font-heading font-medium">{product.name}</h2>
                                <p class="flex items-center mb-6">
                                    <span class="mr-2 text-sm text-blue-500 font-medium">$</span>
                                    <span class="text-3xl text-blue-500 font-medium">{product.price}</span>
                                </p>
                                <p class="text-lg text-gray-400">{product.description}</p>
                            </div>
                            <div class="flex mb-6 items-center">
                                <div class="inline-flex mr-4">
                                    <button class="mr-1">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                    <button class="mr-1">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                    <button class="mr-1">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                    <button class="mr-1">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                </div>
                                <span class="text-md text-gray-400">{product.rating}</span>
                            </div>
                            <div class="mb-6">
                                <h4 class="mb-3 font-heading font-medium">
                                    <span>Available Quantity : </span>
                                    <span class="text-gray-400"> {product.availableQuantity}</span>
                                </h4>
                                <h4 class="mb-3 font-heading font-medium">Minimum Order Quantity : {product.minimumQuantity}</h4>
                                
                            </div>
                            <div class="mb-10">
                                <h4 class="mb-3 text-xl font-semibold text-green-700">
                                    <span>Order Quantity : </span>
                                    <span> {finalOrderQuantity}</span>
                                </h4>
                                <form onSubmit={handleOrderQuantity}>
                                <button onClick={()=>setOrderQuantity(parseInt(orderQuantity) - 1)} className='btn btn-sm mx-2'>-</button>


                                <input onChange={handleOrder} class="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="text" name='quantity' placeholder={product.minimumQuantity} value={orderQuantity} />

                                <button onClick={()=>setOrderQuantity(parseInt(orderQuantity) + 1)} className='btn btn-sm mx-2'>+</button>
                                <br />
                                {quantityError}
                                <br />
                                <button className={orderQuantity > (minimum - 1) && orderQuantity < available ? 'btn btn-success ' : 'btn btn-success btn-disabled'}><input type="submit" value="Set Order Quantity"/></button>
                                </form>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;