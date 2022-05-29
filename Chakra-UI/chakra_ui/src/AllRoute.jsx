import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Flexs from "./components/Flexs";
import SimpleGrids from "./components/SimpleGrids";
import Grids from "./components/Grids";
import Stacks from "./components/Stacks";
import HomePage from  "./components/HomePage";

const AllRoute = () => {
  return (
    <div>
      {" "}
      <div className="App">
        <HomePage />
        <Routes>
          <Route path="/Flexs" element={<Flexs />}></Route>
          <Route path="/SimpleGrids" element={<SimpleGrids />}></Route>
          <Route path="/Grids" element={<Grids />}></Route>
          <Route path="/Stacks" element={<Stacks />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AllRoute;
