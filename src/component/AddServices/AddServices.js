import React from 'react';
import { useForm } from "react-hook-form";
import './addService.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
   const onSubmit = data =>{
     console.log(data)
  
    fetch('http://localhost:5000/travel',{
        method:"post",
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    })
      .then(res=>{
         if(res.data){
             alert('Inserted Data successfully')
             reset()
         }
     })
   };

    return (
        <div className="add-service">
            <h4 className="text-center fs-bolder text-success">Place Order</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="your name..." />
                <input {...register("address", { required: true, maxLength: 20 })} placeholder="your address..." />
                <input type="number" {...register("price")} placeholder="phone no..." />
                <input {...register("img")} placeholder="img url"/>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;