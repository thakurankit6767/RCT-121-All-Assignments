import { Routes, Route, Link } from "react-router-dom";

import AllRoute from "./AllRoute";
import Github from "./Github/Github";
import Boxs from "./Github/Boxs";
function App() {
  return (
    <div className="App">
    <AllRoute/>
    {/* <Github/> */}
    <Boxs/>
    </div>
  );
}

export default App;
