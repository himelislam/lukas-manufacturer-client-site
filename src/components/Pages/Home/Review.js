import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const Review = ({ review }) => {

    return (
         <div className="md: 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
         <div className="flex flex-col justify-start items-start w-full space-y-8">
             <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
                 <div className="flex flex-col flex-row justify-between w-full">
                     <div className="flex flex-row justify-between items-start">
                         <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">{review?.name}</p>
                     </div>
                    <br></br>
                     <div className="cursor-pointer mt-2 md:mt-0">
                     <ReactStars 
                     count={review.rating} 
                     size={24}
                     activeColor=""
                     />
                     </div>
                 </div>
                 <div className="">
                     <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">{review?.description.slice(0,150) + ` ...`}</p>
                     <div className="hidden md:flex mt-6 flex-row justify-start items-start space-x-4">
                         <div>
                             <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="chair-1" />
                         </div>
                         <div>
                             <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="chair-2" />
                         </div>
                         <div className="hidden md:block">
                             <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="chair-3" />
                         </div>
                         <div className="hidden md:block">
                             <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="chair-4" />
                         </div>
                     </div>
                     <div className="md:hidden carousel pt-8 cursor-none" data-flickity='{ "wrapAround": true,"pageDots": false }'>
                         <div className="carousel-cell">
                             <div className="md:w-full h-full relative">
                                 <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="bag" className="w-full h-full object-fit object-cover" />
                             </div>
                         </div>
                         <div className="carousel-cell">
                             <div className="md:w-full h-full relative">
                                 <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="shoes" className="w-full h-full object-fit object-cover" />
                             </div>
                         </div>
                         <div className="carousel-cell">
                             <div className="md:w-full h-full relative">
                                 <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="wallet" className="w-full h-full object-fit object-cover" />
                             </div>
                         </div>
                         <div className="carousel-cell">
                             <div className="md:w-full h-full relative">
                                 <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="wallet" className="w-full h-full object-fit object-cover" />
                             </div>
                         </div>
                         <div className="carousel-cell">
                             <div className="md:w-full h-full relative">
                                 <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="wallet" className="w-full h-full object-fit object-cover" />
                             </div>
                         </div>
                         <div className="carousel-cell">
                             <div className="md:w-full h-full relative">
                                 <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="wallet" className="w-full h-full object-fit object-cover" />
                             </div>
                         </div>
                         <div className="carousel-cell"></div>
                     </div>
                     <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                         <div>
                             <img className='w-10 h-10 rounded-full' src={review?.img} alt="" />
                         </div>
                         <div className="flex flex-col justify-start items-start space-y-2">
                             <p className="text-base font-medium leading-none text-gray-800">{review?.name}</p>
                             <p className="text-sm leading-none text-gray-600">{review?.time}</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    );
};

export default Review;
