import { useEffect , useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { GoogleAuthProvider , getAuth, signInWithPopup 
    ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,
    updateProfile ,
    signOut,
    onAuthStateChanged} from "firebase/auth";

initializeAuthentication()



const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    // const [error, setError] = useState('')

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


  // update name
  const updatedName=(name)=>{
    // setIsLoading(true)
    updateProfile(auth.currentUser, {displayName:name})
    .then(() => {
        window.location.reload()
      })
    //   .finally(()=> setIsLoading(false));
   }


    // google sign out
 const logOut =()=>{
    setIsLoading(true)
   signOut(auth)
   .then((result) => {
       setUser(result)     

     })
     .finally(()=> setIsLoading(false))
}


// observe user state change
useEffect(()=>{
   
    const unsubscribed = onAuthStateChanged(auth, user =>{
         if(user){
             setUser(user)
         }
         else{
             setUser({})
         }
       setIsLoading(false)
       
     })
     return ()=> unsubscribed ;
  },[])

    return {googleSignIn, logOut,  user, setUser, updatedName, email, setEmail, password, setPassword,
        name,setName, createEmailPassword, isLoading, setIsLoading, signInEmailPassword};
};

export default useFirebase;