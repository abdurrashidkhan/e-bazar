"use client"
import Commitment from "@/Components/Commitment/Commitment";
import Review from "@/Components/Review/Review";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function FindSingleProduct() {
  const [selectedColor, setSelectedColor] = useState("Red");
  const [quantity, setQuantity] = useState(1);
  const pathname = usePathname();
  const id = pathname?.split("/")[3];


  return (
    <section>
      <div className="container mx-auto px-2 pt-[8rem] pb-10">
        <div className="">
          <div className="">
            {/* Main Container */}
            <div className="  mx-auto bg-white shadow-lg rounded-lg p-6 md:flex">

              {/* Left - Product Images */}
              <div className="md:w-1/2">
                <div className="relative">
                  <Image
                    src="/images/main-product.jpg"
                    alt="Imam i8 Lily"
                    width={400}
                    height={500}
                    className="rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs px-2 py-1 rounded">
                    Official Brand Warranty
                  </div>
                </div>

                {/* Thumbnail Images */}
                <div className="flex space-x-2 mt-3">
                  {["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"].map((src, index) => (
                    <Image key={index} src={src} alt="Thumbnail" width={60} height={60} className="rounded-lg cursor-pointer border border-gray-300 hover:border-purple-500" />
                  ))}
                </div>
              </div>

              {/* Right - Product Details */}
              <div className="md:w-1/2 md:pl-6">
                <h2 className="text-xl font-semibold">Imam i8 Lily (RAM-3GB/ROM-32GB) 3600mAh Mobile Phone</h2>

                {/* Ratings */}
                <div className="flex items-center space-x-1 mt-2 text-yellow-500">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                  <span className="text-gray-600 text-sm ml-2">54 Ratings | 98 Answered Questions</span>
                </div>

                {/* Price */}
                <div className="mt-3">
                  <span className="text-2xl font-bold text-orange-500">৳ 3,400</span>
                  <span className="text-gray-500 line-through ml-2">৳ 3,999</span>
                  <span className="ml-2 bg-orange-100 text-orange-600 px-2 py-1 text-xs rounded">-15%</span>
                </div>

                {/* Promotions */}
                <div className="mt-2 bg-orange-100 text-orange-700 px-3 py-1 inline-block rounded text-sm">Min. spend ৳ 500</div>

                {/* Color Selection */}
                <div className="mt-4">
                  <h3 className="text-md font-semibold">Color Family: {selectedColor}</h3>
                  <div className="flex space-x-2 mt-2">
                    {["Red", "Blue", "Black"].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-lg border-2 ${selectedColor === color ? "border-purple-500" : "border-gray-300"}`}
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
                  <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold">Buy Now</button>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold">Add to Cart</button>
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
