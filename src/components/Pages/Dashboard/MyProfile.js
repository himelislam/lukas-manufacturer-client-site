import React from 'react';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        
        console.log(data);
    }
    return (
        <div>
            <h2 className='text-center text-bold text-4xl'>My Profile</h2>
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
                                    message: 'name is Required'
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
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Education"
                            className="input input-bordered w-full "
                            {...register("education")}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Location"
                            className="input input-bordered w-full "
                            {...register("location")}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Your Phone"
                            className="input input-bordered w-full "
                            {...register("phone")}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Your Linkdin Profile</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Linkdin Profile"
                            className="input input-bordered w-full "
                            {...register("linkdin")}
                        />
                    </div>
                    {/* {signUpError} */}
                    <input className='btn w-50 block mx-auto my-8 text-white' type="submit" value='UPDATE PROFILE' />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;