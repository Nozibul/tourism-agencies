import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
             
                    <div className="col-lg-4 col-md-2 col-sm-12">
                     <h2>Contact</h2>
                     <ul>
                         <li>Phone: 88057491</li>
                         <li>Email: tour@help.com</li>
                         <li>Address</li>
                         <li>123, southzone, Melbourne</li>
                         <li>Australia</li>
                     </ul>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-12">
                     <h2 className="ms-3">Support</h2>
                     <ul>
                         <li>Online Support</li>
                         <li>Free Consultancy</li>
                         <li>24/7 Service</li>
                         <li>Make Call</li>
                         <li>Contact Support</li>
                     </ul>
                    </div>
                    <div className="col-lg-4 col-md-2 col-sm-12">
                     <h2 className="me-5">Opening Hours</h2>
                         <ul>
                             <li>Sun:  09:00 AM-09:00 PM</li>
                             <li>Mon:  08:00 AM-09:00 PM</li>
                             <li>Thu:  10:00 AM-09:00 PM</li>
                             <li>Wed:  09:00 AM-09:00 PM</li>
                             <li>Thu:  10:00 AM-09:00 PM</li>
                         </ul>
                     </div>
                    
                  </div>
                  
                </div>
                <hr />
            <p className="text-white text-center">&copy;Copyright 2021 |Tourism Agencies| All right reserved.</p>
        </div>
    );
};

export default Footer;