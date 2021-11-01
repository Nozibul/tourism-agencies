import React from 'react';
import './about.css'

const About = () => {
    return (
        <div>                      
             <div className="row container-fluid">
                 <h4 className="text-success mt-5">About Us</h4>
                 <h1 className="fw-bolder mt-3">We Are Caring For Your Eye Health Hospital</h1>
                 <p className="fw-bolder fs-5">A new way to practice without the hassle <br /> of and expense of
                      office space. We help you launch your <br /> private practice with ease.
                       Modern Open Design. EHR & Billing Support. Insanely Fast Internet.</p>
                 <ul className="fw-bolder">
                     <li>Best lasik treatment</li>
                     <li>Treats minor illnesses</li>
                     <li>Special eye exam</li>
                     <li>Contact lens service</li>
                     <li>Special Retina exam</li>
                 </ul>
                 <button className="mb-5 mt-5 w-25 m-auto fw-bolder btn">More About Us</button>
             </div> 
            </div> 
                        
    );
};

export default About;