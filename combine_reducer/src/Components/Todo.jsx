import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTodo } from "../Redux/Todo/action";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const dispatch = useDispatch();
  const [showTodoList, setShowTodoList] = useState(false);

  useEffect(() => {
    getTodo(dispatch);
  }, []);

  return (
    <div>
      <TodoInput />
      <button onClick={() => setShowTodoList(!showTodoList)}>
        {showTodoList ? "Hide Todo" : "Show Todo"}
      </button>
      {showTodoList ? <TodoList /> : null}
    </div>
  );
};
