import React, { useState } from "react";
import Countdown from "./Countdown";
import { Link } from "react-router-dom";

export default function User() {
  const [minuteValue, setMinuteValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [state, setState] = useState(false);
  return (
    <div>
      <div style={{ margin: "30px" }}>
        <input
          style={{
            width: "400px",
            height: "120px",
            margin: "12px",
            fontSize: "23px",
            textAlign: "center",
          }}
          type="number"
          placeholder="Enter Minutes"
          onChange={(e) => {
            setMinuteValue(e.target.value);
          }}
        />
        <input
          style={{
            width: "400px",
            height: "120px",
            margin: "12px",
            fontSize: "23px",
            textAlign: "center",
          }}
          type="number"
          placeholder="Enter Seconds"
          onChange={(e) => {
            setSecondValue(e.target.value);
          }}
        />
        <button
          style={{
            width: "400px",
            height: "120px",
            margin: "12px",
            fontSize: "23px",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            setState(true);
          }}
        >
          {" "}
          Set Countdown
        </button>
      </div>

      {state && <Countdown value={{ minuteValue, secondValue }} />}
      <Link to="/">
        <h5
          style={{
            color: "green",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Click here for Stopwatch
        </h5>
      </Link>
    </div>
  );
}
