import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <div
      style={{
        background: "black",
        padding: "9px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <span>Todo App</span>
      {/* {user ? <button>Logout</button> : <button>Login</button>} */}
    </div>
  );
};

export default Navbar;
