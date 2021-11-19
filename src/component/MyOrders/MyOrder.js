import React,{useEffect, useState} from 'react';
import Footer from '../../pages/Footer/Footer';
import Header from '../../pages/Header/Header';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth'


const MyOrder = () => {
    const {user} = useAuth()
    const [myOrder, setMyOrder] = useState([]);

    useEffect(()=>{
      const url = `https://quiet-castle-93838.herokuapp.com/order?email=${user.email}` ;
      fetch(url)
      .then(res=>res.json())
      .then(data=>setMyOrder(data))
    },[user?.email])

    const handleOrderDelete = (id) =>{
     const permission = window.confirm('Are You Sure? You Went delete')
     if(permission){
        console.log(id)
        const url = `https://quiet-castle-93838.herokuapp.com/orderDelete/${id}` ;
        fetch(url,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Successfully Deleted')
                const remaining = myOrder.filter(myOrders=> myOrders._id !== id)
                setMyOrder(remaining)
            }
        })
      }
    }

    return (
        <div>
        <Header />
         <div className="container mt-5 mb-5"> 
           <h3 className="text-success text-center pt-3">My Order: {myOrder?.length}</h3>
             <Table responsive striped bordered hover>
                 <thead>
                     <tr>
                     <th>No.</th>
                     <th>Email</th>
                     <th>Name</th>
                     <th>Address</th>
                     <th>status</th>
                     <th>Delete</th>
                     
                    
                     </tr>
                 </thead>
                 <tbody>
                   {
                     myOrder.map((orders, index)=><tr key={index}>
                        
                             <td>{index+1}.</td>
                             <td>{orders.email}</td>
                             <td>{orders.name}</td>
                             <td>{orders.address}</td>
                             <td>{orders.status}</td>
                              <td>
                              <button
                                 onClick={() => handleOrderDelete(orders?._id)}
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
          <Footer></Footer>
              
         </div>
     );
};

export default MyOrder;