import React from 'react';
import { GiWorld } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import { VscFeedback } from 'react-icons/vsc';

const BusinessTrust = () => {
    return (
        <div className='px-10 py-20 bg-primary'>
            <div className='text-center mx-auto mb-10'>
            <span className="text-lg text-blue-400 font-bold">Millions of Business Trust Us</span>
            <h2 className="mb-24 text-center text-5xl font-bold font-heading text-white">Business Summary</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="bg-gray-100 text-gray-800 shadow-xl text-center rounded-xl">
                    <figure className="px-10 pt-10">
                        <GiWorld className='text-6xl mx-auto'/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl">14</h2>
                        <p>Countries</p>
                    </div>
                </div>

                <div className="bg-gray-100 text-gray-800 shadow-xl text-center rounded-xl">
                    <figure className="px-10 pt-10 ">
                        <IoIosPeople className=' text-6xl mx-auto'/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl">1000+</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
                
                <div className="bg-gray-100 text-gray-800 shadow-xl text-center rounded-xl">
                    <figure className="px-10 pt-10 ">
                        <VscFeedback className='text-6xl mx-auto'/>
                    </figure>
                    <div className="card-body items-center  text-center">
                        <h2 className="card-title text-5xl">400+</h2>
                        <p>Feedbacks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessTrust;