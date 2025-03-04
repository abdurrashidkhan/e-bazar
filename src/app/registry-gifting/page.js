"use client";
import Commitment from "@/Components/Commitment/Commitment";
import Loading from "@/Components/Common/Loading";
import GiftCard from "@/Components/GiftCard/GiftCard";
import Review from "@/Components/Review/Review";
import findAllNewArrivalsProducts from "@/database/find/allNewArrivalsProducts/findAllNewArrivalsProducts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineRedeem } from "react-icons/md";
import { SiNewbalance } from "react-icons/si";
import { TfiReload } from "react-icons/tfi";

export default function RegistryGifting() {
  const [products, setProducts] = useState([]);
  const [IsLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const sectionName = "registry-gifting";

  // Fetch products
  const fetchProducts = async (sectionName, page) => {
    setLoading(true);
    try {
      const response = await findAllNewArrivalsProducts(sectionName, page);
      setProducts(response?.data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts(sectionName, page);
  }, [page, sectionName]);

  if (IsLoading) return <Loading />;
  if (!products || products.length === 0) return <p>No products found</p>;

  return (
    <section>
      {/*  */}
      <GiftCard />
      <div className="container mx-auto px-2 pt-[1.5rem] pb-10">
        <div className="text-center ">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-slate-600 capitalize py-4">
              {"Registry & Gifting"}
            </h1>
            {products.length > 7 && (
              <Link href="" className="underline text-[#F8426A] capitalize">
                see all
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 items-center justify-items-center gap-3">
            {products.map((p) => (
              <div
                key={p._id}
                className="bg-[#fff] shadow-2xl border border-[#fff] rounded relative hover:border-[#da1a3a79] duration-500 ease-in-out"
              >
                <Link href={`/product/details/${p._id}`}>
                  {p.productDiscount > 0 && (
                    <div className="absolute top-[2%] left-[2%]">
                      <h1 className="bg-[#DB1F3E] text-[#fff] px-3 text-base font-ubuntu rounded-[20px] text-center">
                        {p.productDiscount}% Off
                      </h1>
                    </div>
                  )}
                  <img
                    className="w-full h-[250px] rounded"
                    src={p.img}
                    alt="loading product"
                    loading="lazy"
                  />
                  <div className="p-2 text-start">
                    {p.price > 0 ? (
                      <div className="flex items-center gap-5">
                        <h1 className="capitalize text-[15px] py-2 text-slate-700">
                          Price: &#2547;{" "}
                          {p.price - (p.price * p.productDiscount) / 100}
                        </h1>
                        {p.productDiscount > 0 && (
                          <del className="text-[14px] text-slate-400">
                            {" "}
                            &#2547; {p.price}
                          </del>
                        )}
                      </div>
                    ) : (
                      <h1 className="capitalize text-[15px] py-2 text-slate-700">
                        Coming Soon
                      </h1>
                    )}
                    <p className="text-slate-600 text-[15px] font-medium capitalize pb-6">
                      {p.title.length > 48
                        ? `${p.title.slice(0, 48)}...`
                        : p.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="btn-group my-6 items-center rounded bg-none">
            {products.length > 7 &&
              Array.from(
                { length: Math.ceil(products.length / 7) },
                (_, i) => i + 1
              ).map((n) =>
                page === n ? (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className="btn btn-sm bg-pink-600 border-none outline-none hover:bg-pink-500"
                  >
                    {n}
                  </button>
                ) : (
                  <button
                    key={n}
                    onClick={() => setPage(n)}
                    className="btn btn-sm border-none outline-none bg-slate-400 text-[#000] hover:bg-pink-500"
                  >
                    {n}
                  </button>
                )
              )}
          </div>
        </div>
        {/*  Tools for users */}
        <div className="py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-5">
            <div className="text-center">
              <div className="shadow-2xl border border-slate-50 rounded py-10">
                <MdOutlineRedeem className="mx-auto mb-2 text-[2rem] text-slate-700" />
                <Link
                  href={"/"}
                  className="font-semibold text-slate-700 underline"
                >
                  Redeem Amazon Gift Cards
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="text-center">
              <div className="shadow-2xl border border-slate-50 rounded py-10">
                <SiNewbalance className="mx-auto mb-2 text-[2rem] text-slate-700" />
                <Link
                  href={"/"}
                  className="font-semibold text-slate-700 underline"
                >
                  View Your New Balance
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="text-center">
              <div className="shadow-2xl border border-slate-50 rounded py-10">
                <TfiReload className="mx-auto mb-2 text-[2rem] text-slate-700" />
                <Link
                  href={"/"}
                  className="font-semibold text-slate-700 underline"
                >
                  Set-up Auto-reload
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
      <Commitment />
    </section>
  );
}
