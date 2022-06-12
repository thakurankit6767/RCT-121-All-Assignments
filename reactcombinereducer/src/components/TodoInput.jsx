import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postTodoSuccess,postTodoRequest } from "../Redux/Todos/action";
const TodoInput = () => {
  const [text, setText] = useState();
 const dispatch = useDispatch()
 const todos = useSelector(store=>store.todos)
 const auth=useSelector(store=>store.auth)

  
  const handleSubmit = () => {
 
     dispatch(postTodoRequest())
   dispatch(postTodoSuccess(text))
  };
  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="write here"
      />
     
      <input onClick={handleSubmit} type="submit" disabled={auth.logout} />
    </div>
  );
};

export default TodoInput;
