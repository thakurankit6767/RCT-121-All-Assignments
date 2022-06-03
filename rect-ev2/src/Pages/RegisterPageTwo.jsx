import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPageTwo = () => {

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    if (e.target.address === "Address") {
      setAddress(e.target.value);
    }
    if (e.target.phone === "Phone") {
      setPhone(e.target.value);
    }
  };
  return (
    <div>
     Address: <input type="text" placeholder="Please Fill Your Address" onChange={handleChange}/>
      <br />
      Phone Number:<input type="text" placeholder="Please Fill Your Phone Number" onChange={handleChange} />
      <br />

      <Link to="/">
        <button>Previous</button>
      </Link>
      <Link to="/Dashboard">
        <button>Submit</button>
      </Link>
    </div>
  );
};

export default RegisterPageTwo;
