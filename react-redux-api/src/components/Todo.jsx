import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getTodos, GET_TODO_FAILURE, GET_TODO_REQUSET, GET_TODO_SUCCESS } from "../Redux/action"
import TodoInput from "./TodoInput"


function Todo(){

    const dispatch=useDispatch()
    useEffect(()=>{
       getTodos(dispatch)
    },[])
    return(
        <div>
<TodoInput/><br />

        </div>

    )
}

export default Todo