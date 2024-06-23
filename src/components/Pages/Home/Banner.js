import React from 'react';

const  Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-1.jpg" className="w-full"/> /
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <div className='text-center'>
                                <h3 className='text-white font-bold text-xl lg:text-2xl mb-2'>NEW TECHNOLOGY & BUILD</h3>
                                <h1 className='text-white font-bold text-2xl lg:text-5xl mb-3'>WHEELS & PARTS COLLECTION </h1>
                                {/* <button className='btn btn-secondary btn-sm text-white'>
                                <a href='/#our-product' >Buy Now</a>
                                </button>                                */}
                                <a href="/#our-product" className="btn btn-secondary btn-sm text-white">Buy Now 2</a>
                            </div>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2.jpg" className="w-full"/> /
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <div className='text-center'>
                                <h3 className='text-white font-bold text-xl lg:text-2xl mb-2'>NEW TECHNOLOGY & BUILD</h3>
                                <h1 className='text-white font-bold text-2xl lg:text-5xl mb-3'>WHEELS & PARTS COLLECTION</h1>
                                {/* <button className='btn btn-secondary btn-sm text-white'>
                                <a href='/#our-product' >Buy Now</a>
                                </button>  */}
                                <a href="/#our-product" className="btn btn-secondary btn-sm text-white">Buy Now 1</a>                                 
                            </div>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;