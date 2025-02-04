"use client";

import { auth } from "@/app/firebase.init";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import Loading from "../Common/Loading";

const CuoponsProducts = () => {
  const router = useRouter();
  const { page } = router.query;
  const p = page?.slice(5);
  const [pages, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const saveCard = (data) => {
    if (!user) {
      Swal.fire("Please login to add items to your cart", "", "warning");
      return;
    }

    const product = {
      email: user.email,
      name: data.name,
      title: data.title,
      unit: data.unit,
      status: data.status,
      categories: data.categories,
      price: data.price,
      brand: data.brand,
      section: data.section,
      discount: data.productDiscount,
      image: data.img,
      quantity: data.quantity,
      description: data.description,
    };

    fetch(
      "https://actual-products-of-e-commerce-server-site.vercel.app/card/add-card",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Added to cart", "", "success");
      });
  };

  useEffect(() => {
    if (p) {
      fetch(
        `https://actual-products-of-e-commerce-server-site.vercel.app/new-arrivals/${p}`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [p]);

  if (!products?.status || loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error);
    return <p>Error loading products.</p>;
  }

  return (
    <div className="py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 py-6">
        {products?.data?.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-2xl border rounded relative hover:border-pink-500 duration-500"
          >
            <Link href={`/product/details/${p._id}`}>
              {p.productDiscount > 0 && (
                <div className="absolute top-2 left-2 bg-red-600 text-white px-3 rounded-full text-center">
                  {p.productDiscount}% Off
                </div>
              )}
              <img
                className="w-full h-64 rounded"
                src={p.img}
                alt={p.title}
                loading="lazy"
              />
              <div className="p-2 text-start">
                <h1 className="capitalize text-sm py-2 text-gray-700">
                  Price: ৳ {p.price - (p.price * p.productDiscount) / 100}
                </h1>
                {p.productDiscount > 0 && (
                  <del className="text-xs text-gray-400">৳ {p.price}</del>
                )}
                <p className="text-gray-600 text-sm capitalize pb-6">
                  {p.title.length > 48 ? `${p.title.slice(0, 48)}...` : p.title}
                </p>
              </div>
            </Link>
            <button
              onClick={() => saveCard(p)}
              className="absolute bottom-2 right-3 text-2xl bg-gray-300 hover:bg-gray-500 py-1 px-4 rounded text-red-600 hover:text-pink-500"
            >
              +
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-6 gap-2">
        {products.pagination?.map((n) => (
          <Link
            key={n}
            href={`/today-deals/page=${n}`}
            onClick={() => setPage(n)}
            className={`px-4 py-2 rounded ${
              pages === n
                ? "bg-pink-600 text-white"
                : "bg-gray-400 text-black hover:bg-pink-500"
            }`}
          >
            {n}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CuoponsProducts;
