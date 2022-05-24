import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data => setReviews(data))
    },[]);
    // const reversed = reviews.reverse();
    return (
        <div className='px-10 my-20'>
            <div className='text-center w-[500px] mx-auto mb-10'>
                <h2 className='font-semibold text-3xl my-2'>REVIEWS</h2>
                <p className='font-light mb-4'>All best seller product are now available for you and your can buy this product from here any time any where so sop now</p>
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