import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleError, handlrequest, handleSuccess } from "../Redux/auth/action"

export const Home =() =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const loginData = () =>{
        
       return axios({
            method : "POST",
            url : "https://reqres.in/api/login",
          
        })
        .then((res)=>{

        

            navigate("/posts")
            
           

        })
        .catch((e)=>{
            const apierror =handleError()
            
        })
    }


    

    return(
    <div>

     
      
       
            
            <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} />
            <br/>
            
            <input type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <br/>
            

            <button onClick={()=>{loginData()}}>submit</button>
            
           

    </div>
    )

}