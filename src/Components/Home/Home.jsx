import React from "react";
import Brand from "../Brand/Brand";
import Commitment from "../Commitment/Commitment";
import Footer from "../Footer/Footer";
import Banner from "../Main/Banner";
import TopCategories from "../Products/TopCategories/TopCategories";
import TotalProducts from "../Products/TotalProducts/TotalProducts";
import ComingProducts from "../Products/comingProducts/ComingProducts";
import LatestProducts from "../Products/latestProducts/LatestProducts";
import Review from "../Review/Review";
import SubscribeSection from "../SubscribeSection/SubscribeSection";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <LatestProducts></LatestProducts>
      <TopCategories></TopCategories>
      <ComingProducts></ComingProducts>
      <TotalProducts />
      {/* best seller */}
      {/* <Review /> */}
      {/* Brand  */}
      <Brand />
      {/* Subscribe  section */}
      <SubscribeSection />

      {/* footer */}
      <Review />
      <Commitment />
      <Footer />
    </>
  );
};

export default Home;
