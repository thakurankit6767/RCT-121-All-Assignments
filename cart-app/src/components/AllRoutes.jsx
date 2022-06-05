import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Product from "./Product";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ProductDetail from "./ProductDetail";
import ErrorPage from "./ErrorPage";


const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Navigate to="/ErrorPage" element={<ErrorPage/>} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
