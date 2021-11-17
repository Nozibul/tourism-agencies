import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import Footer from '../../pages/Footer/Footer';
import Header from '../../pages/Header/Header';

const AllOrders = () => {
    const [allOrder, setAllOrder]= useState([])

    useEffect(()=>{
        fetch('https://quiet-castle-93838.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setAllOrder(data))
    },[])

    //delete all orders
    const handleDeleteOrder = (id) =>{
        console.log(id)
        const permission = window.confirm('Are you sure ? you went delete')
         if(permission){
         const url = `https://quiet-castle-93838.herokuapp.com/orders/${id}`
        fetch(url,{
            method: "DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount>0){
              alert('Successfully delete')
              const remainingUser = allOrder.filter(orders => orders._id !== id)
             setAllOrder(remainingUser)
         }
       })
      }
    }
   
   
    return (
     <div>
       <Header />
        <div className="container mt-5 mb-5"> 
          <h3 className="text-success text-center pt-3">Total Order: {allOrder?.length}</h3>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Delete</th>
                   
                    </tr>
                </thead>
                <tbody>
                  {
                    allOrder.map((orders, index)=><tr key={index}>
                       
                            <td>{index+1}.</td>
                            <td>{orders.email}</td>
                            <td>{orders.name}</td>
                            <td>{orders.phone}</td>
                            <td></td>
                            <td>
                             <button
                                onClick={() => handleDeleteOrder(orders._id)}
                                className="bg-danger text-white border rounded-3"
                                >
                             Delete
                            </button> 
                            </td>            
                    </tr>
                    )
                  }  
                 
                </tbody>
             </Table>
          </div> 
         <Footer>
             </Footer> 
        </div>
    );
};

export default AllOrders;