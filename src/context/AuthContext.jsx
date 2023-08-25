import { createContext, useContext, useState } from "react";
import { GoogleAuthProvider ,signInWithRedirect} from "firebase/auth";
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

  const value={
    currentUser,
    setcurrentUser,
    signinWithGoogle

  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}

export const UserAuth=() =>{
  return useContext(AuthContext)
}