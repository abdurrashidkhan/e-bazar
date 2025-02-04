import React from "react";
import RegistryGiftingBanner from "./RegistryGiftingBanner";
import RegistryGiftingContent from "./RegistryGiftingContent";
import Review from "../Review/Review";
import Commitment from "../Commitment/Commitment";
import Footer from "../Footer/Footer";

const RegistryGifting = () => {
  return (
    <>
      <div className="container mx-auto px-2">
        <RegistryGiftingBanner />
        <RegistryGiftingContent />
      </div>
      {/* footer */}
      <Review />
      <Commitment />
      <Footer />
    </>
  );
};

export default RegistryGifting;
