import React from 'react';
import { GiWorld } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { VscFeedback } from 'react-icons/vsc';

const BusinessTrust = () => {
    return (
        <div className='px-10 my-20'>
            <div className='text-center w-[500px] mx-auto mb-10'>
                <h2 className='font-semibold text-3xl my-2'>MILLIONS OF BUSINESS TRUSTS US</h2>
                <p className='font-light mb-4'>Millions of Business Trusts us around the world. We Try to Understand User Expectation.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div class="bg-gray-500 shadow-xl text-center">
                    <figure class="px-10 pt-10">
                        <GiWorld className='text-white text-6xl mx-auto'/>
                        {/* <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" /> */}
                    </figure>
                    <div class="card-body items-center text-white text-center">
                        <h2 class="card-title">14</h2>
                        <p>Countries</p>
                    </div>
                </div>

                <div class="bg-gray-500 shadow-xl">
                    <figure class="px-10 pt-10 ">
                        {/* <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" /> */}
                        <IoIosPeople className='text-white text-6xl mx-auto'/>
                    </figure>
                    <div class="card-body items-center text-white text-center">
                        <h2 class="card-title">1000+</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
                
                <div class="bg-gray-500 shadow-xl">
                    <figure class="px-10 pt-10 ">
                        {/* <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" /> */}
                        <VscFeedback className='text-white text-6xl mx-auto'/>
                    </figure>
                    <div class="card-body items-center text-white text-center">
                        <h2 class="card-title">400+</h2>
                        <p>Feedbacks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessTrust;