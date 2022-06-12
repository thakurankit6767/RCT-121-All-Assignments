import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodos } from "../Redux/Todo/action";

const AddTodos = () => {
  const dispatch = useDispatch();
  let [text, setText] = useState("");
  const handleSubmit = () => {
    createTodos({ dispatch, text });
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="write your todos here"
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
};

export default AddTodos;
