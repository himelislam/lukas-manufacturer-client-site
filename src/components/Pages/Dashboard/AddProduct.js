import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {

        console.log(data);
    }
    return (
        <div>
            <h2>Add Product</h2>
            <div className='lg:mx-20 my-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full "
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Image"
                            className="input input-bordered w-full "
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-600">{errors.image.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Short Description</span>
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
                            <span className="label-text">Minimum Order Quantity</span>
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
                            <span className="label-text">Available Quantity</span>
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
                    <input className='btn w-50 block mx-auto my-8 text-white' type="submit" value='ADD REVIEW' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;