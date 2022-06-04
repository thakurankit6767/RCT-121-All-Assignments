import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink,Link } from "react-router-dom";
const Product = () => {
  const [product, setProduct] = useState({});
  // console.log(product);
  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/data/${id}`)
        .then((result) => result.json())
        .then((data) => setProduct(data));
    }
  }, [id]);
  return (
    <div>
      <div>Product id- {id}</div>
      <div>Product Name-{product.name}</div>
      <div>Product Price-{product.price}</div>
    <button ><Link to="/products">Back</Link></button>
    </div>
  );
};

export default Product;
