import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './login.css'

 const Login = () => {
    
     const {googleSignIn, setUser ,signInEmailPassword , name
        ,email, setEmail, password, setPassword, setIsLoading} = useAuth()

     const history = useHistory()
     const location = useLocation()
     const uri = location.state?.from || '/home'

         // get Input value
    const handleGetSubmit = (e) =>{
        e.preventDefault()
       
        // signUp email and password
    signInEmailPassword(email, password)
    .then((result) => {
        setIsLoading(true)
        setUser(result.user);
        history.push(uri)
      
      })
      .catch((error) => {
      console.log(error.message);
      })
      .finally(()=>{
        setIsLoading(false)
    })
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
            setIsLoading(true)
            // updatedName(name)
          setUser(result.user);
          history.push(uri)
        })
    
        .finally(()=>{
            setIsLoading(false)
        })
    }

    
 

    return (
        <div className="text-center login">
             <form className="form" onSubmit={handleGetSubmit}>
                <input className="input-area" type="email" onBlur={handleGetEmail} placeholder="email..." /> <br />
                <input className="input-area"  type="password"  onBlur={handleGetPassword} placeholder="password.." /> <br />
                <input className="input-submit"  type="submit" value="login" />
            </form>
            <button className="google-btn" onClick={signInWithGoogle}>Google Sign In</button>
            <p className="text-white fw-bolder">New User?<Link className="text-dark fw-bolder" to="/register">Please Register</Link></p>
       
    </div>
    );
};

export default Login;