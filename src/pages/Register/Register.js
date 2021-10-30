import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {googleSignIn, setUser,createEmailPassword, email,
        setEmail,password,setPassword, name, setName, user} = useAuth()



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
          setUser(result.user);
          history.push(uri)
        })
        // .catch((error) => {
        //   console.log(error)
        // });
    }

  // create email and password
  const handleEmailPassword = () =>{
    createEmailPassword(email, password)
    .then((result) => {
        setUser(result.user);
        history.push(uri)
      })
    //   .catch((error) => {
    //   //   const errorMessage = error.message;
        
    //   })
  }



    return (
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <input type="text" onBlur={handleName} placeholder="your name..."/> <br />
                <input type="email" onBlur={handleEmail} placeholder="email..." /> <br />
                <input type="password"  onBlur={handlePassword} placeholder="password.." /> <br />
                <input type="submit" value="Register" />
            </form>
            <button onClick={signInWithGoogle}>google Sign In</button>
            <p>Old User?<Link to="/login">Please Login</Link></p>

        </div>
    );
};

export default Register;