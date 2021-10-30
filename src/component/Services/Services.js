
import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {

    const [serviecs, setServices] = useState([])

    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className="container-fluid mt-5">
            <h1 className="fw-bolder text-center" style={{color:"green"}}>Our Available Package</h1>
         
            <div className="row pb-5">
                    {
                            serviecs?.map((service, index) => <SingleService
                            services={service}
                            key={index}
                            
                            ></SingleService>)
                    }
            </div>
          
        </div>
    );
};

export default Services;