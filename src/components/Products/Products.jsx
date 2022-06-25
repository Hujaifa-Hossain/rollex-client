import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5050/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);
  console.log(products);
  return (
    <div className="container product-container my-5">
      {products.map((product) => (<Product key={product._id} product={product}></Product>))}
    </div>
  );
};

export default Products;
