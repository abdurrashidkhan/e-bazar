import React from "react";
import { Link } from "react-router-dom";
import TotalProducts from "./TotalProducts/TotalProducts";
import ProductsBanner from "./TotalProducts/ProductsBanner";
import Review from "../Review/Review";
import Commitment from "../Commitment/Commitment";
import Footer from "../Footer/Footer";

const Products = () => {
  return (
    <>
      <div className="pt-[5rem]">
        <ProductsBanner />
        <TotalProducts />
      </div>
      {/* footer */}
      <Review />
      <Commitment />
      <Footer />
    </>
  );
};

export default Products;
