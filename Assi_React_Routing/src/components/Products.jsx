import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const data = async () => {
      let result = await axios.get("http://localhost:8080/data");
      // console.log(result.data);
      setProduct(result.data);
    };
    data();
  }, []);
  return (
    <div>
      Products
      {product.map((item) => (
        <div key={item.id}>
          <div>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>
              <Link to={`/products/${item.id}`}>More Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
