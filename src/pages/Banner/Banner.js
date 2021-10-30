import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return (
        <div className="bg ">
            <h1 className="fw-bolder text-success fs-1 mt-3">Tripo Tourism Agencies</h1>
            <h3 className="fw-bolder txt-cl fs-1 mt-5"> Services <br /> Where would you like to go?</h3>
        </div>
    );
};

export default Banner;