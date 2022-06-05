import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Stopwatch() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [miliSecond, setMiliSecond] = useState(0);
  const [stop, setStop] = useState(false);

  ///function for various functionalities

  const handleStop = () => {
    setStop(false);
  };

  const handleStart = () => {
    setStop(true);
  };

  const handleReset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMiliSecond(0);
  };

  useEffect(() => {
    let intv = null;
    if (stop) {
      intv = setInterval(() => {
        if (minute > 59) {
          setHour(hour + 1);
          setMinute(0);
          clearInterval(intv);
        }
        if (second > 59) {
          setMinute(minute + 1);
          setSecond(0);
          clearInterval(intv);
        }
        if (miliSecond > 999) {
          setSecond(second + 1);
          setMiliSecond(0);
          clearInterval(intv);
        }
        if (miliSecond <= 999) {
          setMiliSecond(miliSecond + 1);
        }
      }, 0.1);
    } else {
      clearInterval(intv);
    }
    return () => {
      clearInterval(intv);
    };
  });

  return (
    <div>
      <h1> STOP WATCH</h1>
      <p style={{ fontSize: "40px" }}>
        <span style={{ color: "red", fontSize: "60px" }}>{hour}</span> h :{" "}
        <span style={{ color: "red", fontSize: "60px" }}>{minute}</span> m :{" "}
        <span style={{ color: "red", fontSize: "60px" }}>{second}</span> s :{" "}
        <span style={{ color: "red", fontSize: "60px" }}>{miliSecond}</span> ms
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>

      <Link to="/countdown">
        <h5
          style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Click here for Countdown
        </h5>
      </Link>
    </div>
  );
}
