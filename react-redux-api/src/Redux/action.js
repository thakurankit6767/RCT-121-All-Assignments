import axios from "axios"
export const todoact={
    GET_TODO_REQUSET:"GET_TODO_REQUSET",
    GET_TODO_SUCCESS:"GET_TODO_SUCCESS",
    GET_TODO_FAILURE:"GET_TODO_FAILURE",
    ADD_TODO_REQUSET:"ADD_TODO_REQUSET",
    ADD_TODO_SUCCESS:"ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE:"ADD_TODO_FAILURE"
    
    } 
    
    export const GET_TODO_REQUSET=()=>({
        type:todoact.GET_TODO_REQUSET
    })
    
      
    
    export const GET_TODO_SUCCESS=(data)=>({
        type:todoact.GET_TODO_SUCCESS,
        payload:data
    })
    
      
    export const GET_TODO_FAILURE=()=>({
        type:todoact.GET_TODO_FAILURE
    })

    export const getTodos=(dispatch)=>{

        const todoRequestAction=GET_TODO_REQUSET();
        dispatch(todoRequestAction)
axios({
    url:"http://localhost:8080/todos",
    method:"GET"
})
.then(res=>{
    // console.log(res)
    const todoSuccesAction=GET_TODO_SUCCESS(res.data)
dispatch(todoSuccesAction)
}).catch(err=>{
    const todoErrorAction=GET_TODO_FAILURE();
    dispatch(todoErrorAction)
})
    }
    
    export const ADD_TODO_REQUSET=()=>({
        type:todoact.ADD_TODO_REQUSET
    })
    
    export const ADD_TODO_SUCCESS=(data)=>({
        type:todoact.ADD_TODO_SUCCESS,
        payload:data
    })
    
      
    export const ADD_TODO_FAILURE=()=>({
        type:todoact.ADD_TODO_FAILURE
    })

    export const addTodos=({title,dispatch})=>{

        const todoRequestAction=ADD_TODO_REQUSET();
        dispatch(todoRequestAction)
axios({
    url:"http://localhost:8080/todos",
    method:"POST",
    data:{
        title,
        status:false
    }
})
.then(res=>{
    console.log(res)
    alert("Todo added")
    const todoSuccesAction=ADD_TODO_SUCCESS()
dispatch(todoSuccesAction)
}).catch(err=>{
    const todoErrorAction=ADD_TODO_FAILURE();
    dispatch(todoErrorAction)
})
    }