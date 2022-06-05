import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch/Stopwatch';
import {Routes, Route} from "react-router-dom"
import User from './Stopwatch/User';
import Tic from './Tic-Toc/Tic';
import Navbar from './Stopwatch/Navbar';
import Navbar2 from './Tic-Toc/Navbar2';

function AllRoute() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Stopwatch/>}></Route>
        <Route path="/countdown" element={<User/>}></Route>
        <Route path="/tic" element={<Tic/>}></Route>
      </Routes>
   
    </div>
  );
}

export default AllRoute;