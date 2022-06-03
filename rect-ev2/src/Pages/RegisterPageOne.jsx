import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPageOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "Name") {
      setName(e.target.value);
    }
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    }
  };

  return (
    <div>
      Name:
      <input
        onChange={handleChange}
        type="text"
        placeholder="please fill username"
      />
      <br />
      Email:
      <input
        onChange={handleChange}
        type="text"
        placeholder="please fill mail id"
      />
      <br />
      <Link to="/RegisterPageTwo">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default RegisterPageOne;
