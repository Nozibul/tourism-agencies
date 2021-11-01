import React from 'react';
import Banner from '../../pages/Banner/Banner';
import Blog from '../Blog/Blog';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Blog />
            <Destination />
        </div>
    );
};

export default Home;