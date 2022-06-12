import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authAction } from "../Redux/auth/action";

export const Navbar = () => {
  const isAuthenticate = useSelector((state) => state.authReducer.auth);
  const dispatch = useDispatch();
  const handleAuth = () => {
    dispatch(authAction(!isAuthenticate));
  };
  return (
    <div>
      <Link style={{ marginRight: "1rem", color: "black" }} to="/todo">
        TodoList
      </Link>
      <button onClick={handleAuth}>
        {isAuthenticate ? "Logout" : "Login"}
      </button>
      <br />
      <br />
      <br />
    </div>
  );
};
