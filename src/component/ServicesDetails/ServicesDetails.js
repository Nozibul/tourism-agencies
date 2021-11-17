import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddServices from "../AddServices/AddServices";

const ServicesDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://quiet-castle-93838.herokuapp.com/travels")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

//   const handleDelete = (id) => {
//     const url = `https://quiet-castle-93838.herokuapp.com/${id}`;
//     fetch(url, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())

//       .then((data) => {
//         if (data.deletedCount > 0) {
//           alert("deleted successfully");
//           const remaining = details.filter((details) => details._id !== id);
//           setDetails(remaining);
//         }
//       });
//   };

  const serviceDetail = details.filter((dt) => dt._id === id);

  return (
    <div className="container-fluid ">
      <div className="row  ">
        <div className="col-lg-8 ">
          {serviceDetail ? (
            serviceDetail.map((service) => (
                <div key={service._id} className="container  mt-4 mb-4 d-flex justify-content-center align-items-center">
                <div className=" m-4">  
                    <img height="220px" src={service.image} alt="" />
                 </div>
                     <div className=" align-items-center">
                         <h4 className="text-info fw-bolder">{service?.title}</h4>
                         <p>{service?.description}</p> 
                         <h5 className="text-info">Price: ${service?.cost}</h5>   
                     </div>
                 
             </div>
              
            ))
          ) : (
            <p>Data Not found</p>
          )}
        </div>
        <div className="col-lg-4">
          {" "}
          <AddServices />{" "}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
