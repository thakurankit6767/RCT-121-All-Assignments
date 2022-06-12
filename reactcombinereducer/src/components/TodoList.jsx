
import React from 'react'
import { useSelector } from 'react-redux'



const TodoList = () => {
  const todos=useSelector(store=>store.todos.todos)
  const auth=useSelector(store=>store.auth)
  return (
    <div>
      <h6>Your Todo is here....</h6>
     { auth.login && todos.map(item=><h5>{item}</h5>)}
    </div>
  )
}

export default TodoList