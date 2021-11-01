import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './register.css'

const Register = () => {
    const {googleSignIn, setUser,createEmailPassword, email, name,
        setEmail,password,setPassword,setIsLoading, updatedName,  setName, user} = useAuth()



    // get Input value
    const handleSubmit = (e) =>{
        e.preventDefault()
        handleEmailPassword()
    }
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        // console.log(e.target.value)
        setPassword(e.target.value)
    }


    // redirect
     const history = useHistory()
     const location = useLocation()
     const uri = location.state?.from || '/home'
    
     // google Sign In
    const signInWithGoogle =()=>{
        googleSignIn()
         .then((result) => {
            setIsLoading(true)
            updatedName(name)
          setUser(result.user);
          history.push(uri)
        })
            // .catch((error) => {
            // console.log(error)
            // });
        .finally(()=>{
            setIsLoading(false)
        })
    }

  // create email and password
  const handleEmailPassword = () =>{
    createEmailPassword(email, password)
    .then((result) => {
        setIsLoading(true)
        updatedName(name)
        setUser(result.user);
        history.push(uri)
      })
      .catch((error) => {
        console.log(error)
        
      })
      .finally(()=>{
        setIsLoading(false)
    })
  }



    return (
        <div className="text-center register">
         
            <form className="form" onSubmit={handleSubmit}>
                    <input className="input-area" type="text" onBlur={handleName} placeholder="your name..."/> <br />
                    <input className="input-area" type="email" onBlur={handleEmail} placeholder="email..." /> <br />
                    <input className="input-area" type="password"  onBlur={handlePassword} placeholder="password.." /> <br />
                    <input className="input-submit" type="submit" value="Register" />
                </form>
                <button className="submit-btn" onClick={signInWithGoogle}>google Sign In</button>
                <p className="text-white fw-bolder">Old User?<Link className="text-dark fw-bolder" to="/login">Please Login</Link></p>

          </div>
        
    );
};

export default Register;