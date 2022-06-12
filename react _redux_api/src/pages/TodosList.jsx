
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import {fetchTodos} from "../Redux/Todo/action"
const TodosList = () => {
const dispatch=useDispatch()
const todos=useSelector(store=>store.todos)
useEffect(()=>{
  fetchTodos(dispatch)
},[])

  return (
    <div>
      <h6>Your todos's is here</h6>
      {todos?.map(item=>
      <Card key={item.id} {...item}/>
        )}
    </div>
  );
};

export default TodosList;
