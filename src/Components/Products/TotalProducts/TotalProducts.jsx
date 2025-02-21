"use client";
import Loading from "@/Components/Common/Loading";
import findAllCategories from "@/database/find/AllCategories/AllCategories";
import findProductsWithCategories from "@/database/find/findProductsWithCategories/findProductsWithCategories";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import GetProductsWithCategories from "../GetProductsWithCategories/GetProductsWithCategories";

const TotalProducts = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [categories, setCategories] = useState("mobile"); // FIX: Changed from string to array
  const [IsPage, setPage] = useState(1);
  const [IsLoading, setLoading] = useState(false);

  // Fetch products
  const productsWithCategories = async (categories, page) => {
    setLoading(true);
    try {
      const { data } = await findProductsWithCategories(categories, page);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };
  // get all categories
  const allCategoriesName = async () => {
    setLoading(true);
    try {
      const { categories } = await findAllCategories();
      setAllCategories(categories);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    productsWithCategories(categories, IsPage);
    allCategoriesName();
  }, []); // FIX: Removed `categories` to prevent unnecessary calls

  if (IsLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="block md:hidden">
        <ul className="grid grid-cols-3 sm:grid-cols-4 items-stretch">
          {allCategories?.sort()?.map((b) => (
            <li
              key={b}
              className={`text-sm py-1 px-4 text-center rounded ease-in-out duration-700 ${
                categories.includes(b) ? "text-pink-700" : "text-slate-700"
              } hover:bg-[#0000002f] hover:text-[#F8426A]`}
            >
              <button
                className="text-start inline-block w-full capitalize"
                onClick={() => setCategories([b])} // FIX: Set single category as array
              >
                {b}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="block md:flex md:gap-4 pt-6">
        <div className="border-[1px] border-[#fff] hidden md:block md:w-[20%] h-[950px] shadow-2xl bg-[#fff] rounded p-4 py-5 overflow-auto">
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
          <h1 className="pt-6 pb-3 text-slate-700 text-lg "> </h1>
          <ul>
            {allCategories?.sort()?.map((b) => (
              <li
                key={b}
                className={`text-base py-1 px-4 rounded ease-in-out duration-700 ${
                  categories.includes(b) ? "text-[#F8426A]" : "text-slate-700"
                } hover:bg-[#0000002f] hover:text-[#F8426A]`}
              >
                <button
                  className="text-start inline-block w-full capitalize"
                  onClick={() => setCategories([b])} // FIX: Set single category as array
                >
                  {b}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-[1px] border-[#ffffff] w-[100%] md:w-[100%] h-auto p-2 bg-[#fff] shadow-2xl">
          <GetProductsWithCategories
            data={{ categories, IsPage }}
            key={categories}
          />
        </div>
      </div>
    </div>
  );
};

export default TotalProducts;
