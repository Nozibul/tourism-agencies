import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return (
        <div className="bg ">
            <h3 className="fw-bolder text-success fs-1 mt-3">Tripo Tourism Agen</h3>
            <h1 className="fw-bolder txt-cl fs-1 mt-5"> Services <br /> That You Can Trust</h1>
            <Link to="/about"><button className="p-2 mt-3 btn fw-bolder fs-5">More About Us</button></Link>
        </div>
    );
};

export default Banner;