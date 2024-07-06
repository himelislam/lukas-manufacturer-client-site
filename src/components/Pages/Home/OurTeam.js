import React from 'react';

const OurTeam = () => {
    return (
        <div>
            <section className="relative py-20 2xl:py-40 overflow-hidden">
                <img className="hidden lg:block absolute inset-x-0 bottom-0 mb-96" src="zospace-assets/lines/line-two-montain.svg" alt=""/>
                    <div className="relative container px-4 mx-auto">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-100">Reviews That Always Matter for us</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center -mx-10 mb-20">
                                <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                                    <div>
                                        <img className="mb-8 w-full h-112 lg:h-80 object-cover object-top shadow-xl" src="https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940" alt=""/>
                                            <a className="inline-block w-full p-10 bg-secondary hover:bg-orange-500 rounded-lg transition duration-200 shadow-xl" href="#">
                                                <h3 className="mb-2 text-3xl text-white font-bold font-heading">L&eacute;a Herrera</h3>
                                                <p className="mb-4 text-lg text-white font-bold">Manufacturer</p>
                                                <div className="flex justify-end">
                                                    <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M26.2042 7.78599L19.5171 14.4731L18.6812 13.6372L24.3611 7.95734L0.709572 7.96153L0.709572 6.78292L24.3611 6.77874L19.0992 1.51681L19.9351 0.680916L26.2042 6.9501C26.4351 7.18093 26.4351 7.55515 26.2042 7.78599Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-10 mb-20 lg:mb-0">
                                    <div className="lg:mt-24">
                                        <img className="mb-8 w-full h-112 lg:h-80 object-cover object-top shadow-xl" src="https://images.pexels.com/photos/5325885/pexels-photo-5325885.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940" alt=""/>
                                            <a className="inline-block w-full p-10 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200 shadow-xl" href="#">
                                                <h3 className="mb-2 text-3xl text-white font-bold font-heading">Maxi Svennson</h3>
                                                <p className="mb-4 text-lg text-white font-bold">CEO</p>
                                                <div className="flex justify-end">
                                                    <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M26.2042 7.78599L19.5171 14.4731L18.6812 13.6372L24.3611 7.95734L0.709572 7.96153L0.709572 6.78292L24.3611 6.77874L19.0992 1.51681L19.9351 0.680916L26.2042 6.9501C26.4351 7.18093 26.4351 7.55515 26.2042 7.78599Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-10">
                                    <div>
                                        <img className="mb-8 w-full h-112 lg:h-80 object-cover object-top shadow-xl" src="https://images.unsplash.com/photo-1615803795804-06a0c2a0030e?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940" alt=""/>
                                            <a className="inline-block w-full p-10 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200 shadow-xl" href="#">
                                                <h3 className="mb-2 text-3xl text-white font-bold font-heading">Oliver Haller</h3>
                                                <p className="mb-4 text-lg text-white font-bold">Co-Founder</p>
                                                <div className="flex justify-end">
                                                    <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M26.2042 7.78599L19.5171 14.4731L18.6812 13.6372L24.3611 7.95734L0.709572 7.96153L0.709572 6.78292L24.3611 6.77874L19.0992 1.51681L19.9351 0.680916L26.2042 6.9501C26.4351 7.18093 26.4351 7.55515 26.2042 7.78599Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center"><a className="inline-block py-4 px-12 border border-secondary hover:border-primary rounded-full font-bold text-black" href="/">More</a></div>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default OurTeam;