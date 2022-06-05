import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Countdown({ value }) {
  const [minute, setMinute] = useState(value.minuV);
  const [second, setSecond] = useState(value.secV);
  const [stop, setStop] = useState(false);

  const handleStart = () => {
    setStop(true);
  };
  const handleStop = () => {
    setStop(false);
  };
  const handleReset = () => {
    setMinute(value.minuV);
    setSecond(value.secV);
  };
  useEffect(() => {
    let intv = null;
    if (stop) {
      intv = setInterval(() => {
        if (minute == 0 && second == 0) {
          setMinute(0);
          setSecond(0);
          clearInterval(intv);
          return;
        }
        if (second == 60) {
          setMinute(minute - 1);
          setSecond(second - 1);
          clearInterval(intv);
        }

        if (second < 60) {
          setSecond(second - 1);
          if (second == 0) {
            setSecond(60);
            // setMinute(minute - 1);
            clearInterval(intv);
          }
        }
      }, 50);
    } else {
      clearInterval(intv);
    }
    return () => {
      clearInterval(intv);
    };
  });

  return (
    <div>
      <h1> COUNT DOWN</h1>
      <p style={{ fontSize: "40px" }}>
        <span style={{ color: "red", fontSize: "70px" }}>{minute}</span> m :{" "}
        <span style={{ color: "red", fontSize: "70px" }}>{second}</span> s{" "}
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
