import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const ServicesDetails = () => {
    const {Id}= useParams();

    const [details, setDetails] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/travel')
        .then(res=> res.json())
        .then(data=>setDetails(data))
    },[])

     const serviceDetail= details.filter(dt=> dt.id === parseInt(Id) );
    
    return (
        
        <div  className="container w-50 h-25 justify-content-center ">
            <div className="row col-sm-12">
                {
                    serviceDetail ? (serviceDetail.map(service=>(
                        <div className="card mb-3">
                            <img src={service.image} alt="" />
                            <div className="card-body">
                                 <h3 className="text-center fw-bolder">{service.name}</h3>
                                <h5 className="card-title text-center">{service.title}</h5>
                                <p className="card-text text-center">{service.description}</p> 
                                <h2 className="text-center">Cost: ${service.cost}</h2> 
                                <p className="text-center">Days : {service.day}</p>              
                            </div>
                        </div>
                    )
                    )) : <p>Data Not found</p>
                }
            </div>
        </div>
    );
};

export default ServicesDetails;