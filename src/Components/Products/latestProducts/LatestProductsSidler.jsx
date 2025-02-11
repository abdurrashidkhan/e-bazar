"use client";
import Loading from "@/Components/Common/Loading";
import findAllProducts from "@/database/find/allProducts/findAllProducts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./style.css";

export default function LatestProductsSlider() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products with error handling
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null); // Reset error state

      const { allProducts } = await findAllProducts();

      if (!allProducts || allProducts.length === 0) {
        throw new Error("No products available at the moment.");
      }

      setProducts(allProducts);
    } catch (err) {
      console.error("Error fetching products:", err.message || err);

      if (err.response) {
        setError(
          `Error: ${err.response.status} - ${err.response.data.message}`
        );
      } else if (err.request) {
        setError("Network error. Please check your connection.");
      } else {
        setError(err.message || "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center bg-gray-100 p-4 rounded-md">
        <p>{error}</p>
        <button onClick={fetchProducts} className="text-blue-500 underline">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div id="slider" className="pt-14">
      {products.length > 0 ? (
        <Slider {...settings}>
          {products.map((p) => (
            <div key={p?._id} className="mb-10">
              <div className="relative mx-2 bg-white shadow-2xl rounded pb-4">
                {p?.productDiscount > 0 && (
                  <div id="offer" className="absolute top-[2%] left-[2%]">
                    <h1 className="bg-red-600 text-white px-3 text-base font-ubuntu rounded-2xl text-center">
                      {p?.productDiscount}% Off
                    </h1>
                  </div>
                )}
                <div className="image">
                  <img
                    className="w-full h-[280px] rounded m-auto"
                    src={p?.img}
                    alt={p?.title}
                  />
                </div>
                <div className="text-start px-2">
                  {p.price > 0 ? (
                    <div className="flex items-center gap-5">
                      <h1 className="capitalize text-[15px] py-2 text-slate-700">
                        Price: &#2547;{" "}
                        {p?.price -
                          parseInt((p?.price * p?.productDiscount) / 100)}
                      </h1>
                      {p?.productDiscount > 0 && (
                        <del className="text-[14px] text-slate-400">
                          &#2547; {p?.price}
                        </del>
                      )}
                    </div>
                  ) : (
                    <h1 className="capitalize text-[15px] py-2 text-slate-700">
                      Coming Soon
                    </h1>
                  )}
                  <p className="capitalize pb-5 text-[15px] text-slate-700">
                    {p?.title.length > 65
                      ? `${p?.title.slice(0, 65)}...`
                      : p?.title}
                  </p>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div className="text-start">
                    <ul className="inline-flex gap-2 pt-2">
                      <li>
                        <AiFillStar className="text-yellow-500 text-[18px]" />
                      </li>
                      <li>
                        <AiFillStar className="text-yellow-500 text-[18px]" />
                      </li>
                      <li>
                        <AiFillStar className="text-yellow-500 text-[18px]" />
                      </li>
                      <li>
                        <AiOutlineStar className="text-yellow-500 text-[18px]" />
                      </li>
                      <li>
                        <AiOutlineStar className="text-yellow-500 text-[18px]" />
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button
                      onClick={() => saveCard(p)}
                      className="hover:cursor-pointer text-[25px] text-red-600"
                    >
                      <AiOutlinePlus />
                    </button>
                    <Link
                      className="block underline text-slate-700 font-normal hover:text-red-700"
                      href={`/product/details/${p?._id}`}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}
