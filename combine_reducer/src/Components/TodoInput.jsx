import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getTodo } from "../Redux/Todo/action";

export const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleTodoList = () => {
    addTodo({
      title: text,
      dispatch,
    }).then(getTodo(dispatch));
  };
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleTodoList}>Add Todo</button>
    </div>
  );
};