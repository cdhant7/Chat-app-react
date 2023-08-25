import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider ,onAuthStateChanged,signInWithRedirect, signOut} from "firebase/auth";
import { auth } from "../firebase";

//create context
const AuthContext=createContext()

//Provider context
export const AuthProvider=( {children} ) => {

  const[currentUser,setcurrentUser]=useState(null)
  

  //sign in with google
  const signinWithGoogle=() =>{
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  }

  //signout
  const logout= () => signOut (auth);
  

  const value={
   currentUser,
    setcurrentUser,
    signinWithGoogle,
    logout,

  }

  //set current user
  useEffect(() =>{
    const unsubscribe=onAuthStateChanged(auth ,(user) =>{
      setcurrentUser(user)
    });
    return unsubscribe;

  },[]);

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}

export const UserAuth=() =>{
  return useContext(AuthContext)
}