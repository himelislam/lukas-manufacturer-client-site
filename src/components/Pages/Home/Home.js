import React from 'react';
import Banner from './Banner';
import BestSeller from './BestSeller';
import BusinessTrust from './BusinessTrust';
import ContactUs from './ContactUs';
import OurTeam from './OurTeam';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestSeller></BestSeller>
            <BusinessTrust></BusinessTrust>
            <Reviews></Reviews>
            <OurTeam></OurTeam>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;