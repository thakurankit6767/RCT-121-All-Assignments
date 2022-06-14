import { useState } from "react"
import { useDispatch } from "react-redux"
import { addtodo, getTodos } from "../Redux/action"
function TodoInput(){
    const [text,setText]=useState("")
    const dispatch=useDispatch()
    const handleAddTodo=()=>{
        addtodo({
            title:text,
            dispatch
        }).then(()=>{
            getTodos(dispatch)
        })
    }
        return(
            <div>
                <input type="text"  value={text} 
                onChange={(e)=>setText(e.target.value)} placeholder="add a task"/>
                <button onClick={handleAddTodo}>Add</button>
            </div>
        )
    
}

export default TodoInput