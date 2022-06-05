import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../Data";

const Product = () => {
  const cardItem = (product) => {
    return (
      <div
        className="card my-5 py-4"
        key={product.id}
        style={{ width: "18rem" }}
      >
        <img src={product.img} className="card-img-top" alt={product.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="lead">Rs {product.price}</p>
          <NavLink
            to={`/products/${product.id}`}
            className="btn btn-outline-primary ms-2"
          >
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{Data.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
