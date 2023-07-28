import {  createContext, useContext, useState } from "react";

//create context
const AuthContext = createContext;

//provider context
export const AuthProvider = ({ Children }) => {
  const [currentUser, SetcurrentUser] = useState(null);

  const value = {
    currentUser,
    SetcurrentUser,
  };
  return(
     <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>
     );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
