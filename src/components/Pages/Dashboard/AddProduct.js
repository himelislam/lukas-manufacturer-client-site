import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const product = {
            name: data.name,
            img: data.img,
            description: data.description,
            availableQuantity: data.availableQuantity,
            price: data.price,
            minimumQuantity: data.minimumQuantity
        }
        fetch('https://lukas-manufacturer-server-site.vercel.app/product', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({product})
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast('Product Added')
                reset()
            }
        })
    }
    return (
        <div>
            <h2 className='text-center text-bold text-4xl py-4 text-white'>Add Product</h2>
            <div className='lg:mx-20 mb-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Product Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Product Image</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Image"
                            className="input input-bordered w-full "
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'Product Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.img?.type === 'required' && <span className="label-text-alt text-red-600">{errors.img.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Short Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Short Description"
                            className="input input-bordered w-full "
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors.description.message}</span>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Minimum Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Minimum Order Quantity"
                            className="input input-bordered w-full "
                            {...register("minimumQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Order Quantity is Required'
                                }
                            })}
                        />
                        {errors.minimumQuantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.minimumQuantity.message}</span>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Available Quantity"
                            className="input input-bordered w-full "
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Available Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.availableQuantity.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            className="input input-bordered w-full "
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-600">{errors.price.message}</span>}

                        </label>
                    </div>
                    <input className='btn w-50 block mx-auto my-8 text-white' type="submit" value='ADD PRODUCT' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;