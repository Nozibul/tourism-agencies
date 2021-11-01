import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className="about">                      
             <div className="row container-fluid">
                 <h4 className="text-success text-center mt-5">About Us</h4>
                 <h1 className="fw-bolder mt-3">Travel the most beautiful place in the world</h1>
                 <p className="fw-bolder fs-5">Journey are best measure in a friends <br /> 
                   Journey are best measure in a friends. We help you launch your <br /> 
                      Travel the most beautiful place in the world Insanely Fast Internet.</p>
                  <h2 className="text-center">Our Major Services in Country</h2>    
                 <ul className="fw-bolder text-center">
                     <li>California</li>
                     <li>Canada</li>
                     <li>London</li>
                     <li>Switzerland</li>
                     <li>Romania</li>
                 </ul>
             </div> 
            </div> 
                        
    );
};

export default About;