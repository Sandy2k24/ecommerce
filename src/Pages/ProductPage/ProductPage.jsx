import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const ProductPage = () => {
  return (
    <div className="lg:mx-[50px] ">    
      <SingleProduct />
    </div>
  );
};

export default ProductPage;
