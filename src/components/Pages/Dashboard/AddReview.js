import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        
        console.log(data);
    }
    return (
        <div>
            <h2 className='text-center text-bold text-3xl'>Add a Review</h2>
            <div className='lg:mx-20 my-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
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
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full "
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full "
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                                })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors.description.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Image</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Image"
                            className="input input-bordered w-full "
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                                })}
                        />
                        <label className="label">
                            {errors.img?.type === 'required' && <span className="label-text-alt text-red-600">{errors.img.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Rating Out of 5</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Your Ratings"
                            className="input input-bordered w-full "
                        {...register("rating",{
                            pattern: {
                                value: /[1-5]/,
                                message: 'Rate out of 5 only.'
                            },
                            required: {
                                value: true,
                                message: 'Ratings is Required'
                            }
                        })}
                        />
                        <label className="label">
                            {errors.rating?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}

                        </label>
                    </div>
                    <input className='btn w-50 block mx-auto my-8 text-white' type="submit" value='ADD REVIEW' />
                </form>
            </div>
        </div>
    );
};

export default AddReview;