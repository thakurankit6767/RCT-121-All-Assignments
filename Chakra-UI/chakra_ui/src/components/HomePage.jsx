
import { Link } from "react-router-dom";
import   "./homepage.css"

import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="home-div">
        <Link to="/Flexs">
          Flex
        </Link>
        <Link to="/Grids">
        Grids
        </Link>
        <Link to="/Stacks">
         Stacks
        </Link>
        <Link to="/SimpleGrids">
         SimpleGrid
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
