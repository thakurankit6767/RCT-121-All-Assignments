import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todo = useSelector((state) => state?.todoReducer?.todo);
  const loading = useSelector((state) => state.loading);
  console.log(todo);
  return (
    <div>
      <h1>Todos</h1>
      {loading && <div>Loading....</div>}
      {todo?.map((e) => (
        <div key={e.id}>{e.title} - {e.status === false ? "Not Completed" : "Completed"}</div>
      ))}
    </div>
  );
};