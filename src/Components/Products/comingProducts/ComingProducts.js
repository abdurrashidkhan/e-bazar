"use client"
import Loading from '@/Components/Common/Loading';
import findProductsWithSection from '@/database/find/findProductsWithSection/findProductsWithSection';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import newIcon from '../../../assert/images/coming/new.png';
const ComingProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products with error handling
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null); // Reset error state

      const { findProducts } = await findProductsWithSection("coming-products");

      if (!findProducts || findProducts.length === 0) {
        throw new Error("No products available at the moment.");
      }

      setProducts(findProducts);
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

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return console.log(error);
  }

  return (
    <div className='container mx-auto px-4 '>
      <div className="flex items-center gap-2">
        <Image src={newIcon} className='w-[40px] h-auto' alt="loading" />
        <h1 className='text-2xl font-semibold text-[#2e3a4b]'>Coming Products</h1>
      </div>
      <div className="py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-items-center a gap-3">
          {products?.map((p) => (
            <div key={p._id}>
              <div
                className="bg-[#fff] shadow-2xl border border-[#fff] rounded relative hover:border-[#da1a3a79] duration-500 ease-in-out"
                key={p?._id}
              >
                <Link
                  href={`/product/details/${p?._id}`}
                  className=""
                >
                  {p?.productDiscount > 0 && (
                    <div
                      id="offer"
                      className="absolute top-[2%] left-[2%]"
                    >
                      <h1 className="bg-[#DB1F3E] text-[#fff] px-3 text-base font-ubuntu rounded-[20px] text-center">
                        {p?.productDiscount}% Off
                      </h1>
                    </div>
                  )}

                  <div className="">
                    <img
                      className="w-full h-[265px] rounded"
                      src={p?.img} // Fallback image
                      alt="loading product"
                    // loading="lazy"
                    // width={500}
                    // height={265}
                    // objectFit="cover"
                    />
                  </div>
                  <hr />
                  <div className="p-2 text-start">
                    {p.price > 0 ? (
                      <div className="flex items-center gap-5">
                        <h1 className="capitalize text-[15px] py-2 text-slate-700">
                          price : &#2547;{" "}
                          {p?.price -
                            parseInt(
                              (p?.price * p?.productDiscount) / 100
                            )}
                        </h1>
                        {p?.productDiscount > 0 && (
                          <del className="text-[14px] text-slate-400">
                            {" "}
                            &#2547; {p?.price}
                          </del>
                        )}
                      </div>
                    ) : (
                      <h1 className="capitalize text-[15px] py-2 text-slate-700">
                        Coming Soon
                      </h1>
                    )}
                    <p className="text-slate-600 text-[15px]   font-medium capitalize pb-6">
                      {p?.title.length > 48
                        ? `${p?.title.slice(0, 48)}...`
                        : p?.title}
                    </p>

                    <div className="rating rating-sm">
                      <input
                        type="radio"
                        name="rating-1"
                        className=" mask mask-star bg-orange-500"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className=" mask mask-star bg-orange-500"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className=" mask mask-star bg-orange-500"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className=" mask mask-star bg-orange-500"
                      />
                      <input
                        type="radio"
                        name="rating-1"
                        className=" mask mask-star bg-orange-500"
                      />
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => saveCard(p)}
                  className="absolute bottom-[2%] right-[3%] text-2xl bg-[#00000038] hover:bg-[#00000060] py-0 px-4 rounded hover:text-[#da1a3a] text-[#E94560]"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-group my-6 items-center rounded bg-none">
          {products?.length > 7 &&
            products?.pagination.map((n) =>
              page === n ? (
                <button key={n}
                  onClick={() => setPage(n)}
                  className="btn btn-sm bg-pink-600  border-none outline-none hover:bg-pink-500"
                >
                  {n}
                </button>
              ) : (
                <button key={n}
                  onClick={() => setPage(n)}
                  className="btn btn-sm  border-none outline-none bg-slate-400 text-[#000] hover:bg-pink-500"
                >
                  {n}
                </button>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default ComingProducts;