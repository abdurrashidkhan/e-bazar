import Banner from "@/Components/Main/Banner";
import ComingProducts from "@/Components/Products/comingProducts/ComingProducts";
import TopCategories from "@/Components/Products/TopCategories/TopCategories";
import TotalProducts from "@/Components/Products/TotalProducts/TotalProducts";


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
      {/* <Brand /> */}
      {/* Subscribe  section */}
      {/* <SubscribeSection /> */}

      {/* footer */}
      {/* <Review /> */}
      {/* <Commitment /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
