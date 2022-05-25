import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-1.jpg" class="w-full"/> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <div className='text-center'>
                                <h3 className='text-white font-bold text-2xl mb-2'>NEW TECHNOLOGY & BUILD</h3>
                                <h1 className='text-white font-bold text-5xl mb-3'>WHEELS & TIRES COLLECTION</h1>
                                <button className='btn btn-secondary btn-sm text-white'>Book Now</button>                               
                            </div>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-2.jpg" class="w-full"/> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <div className='text-center'>
                                <h3 className='text-white font-bold text-2xl mb-2'>NEW TECHNOLOGY & BUILD</h3>
                                <h1 className='text-white font-bold text-5xl mb-3'>WHEELS & TIRES COLLECTION</h1>
                                <button className='btn btn-secondary btn-sm text-white'>Book Now</button>                               
                            </div>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;