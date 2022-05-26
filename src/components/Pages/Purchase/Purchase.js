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
        fetch(`https://infinite-brook-85062.herokuapp.com/products/${id}`,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
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
        fetch('https://infinite-brook-85062.herokuapp.com/order', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({order})
        })
        .then(res=>res.json())
        .then(data => {
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
        if(quantity){
            setFinalOrderQuantity(quantity)
            toast('Product Quantity Updated');
        }
        
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
            <div className="min-h-screen">
                <div className="hero-content grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
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
                    <div className="">
                        <div className="">
                            <div className="max-w-md mb-6">
                                <h2 className="mt-6 mb-4 text-3xl md:text-4xl lg:text-4xl font-heading font-medium">{product.name}</h2>
                                <p className="flex items-center mb-6">
                                    <span className="mr-2 text-sm text-blue-500 font-medium">$</span>
                                    <span className="text-3xl text-blue-500 font-medium">{product.price}</span>
                                </p>
                                <p className="text-lg text-gray-400">{product.description}</p>
                            </div>
                            <div className="flex mb-6 items-center">
                                <span className="text-md text-gray-400">{product.rating}</span>
                            </div>
                            <div className="mb-6">
                                <h4 className="mb-3 font-heading font-medium">
                                    <span>Available Quantity : </span>
                                    <span className="text-gray-400"> {product.availableQuantity}</span>
                                </h4>
                                <h4 className="mb-3 font-heading font-medium">Minimum Order Quantity : {product.minimumQuantity}</h4>
                                
                            </div>
                            <div className="mb-10">
                                <h4 className="mb-3 text-xl font-semibold text-green-700">
                                    <span>Order Quantity : </span>
                                    <span> {finalOrderQuantity}</span>
                                </h4>
                                <form onSubmit={handleOrderQuantity}>
                                <button onClick={()=>setOrderQuantity(parseInt(orderQuantity) - 1)} className='btn btn-sm mx-2'>-</button>


                                <input onChange={handleOrder} className="w-24 px-3 py-2 text-center bg-white border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" type="text" name='quantity' placeholder={product.minimumQuantity} value={orderQuantity} />

                                <button onClick={()=>setOrderQuantity(parseInt(orderQuantity) + 1)} className='btn btn-sm mx-2'>+</button>
                                <br />
                                {quantityError}
                                <br />
                                <button className={orderQuantity > (minimum - 1) && orderQuantity < (available + 1) ? 'btn btn-success ' : 'btn btn-success btn-disabled'}><input type="submit" value="Set Order Quantity"/></button>
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