import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
import Error from "./Error";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route  element={<Error />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
