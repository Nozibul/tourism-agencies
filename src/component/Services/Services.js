
import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('https://quiet-castle-93838.herokuapp.com/travels')
        .then(res=> res.json())
        .then(data=>{
          const reverseData  = data.reverse();
          setServices(reverseData)
        })
    },[])

    return (
       <div>
       
         <div className="container-fluid mt-5">
            <h1 className="fw-bolder text-center" style={{color:"green"}}>Our Available Package</h1>
            <div className="row pb-5">
                    {
                            services?.map((service, index) => <SingleService
                            services={service}
                            key={index}
                            
                            ></SingleService>)
                    }
            </div>
          
          </div>
       </div>
    );
};

export default Services;