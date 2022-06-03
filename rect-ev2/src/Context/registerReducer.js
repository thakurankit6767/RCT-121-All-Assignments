// import axios from "axios";
// import { useContext } from "react";
// import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";

// function registerReducer() {
//   const [state, dispatch] = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (state.isAuth) {
//     return <Navigate to="/dashboard" />;
//   }


//   return (
//     <>
//       <button onClick={RegisterUser}>Register</button>
//     </>
//   );
// }
// export default registerReducer;




// write reducer for the registartion reducer

export const initState={
    "username":"",
    "email":"",
    "address":"",
    "phone":null
    }
    
    export const RegisterActions={
     username: "username",
     email:"email",
     address:"address",
     phone:"phone"
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