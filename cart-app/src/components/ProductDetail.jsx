import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import Data from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

const ProductDetail = () => {
  const [addCart, setAddCart] = useState("Add to Cart");
  {
    /* Now we need a product id which is pass from the product page. */
  }
  const productId = useParams();
  const productDetail = Data.filter((x) => x.id == productId.id);
  const product = productDetail[0];
  console.log(product);

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (addCart === "Add to Cart") {
      dispatch(addItem(product));
      setAddCart("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setAddCart("Add to Cart");
    }
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">Rs {product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-outline-primary my-5"
            >
              {addCart}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
