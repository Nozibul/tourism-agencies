import React from "react";
import Rating from "react-rating";
import { NavLink } from "react-router-dom";
import "./singleCard.css";

const SingleService = (props) => {
  const { _id, name, image, description, cost, rating , day} = props.services;

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card-group mt-5">
        <div className="card pb-3">
          <img src={image} alt="" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description.slice(0, 74)}</p>
            <p > Rating: <Rating initialRating={rating}
             readonly 
             className="text-success"
             fullSymbol="fas fa-star rating-color"
             emptySymbol="far fa-star rating-color"
             /> </p>
            <h5 >Cost: ${cost}</h5>
            <p >Duration: {day}</p>
          </div>
          <button className="card-btn mx-auto">
            <NavLink
              to={`/services/${_id}`}
              className="nav fw-bolder fs-5  text-success"
            >
              Booking Now
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
