import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

 const Login = () => {
    
     const {googleSignIn, setUser ,signInEmailPassword 
        ,email, setEmail, password, setPassword, user} = useAuth()

     const history = useHistory()
     const location = useLocation()
     const uri = location.state?.from || '/home'

         // get Input value
    const handleGetSubmit = (e) =>{
        e.preventDefault()
       
        // signUp email and password
    signInEmailPassword(email, password)
    .then((result) => {
        setUser(result.user);
        history.push(uri)
      
      })
      // .catch((error) => {
      //   const errorMessage = error.message;
      // })
 }
    

    const handleGetEmail = (e) =>{
        console.log(e.target.value)

        setEmail(e.target.value)
    }
    const handleGetPassword = (e) =>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    // google sign In
    const signInWithGoogle =()=>{
        googleSignIn()
         .then((result) => {
         setUser(result.user);
          history.push(uri)
        })
        // .catch((error) => {
        //   console.log(error)
        // });
    }

    
 

    return (
        <div className="text-center">
             <form onSubmit={handleGetSubmit}>
                <input type="email" onBlur={handleGetEmail} placeholder="email..." /> <br />
                <input type="password"  onBlur={handleGetPassword} placeholder="password.." /> <br />
                <input type="submit" value="login" />
            </form>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <p>New User?<Link to="/register">Please Register</Link></p>
        {/* <div>
            <h2 style={{color:'white'}}>{login ? 'Login Here' : 'Please Register'}</h2>
           
         <form onSubmit={handleSubmit} className="form-body" >
         <div className="pt-5">   
           {!login && <div className="row mb-3 ">
                <div className="col-sm-12">
                  <input onBlur={handleName} type="text" className="w-50 p-2" placeholder="your name" required />
                </div>
            </div>}
            <div className="row mb-3">
                <div className="col-sm-12">
                  <input onBlur={handleEmail} type="email" className="w-50 p-2" placeholder="your email"  required />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-12">
                  <input onBlur={handlePassword} type="password" className="w-50 p-2" placeholder="password"  required />
                </div>
            </div>
             <div>
                <input onChange={handleToggle}  type="checkbox" />
                 {login ? <h4 className="text-success">Registration Done</h4> : 
               <h4 className="text-warning">Registration Complete...?</h4>}
            </div>
            <div className=" row text-danger">{error}</div>
            {/* <button type="submit" onClick={process} className="btn btn-success fw-bolder fs-5">{login ? 'Login' : 'Register'}</button> */}
            {/* {login ? <div className="mt-3">
               <button type="submit" onClick={process} className="btn btn-success fw-bolder mb-2 fs-5">login</button> <br />
                <button onClick={handleReset} type="submit" className="btn btn-success fw-bolder fs-5  ms-2">Reset password</button>
            </div> :<button type="submit" onClick={register} className="btn btn-success fw-bolder fs-5">register</button> }

            <div>----------OR---------</div>
            <button onClick={googleLogIn} type="submit" className=" mt-3 btn btn-success fw-bolder fs-5  ms-2">Google Sign In</button> <br /> <br />

           </div>
         </form>
       
     </div> */}
    </div>
    );
};

export default Login;