import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../../pages/Footer/Footer';
import Header from '../../pages/Header/Header';
import './addProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
   const onSubmit = (service) =>{
  
    fetch('https://quiet-castle-93838.herokuapp.com/travels',{
        method:"post",
        headers:{
            'content-type': "application/json"
        },
        body: JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data =>{
        if(data.insertedId){
            alert('Successfully added Product')
             reset()
        }
        
    })
   };

    return (
       <div>
        <Header />
          <div className="container add-product">
            <h4 className="text-center fs-bolder text-success mt-4 text-white">Place Order</h4>
            <form  className="text-center" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("image", { required: true,  })} placeholder="location image..." />
                <input {...register("name", { required: true,  })} placeholder="location name..." />
                <input {...register("description", { required: true,  })} placeholder="description..." />
                <input type="number"{...register("rating", { required: true,  })} placeholder="rating(0/5)" />
                <input type="number" {...register("cost",{ required: true,  })} placeholder="cost..." />
                <input type="number" {...register("day",{ required: true,  })} placeholder="duration..." />

                <input className="place-btn" type="submit" />
            </form>
          </div>
         <Footer />
       </div>
    );
};

export default AddProduct;