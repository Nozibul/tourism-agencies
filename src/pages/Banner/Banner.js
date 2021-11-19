import React from 'react';
import './banner.css'
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <div className="banner text-center">
            <Fade left>
               <h1 className="fw-bolder text-white fs-1 pt-5">Tripo Tourism Agencies</h1>

          </Fade>
          <Fade right>
            <h4 className="fw-bolder txt-cl fs-1 mt-5"> Services <br /> Where would you like to go?</h4>
          </Fade>
        </div>
    );
};

export default Banner;