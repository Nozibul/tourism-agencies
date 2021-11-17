import React from 'react';
import Banner from '../../pages/Banner/Banner';
import Footer from '../../pages/Footer/Footer';
import Header from '../../pages/Header/Header';
import Blog from '../Blog/Blog';
import Destination from '../Destination/Destination';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
             <Header />
            <Banner />
            <Services />
            <Blog />
            <Destination />
            <Footer />
        </div>
    );
};

export default Home;