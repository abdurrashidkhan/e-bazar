import React from "react";
import GiftBanner from "./GiftBanner";
import { useParams } from "react-router-dom";
import GiftProducts from "./GiftProducts";
import GiftCardCategories from "./GiftCardCategories";
import Review from "../Review/Review";
import Commitment from "../Commitment/Commitment";
import Footer from "../Footer/Footer";

const GiftCard = () => {
  const { page } = useParams();
  return (
    <>
      <div>
        <GiftBanner />
        <GiftCardCategories />
        <GiftProducts key={page} page={page} />
      </div>
      {/* footer */}
      <Review />
      <Commitment />
      <Footer />
    </>
  );
};

export default GiftCard;
