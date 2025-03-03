"user client"
import React from "react";
import GiftBanner from "./GiftBanner";
import { useParams } from 'next/navigation'
import GiftProducts from "./GiftProducts";
import GiftCardCategories from "./GiftCardCategories";
import Review from "../Review/Review";
import Commitment from "../Commitment/Commitment";
import Footer from "../Footer/Footer";
import './style.css'
const GiftCard = () => {
  const { page } = useParams();
  return (
    <>
      <div>
        <GiftBanner />
        <GiftCardCategories />
      </div>
    </>
  );
};

export default GiftCard;
