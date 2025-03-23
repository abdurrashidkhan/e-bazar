"use client"
import Commitment from "@/Components/Commitment/Commitment";
import Loading from "@/Components/Common/Loading";
import Review from "@/Components/Review/Review";
import FindOne from "@/database/find/findOne/findOne";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsShieldCheck, BsTruck } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { TiInputChecked } from "react-icons/ti";



export default function FindSingleProduct() {
  const [selectedColor, setSelectedColor] = useState("Red");
  const [quantity, setQuantity] = useState(1);
  const [IsLoading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const pathname = usePathname();
  const id = pathname?.split("/")[3];
  // console.log(product)
  // Fetch products
  const SingleProducts = async (id) => {
    setLoading(true);
    try {
      const { product } = await FindOne(id);
      setProduct(product);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    SingleProducts(id)
  }, [id])

  // 
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 3);
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
  });
  const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });





  if (IsLoading) {
    return <Loading />;
  }
  return (
    <section>
      <div className="container mx-auto px-2 pt-[8rem] pb-10">
        <div className="">
          <div className="">
            {/* Main Container */}
            <div className="  mx-auto bg-white shadow-lg rounded-lg p-6 md:flex">

              {/* Left - Product Images */}
              <div className="md:w-1/2 border border-[#f5f4f4] rounded shadow-2xl p-3">
                <div className="relative ">
                  <img
                    src={product?.img}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="mx-auto rounded"
                    quality={100}
                    style={{ objectFit: "cover" }}
                    fill="true"
                  /> {/* <Image
                    src={product.img || "/fallback-image.jpg"}
                    alt={product.name}
                    className="rounded-lg w-full max-w-full h-auto hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                    loading="lazy"
                    decoding="async" // ✅ সঠিক সিনট্যাক্স
                  />
                  */}
                  <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs px-2 py-1 rounded capitalize font-medium ">
                    Official brand warranty and guarantee
                  </div>
                  <hr className="my-2" />
                </div>

                {/* Thumbnail Images */}
                <div className="flex space-x-2   px-2">
                  {/* {["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"].map((src, index) => ( */}

                  <img src={product?.img} alt="Thumbnail" width={60} height={60} className="rounded-lg cursor-pointer border border-gray-300 hover:border-purple-500 " />
                  {/* ))} */}
                </div>
              </div>

              {/* Right - Product Details */}
              <div className="mt-10 sm:mt-1 md:w-1/2 md:pl-6">
                <h2 className="text-xl font-semibold capitalize">{product?.title}</h2>

                {/* Ratings */}
                <div className="flex items-center space-x-1 mt-2 text-yellow-500">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                  <span className="text-gray-600 text-sm ml-2">54 Ratings | 98 Answered Questions</span>
                </div>

                {/* Price */}
                <div className="mt-3">
                  <span className="text-2xl font-bold text-orange-500">৳ {product?.price}</span>
                  <span className="text-gray-500 line-through ml-2">৳ {product?.price * product?.productDiscount / 100}</span>
                  <span className="ml-2 bg-orange-100 text-orange-600 px-2 py-1 text-xs rounded">{product?.productDiscount}%</span>
                </div>

                {/* Promotions */}
                <div className="flex  items-center gap-5">
                  <div className="mt-2 bg-orange-100 text-orange-700 px-3 py-1 inline-block rounded text-lg">৳ {(product?.price) - product?.price * product?.productDiscount / 100}

                  </div>
                  <div className="flex items-center gap-1 text-lg mt-2 ca">
                    <TiInputChecked className="text-green-800" />
                    <span className="  text-green-700">{product?.status}</span>
                  </div>
                </div>

                {/* Color Selection */}
                <div className="mt-4">
                  <h3 className="text-md font-semibold">Color Family: {selectedColor}</h3>
                  <div className="flex space-x-2 mt-2">
                    {["Red", "Blue", "Black"].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-lg border-2 ৳{selectedColor === color ? "border-purple-500" : "border-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Storage Selection */}
                <div className="mt-4">
                  <h3 className="text-md font-semibold">Storage Capacity</h3>
                  <div className="flex space-x-2 mt-2">
                    <button className="px-3 py-2 bg-purple-600 text-white rounded-lg">3GB</button>
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-4">
                  <h3 className="text-md font-semibold">Quantity</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                      className="bg-gray-300 px-3 py-1 rounded"
                    >-</button>
                    <span className="text-lg font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-300 px-3 py-1 rounded"
                    >+</button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex space-x-4">
                  <Link href="/product/payment" className="w-full bg-blue-500 text-white py-3 rounded text-center font-semibold">Buy Now</Link>
                  <button className="w-full bg-orange-500 text-white py-3 rounded font-semibold">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* other info  */}
            <div className="py-10 px-2">
              <div className="sm:flex flex-row items-start gap-5">
                <div className="w-[100%] h-auto border-r">
                  {/* Specifications */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border rounded-lg p-4">
                      {[
                        ['Brand', 'HP'],
                        ['Model Name', '14-dq0040nr'],
                        ['Screen Size', '14 Inches'],
                        ['Color', 'Snowflake White'],
                        ['Storage', '64 GB'],
                        ['RAM', '4 GB'],
                      ].map(([label, value]) => (
                        <div key={label} className="border-b pb-2">
                          <dt className="text-gray-600">{label}</dt>
                          <dd className="font-medium">{value}</dd>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Product Features */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">About This Item</h2>
                    <ul className="space-y-3">
                      {product?.productFacture?.map((f, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <GoDotFill className="w-[5%] mt-1" />
                          <p className="w-[100%]">{f?.facture}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Other Sellers */}
                  <div className="border-t pt-8">
                    <h3 className="text-lg font-semibold mb-4">About this item</h3>
                    {product?.description}
                  </div>

                </div>
                {/* Product Header */}
                <div className="w-[100%] sm:w-[35%] h-auto">
                  {/* Product Image - Replace with actual image */}

                  <h1 className="text-2xl font-bold mb-3 sm:mt-0 mt-5">Delivery </h1>
                  {/* Product Details */}
                  <div>
                    {/* Price Section */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">৳ {150 - (170 * 30 / 100)}</span>
                        <span className="text-gray-500 line-through">৳{170 * 30 / 100}</span>
                        <span className="text-red-600">30% off</span>
                      </div>
                      <p className="text-gray-600 mt-1 capitalize">Shipping and import fees within Dhaka city & all cities in Bangladesh ৳100.00 to ৳400.00 </p>
                    </div>

                    {/* Delivery Info */}
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="font-medium capitalize text-slate-800 mb-2">If you order today</p>
                      <div className="flex items-center gap-2 mb-2">
                        <BsTruck className="w-5 h-5 text-blue-600" />
                        <span className="text-[15px] font-semibold capitalize">
                          delivery will be : {dayName}, {formattedDate}</span>
                      </div>


                      <div className="flex items-center gap-2 mb-2">
                        <CiLocationOn className="w-5 h-5 text-blue-700" />
                        <span className="text-base font-medium capitalize">
                          Delivery to Bangladesh</span>
                      </div>

                      <p className="text-red-600 text-sm mt-2">Only 5 left in stock - order soon.</p>
                    </div>
                    {/* Payment Security */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-5">
                      <BsShieldCheck className="w-5 h-5 text-green-600" />
                      <span>Payment Secure transaction</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4 mb-8">
                      <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                        Add to Cart
                      </button>
                      <Link href="/product/payment" className="w-full bg-yellow-400 text-black py-3 rounded hover:bg-yellow-500 transition inline-block text-center">
                        Buy Now
                      </Link>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* other section */}
      <Review />
      <Commitment />
    </section>
  )
}
