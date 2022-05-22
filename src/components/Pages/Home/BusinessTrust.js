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
                <div class="bg-white text-gray-800 shadow-xl text-center">
                    <figure class="px-10 pt-10">
                        <GiWorld className='text-6xl mx-auto'/>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl">14</h2>
                        <p>Countries</p>
                    </div>
                </div>

                <div class="bg-white text-gray-800 shadow-xl">
                    <figure class="px-10 pt-10 ">
                        <IoIosPeople className=' text-6xl mx-auto'/>
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-5xl">1000+</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
                
                <div class="bg-white text-gray-800 shadow-xl">
                    <figure class="px-10 pt-10 ">
                        <VscFeedback className='text-6xl mx-auto'/>
                    </figure>
                    <div class="card-body items-center  text-center">
                        <h2 class="card-title text-5xl">400+</h2>
                        <p>Feedbacks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessTrust;