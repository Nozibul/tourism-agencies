import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';
import './addService.css'

const AddServices = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
   const onSubmit = (data) =>{
      data.status="pending";
    fetch('https://quiet-castle-93838.herokuapp.com/orders',{
        method:"post",
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data =>{
        if(data.insertedId){
            alert('Successfully added the Database')
             reset()
        }
        
    })
   };

    return (
        <div className="add-service">
            <h4 className="text-center fs-bolder text-success mt-4 ">Place Order</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user?.email} {...register("email", { required: true,  })} placeholder="your email..." />
                <input {...register("name", { required: true,  })} placeholder="your name..." />
                <input {...register("address", { required: true,  })} placeholder="your address..." />
                <input type="number" {...register("phone")} placeholder="phone no..." />

                <input className="place-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddServices;