// // Write code for Registration context
// import React from "react";
// export const AppContext = React.createContext();

// const RegistrationContextProvider = () => {
//   return <AppContext.Provider>{children}</AppContext.Provider>;
// };

// export default RegistrationContextProvider;


// Write code for Registration context
import React, { useReducer } from "react";

// write reducer for the registartion reducer

export const initState={
    username:"",
    email:"",
    address:"",
    phone:null
    }
    
    export const RegisterActions={
     "username": "username",
    "email":"email",
    "address":"address",
     "phone":"phone"
    }
    export const reducer=(state,action)=>{
        switch(action.type){
            case RegisterActions.username:{
                return({
                    ...state,
                    username:action.payload
                })
            }
            case RegisterActions.address:{
                return({
                    ...state,
                    address:action.payload
                })
            }
            case RegisterActions.email:{
                return({
                    ...state,
                   email:action.payload
                })
            }
            case RegisterActions.phone:{
                return({
                    ...state,
                    phone:action.payload
                })
            }
        }
    
    }
export const RegistrationContex= React.createContext()
export const RegistrationContexProvider=({children})=>{
    
    const[{username,email,address,phone},dispatch]=useReducer(reducer,initState)

    return(
        <RegistrationContex.Provider value={[username,email,address,phone,dispatch]}>{children}</RegistrationContex.Provider>
    )
}