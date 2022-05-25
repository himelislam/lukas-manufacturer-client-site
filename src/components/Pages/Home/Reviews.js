import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://infinite-brook-85062.herokuapp.com/review',{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[]);
    // const reversed = reviews.reverse();
    return (
        <div className='px-10 py-20 2xl:py-40'>
            <div className='text-center w-[500px] mx-auto mb-10'>
            <span class="text-lg text-secondary font-bold">Reviews That Matters for us Always</span>
            <h2 class="mb-24 text-center text-5xl font-bold font-heading">Reviews</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;