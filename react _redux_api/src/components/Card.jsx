import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTodos, removeTodo, updateTodos } from "../Redux/Todo/action";

const cardStyle = {
  border: "1px solid",
  width: "fit-content",
  padding: "10px",
};
const Card = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    updateTodos({ dispatch, id, completed });
    fetchTodos(dispatch);
  };
  const handleDelete = () => {
    removeTodo({ id, dispatch });
  };
  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div style={cardStyle}>
      {/* <Link style={linkStyle} to={ `todo/${id}`} > */}
      <span>{title}</span>
      <button onClick={handleStatus}>
        {completed ? "completed" : "not completed"}
      </button>
      <button onClick={handleDelete}>Delete</button>
      {/* </Link> */}
    </div>
  );
};

export default Card;
