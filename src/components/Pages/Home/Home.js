import React from 'react';
import Banner from './Banner';
import BestSeller from './BestSeller';
import BusinessTrust from './BusinessTrust';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestSeller></BestSeller>
            <BusinessTrust></BusinessTrust>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;