import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';


const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const review = {
            name: user?.displayName,
            description: data.description,
            rating: data.rating,
            img: data.img
        }
        console.log(review);
        fetch('https://infinite-brook-85062.herokuapp.com/review', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({review})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                toast('Review Added Successfully')
                reset()
            }
        })
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
                            disabled
                            value={user?.displayName}
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
                            placeholder="Your Email"
                            value={user?.email}
                            disabled
                            className="input input-bordered w-full "
                            {...register("email")}
                        />
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
                                    message: 'Image is Required'
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