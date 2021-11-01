import React from 'react';
import { NavLink } from 'react-router-dom';
import './singleCard.css'


const SingleService = (props) => {
    const {id, name, image , description,cost} = props.services;

    return (
 

           <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-group mt-5">
                <div className="card pb-3">
                    <img src={image}  alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <h5 className="text-center">Cost: ${cost}</h5> 
                    </div>
                    <button className="card-btn mx-auto"><NavLink to={`/services/${id}`} className="nav fw-bolder fs-5  text-success" >Booking Now</NavLink></button>
                </div>
               
            </div>
           </div>
       
    );
};


export default SingleService;