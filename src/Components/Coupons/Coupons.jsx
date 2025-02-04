import React from "react";
import CouponBanner from "./CouponBanner";
import CuoponsProducts from "./CuoponsProducts";
import Review from "../Review/Review";
import Commitment from "../Commitment/Commitment";
import Footer from "../Footer/Footer";

const Coupons = () => {
  return (
    <>
      <div className="container mx-auto px-2">
        <CouponBanner />
        <h1 className="text-xl sm:text-2xl py-5">New Arrivals</h1>
        <CuoponsProducts />
      </div>
      {/* footer */}
      <Review />
      <Commitment />
      <Footer />
    </>
  );
};

export default Coupons;
