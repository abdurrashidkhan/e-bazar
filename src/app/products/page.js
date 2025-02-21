import Commitment from "@/Components/Commitment/Commitment";
import ProductsBanner from "@/Components/Products/TotalProducts/ProductsBanner";
import TotalProducts from "@/Components/Products/TotalProducts/TotalProducts";
import Review from "@/Components/Review/Review";

export default function page() {
  return (
    <section>
      <div className="">
        <ProductsBanner />
        <TotalProducts />
        <Review />
        <Commitment />
      </div>
    </section >
  )
}
