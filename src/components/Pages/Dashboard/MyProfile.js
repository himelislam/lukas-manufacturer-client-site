import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [authUser] = useAuthState(auth);
    const [serverUser, setServerUser] = useState({});
    const [isReload, setIsReload] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${authUser.email}`)
            .then(res => res.json())
            .then(data => setServerUser(data))
    }, [authUser, isReload])
    const email = authUser.email;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const user = {
            name: authUser.displayName,
            email: authUser.email,
            education: data.education,
            location: data.location,
            phone: data.phone,
            linkdin: data.linkdin
        }
        console.log(user);
        fetch(`http://localhost:5000/user/?email=${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ user })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast('Your Profile Updated Successfully');
                    reset();
                    setIsReload(!isReload)
                }
            })

    }
    return (
        <div>
            <h2 className='text-center text-bold text-4xl'>My Profile</h2>
            <div className='lg:mx-20 my-10'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name {serverUser.name}</span>
                        </label>
                        <input
                            type="text"
                            placeholder={authUser?.displayName}
                            disabled
                            value={authUser?.displayName}
                            className="input input-bordered w-full "
                            {...register("name")}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email {serverUser.email}</span>
                        </label>
                        <input
                            type="email"
                            placeholder={authUser?.email}
                            disabled
                            value={authUser?.email}
                            className="input input-bordered w-full "
                            {...register("email")}
                        />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            type="text"
                            placeholder={serverUser?.education}
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
                            placeholder={serverUser?.location}
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
                            placeholder={serverUser?.phone}
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
                            placeholder={serverUser?.linkdin}
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