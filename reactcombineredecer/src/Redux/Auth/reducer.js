

import {actionTypes} from "./action"

const initialState ={
    login:JSON.parse(localStorage.getItem("login")) || false,
    logout:JSON.parse(localStorage.getItem("login"))? false :  true 
}

export const AuthReducer=(state=initialState,{type})=>{

    switch(type){
        case actionTypes.LOGIN:{
            localStorage.setItem("login",JSON.stringify(true))
            localStorage.setItem("logout",JSON.stringify(false))
            return{
               
                login:true,
                logout:false
            }
        }
        case actionTypes.LOGOUT:{
            localStorage.setItem("logout",JSON.stringify(true))
            localStorage.setItem("login",JSON.stringify(false))
            return{
                
                login:false,
                logout:true
            } 
        }
        default:
            return state
    }
}