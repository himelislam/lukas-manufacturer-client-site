import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Review = ({ review }) => {
    return (
        <div>
            <section className=" bg-blueGray-100 rounded-t-10xl overflow-hidden">
                <div className="container px-4 mx-auto">
                    <div className="rounded-xl mb-4 md:mb-4 shadow-lg rounded-t-8xl rounded-b-5xl overflow-hidden">
                        <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-gray-100">
                            <div className="">
                                <div className="avatar w-full mt-4">
                                    <div className="w-20 mx-auto mb-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review.img} />
                                    </div>
                                </div>
                                <h4 className="w-full text-center md:w-auto text-xl font-heading font-medium">{review.name}</h4>
                            </div>
                            <div className="flex items-center justify-center">
                                <span className="mr-4 text-xl font-heading font-medium">{review.rating}</span>
                                <ReactStars
                                    count={review.rating}
                                    size={24}
                                    activeColor="#FFCB00"
                                />
                            </div>
                        </div>
                        <div className="px-8 md:px-6 pt-2 pb-4 bg-gray-100 min-h-[150px]">
                            <div className="flex flex-wrap">
                                <div className="w-full ">
                                    <p className="mb-2 text-darkBlueGray-400 text-center">{review.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Review;