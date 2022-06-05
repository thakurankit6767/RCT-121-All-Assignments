import React, { useState } from "react";
import "./tic.css";

export default function Tic() {
  const [t, setT] = useState("X");
  const [b, setB] = useState(Array(9).fill(""));
  const [w, setW] = useState(null);

  const win = (g) => {
    let com = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, , 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 6],
      ],
      daigonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let key in com) {
      com[key].forEach((el) => {
        if (g[el[0]] === "" || g[el[1]] == "" || g[el[2]] == "") {
          //    continue;
        } else if (g[el[0]] === g[el[1]] && g[el[1]] === g[el[2]]) {
          setW(g[el[0]]);
        }
      });
    }
  };

  const handleClick = (value) => {
    if (b[value] !== "") {
      return;
    }
    let g = [...b];

    if (t === "X") {
      g[value] = "X";
      setT("O");
    } else {
      setT("X");
      g[value] = "O";
    }
    win(g);
    setB(g);
    console.log(g);
  };

  const Box = ({ value }) => {
    return <td onClick={() => handleClick(value)}>{b[value]}</td>;
  };

  const reset = () => {
    setW(null);
    setB(Array(9).fill(""));
  };
  return (
    <div className="container">
      <table>
        <h3>Turn For : {t}</h3>
        <tbody>
          <tr>
            <Box value={0} />
            <Box value={1} />
            <Box value={2} />
          </tr>
          <tr>
            <Box value={3} />
            <Box value={4} />
            <Box value={5} />
          </tr>
          <tr>
            <Box value={6} />
            <Box value={7} />
            <Box value={8} />
          </tr>
        </tbody>
      </table>
      {w && (
        <div>
          <p> {w} is the w</p>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}
