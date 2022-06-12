import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getData } from "../Redux/app/action";


export const Posts = () =>{
const navigate =useNavigate()
const usersData = useSelector(store=>store.app.data)
 return(
        <div>
           {usersData.map((e)=>(
                <div key={e.id} > 
                {e.title}
             
                <div>
                    {e.body}
                </div>
                </div>
            ))}


        </div>
    );
}