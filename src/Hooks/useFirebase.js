import { useEffect , useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { GoogleAuthProvider , getAuth, signInWithPopup 
    ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

initializeAuthentication()



const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

   // google sign in
   const googleSignIn = ()=>{
   return signInWithPopup(auth, googleProvider)
 
   }

   // create email and password
   const createEmailPassword = (email, password) =>{
       console.log(email, password)
    return createUserWithEmailAndPassword(auth, email, password)
  
   }


   // sign in email and password
   const signInEmailPassword = (email, password)=>{
   return signInWithEmailAndPassword(auth, email, password)
   
   }


    return {googleSignIn, user, setUser, email, setEmail, password, setPassword,
        name,setName, createEmailPassword, signInEmailPassword};
};

export default useFirebase;