import React from 'react';

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
                                    <a className="inline-block mr-1" href="#">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-1" href="#">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-1" href="#">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                        </svg>
                                    </a>
                                    <a className="inline-block mr-1" href="#">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
                                        </svg>
                                    </a>
                                    <a className="inline-block text-gray-200" href="#">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
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