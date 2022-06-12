import React from 'react'
import { createContext,useReducer } from "react";
import registerReducer from "./registerReducer"
export const RegistrationContext = createContext();

const  iniState = {
    number:"",
    email:"",
    address:"",
    phone:""
}

function RegistrationContextProvider({children}) {
    const [state,dispatch] = useReducer(registerReducer,iniState);
  return (
    <RegistrationContext.Provider value = {[state,dispatch]}>
            {children}
    </RegistrationContext.Provider>
  
  )
}

export default RegistrationContextProvider