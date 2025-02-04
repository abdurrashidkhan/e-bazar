"use client";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import GetProductsWithBrandName from "../GetWithBrandName/GetProductsWithBrandName";

const TotalProducts = () => {
  const [brandName, setBrandName] = useState("apple");
  const [allBrand, setAllBrand] = useState([]);
  useEffect(() => {
    fetch(
      `https://actual-products-of-e-commerce-server-site.vercel.app/products/brand-name`
    )
      .then((res) => res.json())
      .then((data) => setAllBrand(data.data));
  }, []);

  // const removeDuplicates = (arr) => {
  //   return arr.filter((item, index) => arr.indexOf(item) === index);
  // };
  // removeDuplicates(setBrand(allBrand));

  const uniqueArray = [];
  allBrand.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  // console.log(brandName);
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="block md:hidden">
        <div className="">
          <ul className="grid grid-cols-3 sm:grid-cols-4 items-stretch">
            {uniqueArray.sort()?.map((b) =>
              brandName === b ? (
                <li
                  className="text-pink-700 text-sm py-1 px-4 text-center rounded ease-in-out duration-700 hover:bg-[#0000002f] hover:text-[#F8426A]"
                  key={b}
                >
                  <button
                    className="text-start inline-block w-full capitalize"
                    onClick={() => setBrandName(b)}
                  >
                    {b}
                  </button>
                </li>
              ) : (
                <li
                  key={b}
                  className="text-slate-700 text-sm py-1 px-4 text-center rounded ease-in-out duration-700 hover:bg-[#0000002f] hover:text-[#F8426A]"
                >
                  <button
                    className="text-start inline-block w-full capitalize"
                    onClick={() => setBrandName(b)}
                  >
                    {b}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="block md:flex md:gap-4 pt-6">
        <div className="border-[1px] border-[#fff] hidden md:block md:w-[20%] h-[950px] shadow-2xl bg-[#fff] rounded p-4 py-5 overflow-auto">
          <div className="">
            <div className="">
              <label className="flex items-center">
                <input
                  type="text"
                  placeholder="Type Here and hit Enter"
                  className="border-[1px] p-1 outline-none text-base placeholder:text-sm rounded-l w-full"
                />
                <button className="bg-[#F8426A] p-2 rounded-r text-[#fff]">
                  <FiSearch />
                </button>
              </label>
            </div>
            {/* brand name anther route*/}
            {/* <BrandNameSlider></BrandNameSlider> */}
            <h1 className="pt-6 pb-3 text-slate-700 text-lg ">Brand Name :</h1>
            <ul className="">
              {uniqueArray.sort()?.map((b) =>
                brandName === b ? (
                  <li
                    className="text-[#F8426A] text-base py-1 px-4 rounded ease-in-out duration-700 hover:bg-[#0000002f] hover:text-[#F8426A]"
                    key={b}
                  >
                    <button
                      className="text-start inline-block w-full capitalize"
                      onClick={() => setBrandName(b)}
                    >
                      {b}
                    </button>
                  </li>
                ) : (
                  <li
                    className="text-slate-700 text-base py-1 px-4 rounded ease-in-out duration-700 hover:bg-[#0000002f] hover:text-[#F8426A]"
                    key={b}
                  >
                    <button
                      className="text-start inline-block w-full capitalize"
                      onClick={() => setBrandName(b)}
                    >
                      {b}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="border-[1px] border-[#ffffff] w-[100%] md:w-[100%] h-auto p-2 bg-[#fff] shadow-2xl">
          <div>
            {/*  */}
            <GetProductsWithBrandName
              data={brandName}
              key={brandName}
            ></GetProductsWithBrandName>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProducts;
