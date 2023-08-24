import { createContext, useContext, useState } from "react";

//create context
const AuthContext=createContext()

//Provider context
export const AuthProvider=( {children} ) => {

  const[currentUser,setcurrentUser]=useState(null)

  const value={
    currentUser,
    setcurrentUser

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