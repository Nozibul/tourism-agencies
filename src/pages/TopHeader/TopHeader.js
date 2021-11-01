import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook ,faTwitter, faInstagram ,faGooglePlus,  } from '@fortawesome/free-brands-svg-icons'


import './topHeader.css'


const TopHeader = () => {
    return (
        
            <div className="row bg-top m-auto">
                <div className="col-lg-3 col-sm-6  ">
                    <p className="text-center mt-1 "><Link className="contact" to="/contact">needhelp@tripo.com</Link></p>
                </div>
                <div className="col-lg-3 col-sm-12 ">
                  <p className="text-center mt-1">
                   <FontAwesomeIcon icon={faPhone} /><Link className="contact" to="/contact">+00182678976</Link></p>

                </div>
                <div className="col-lg-6 col-sm-12 ">
                 
                    <div className=" text-center  icon-body mt-2">
                            <FontAwesomeIcon className="mx-2 fs-6 icon-body " icon={faFacebook} /> 
                            <FontAwesomeIcon className="mx-2 fs-6 icon-body" icon={faTwitter} /> 
                            <FontAwesomeIcon className="mx-2 fs-6 icon-body" icon={faInstagram} /> 
                            <FontAwesomeIcon className="mx-2 fs-6 icon-body" icon={faGooglePlus} />
                            
                    </div>
                   
                   
                </div>
            </div>
      
    );
};

export default TopHeader;