import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {RegistrationContext} from "../Context/RegistrationContextProvider"

const initialFormState = {
    name :"",
    email:"",
    phone:"",
    address:""
}

function RegisterPageOne() {
    const [state,dispatch] = useContext(RegistrationContext,initialFormState);
    const handelchange = (e)=>{
        dispatch({
            type:"Handele Input",
            field:e.target.name,
            payload:e.target.value,
        });
    }
  return (
    <div>
        <input type="text" onChange={handelchange} name="name" value={state.name} placeholder='enter your pwd'/>
        <input type="text" onChange={handelchange} name="email" value={state.email} placeholder='enter your mail'/>
        <button disabled={state.name ==""}  ><Link to="/register/two">next</Link></button>
    </div>
  )
}

export default RegisterPageOne