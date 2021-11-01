import React from 'react';
import './Destination.css'
import img1 from './../../assets/image/1.jpg'
import img2 from './../../assets/image/2.jpg'
import img3 from './../../assets/image/3.jpg'


const Destination = () => {
    return (
        <div className="row container mx-auto my-5">
            <h3 className="fw-bolder text-success text-center">DESTINATION</h3>
            <div className="card col-lg-4 col-sm-12 border">
              <h2 className="text-center">DUBAI</h2>  
              <p className="text-center"><img className="dubai" src={img1} alt="" /></p>
            </div>
            <div className=" card col-lg-4 col-sm-12 border">
              <h2 className="text-center">ETALY</h2>
              <p className="text-center"><img className="dubai" src={img2} alt="" /></p>

            </div>
            <div className="card col-lg-4 col-sm-12 border">
             <h2 className="text-center">CANADA</h2>
               <p className="text-center"><img className="dubai " src={img3} alt="" /></p>
            </div>
        </div>
    );
};

export default Destination;