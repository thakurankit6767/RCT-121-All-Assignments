import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import P1 from "./components/P1";
import P2 from "./components/P2";
import P3 from "./components/P3";
import Page1 from "./Chakra_DashBoard/Page1";
import Page2 from "./Chakra_DashBoard/Page2";
import NavbarDash from "./Chakra_DashBoard/NavbarDash";

const AllRoute = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <NavbarDash />
        <Routes>
          <Route path="/one" element={<P1 />}></Route>
          <Route path="/two" element={<P2 />}></Route>
          <Route path="/three" element={<P3 />}></Route>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default AllRoute;
