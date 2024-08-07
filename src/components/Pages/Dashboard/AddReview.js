import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';


const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date().toLocaleDateString('en-US', options);
    console.log(date);
    const onSubmit = async data => {
        const review = {
            name: user?.displayName,
            description: data.description,
            rating: data.rating,
            img: data.img,
            time: date
        }
        console.log(review, "review ");
        fetch('https://lukas-manufacturer-server-site.vercel.app/review', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({review})
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast('Review Added Successfully')
                reset()
            }
        })
    }
    return (
        <div>
            <h2 className='text-center text-bold text-4xl py-6 text-white'>Add Review</h2>
            <div className='lg:mx-20 mb-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
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
                            <span className="label-text text-white">Email</span>
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
                            <span className="label-text text-white">Description</span>
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
                            <span className="label-text text-white">Your Image</span>
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
                            <span className="label-text text-white">Your Rating Out of 5</span>
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