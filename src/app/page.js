import Brand from "@/Components/Brand/Brand";
import Commitment from "@/Components/Commitment/Commitment";
import Footer from "@/Components/Footer/Footer";
import Banner from "@/Components/Main/Banner";
import ComingProducts from "@/Components/Products/comingProducts/ComingProducts";
import TopCategories from "@/Components/Products/TopCategories/TopCategories";
import TotalProducts from "@/Components/Products/TotalProducts/TotalProducts";
import Review from "@/Components/Review/Review";
import SubscribeSection from "@/Components/SubscribeSection/SubscribeSection";


const Home = () => {
  return (
    <>
      <Banner></Banner>
      {/* <LatestProducts></LatestProducts> */}
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
