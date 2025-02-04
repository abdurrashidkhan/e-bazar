"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/Components/Common/Loading";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";

const GetProductsWithBrandName = ({ data }) => {
  console.log(data);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://actual-products-of-e-commerce-server-site.vercel.app/products/brand/${data}/${page}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [data, page]);
  // card operation
  const [user, loading, error] = useAuthState(auth);
  const saveCard = (data) => {
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
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Add to card", "", "success");
      });
  };

  if (!products?.status) {
    return <Loading></Loading>;
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return console.log(error);
  }
  return (
    <div className="text-center">
      <div className="flex items-center justify-between">
        {products?.status ? (
          <h1 className="text-xl font-medium text-slate-700 capitalize py-4">
            {data} products here
          </h1>
        ) : (
          <p className="text-xl z-[111] capitalize text-slate-600 font-medium">
            no data found..
          </p>
        )}
        {/* <h1 className='capitalize text-slate-700 font-semibold text-lg'></h1> */}
        {products?.data?.length > 7 && (
          <Link href="" className="underline text-[#F8426A] capitalize">
            see all
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-items-center a gap-3">
        {products?.data?.map((p) => (
          <div key={p._id}>
            <div
              className="bg-[#fff] shadow-2xl border border-[#fff] rounded relative hover:border-[#da1a3a79] duration-500 ease-in-out"
              key={p?._id}
            >
              <Link href={`/product/details/${p?._id}`} className="">
                {p?.productDiscount > 0 && (
                  <div id="offer" className="absolute top-[2%] left-[2%]">
                    <h1 className="bg-[#DB1F3E] text-[#fff] px-3 text-base font-ubuntu rounded-[20px] text-center">
                      {p?.productDiscount}% Off
                    </h1>
                  </div>
                )}

                <div className="">
                  <img
                    className="w-full h-[250px] rounded"
                    src={p?.img}
                    alt="loading product"
                    loading="lazy"
                  />
                </div>
                <hr />
                <div className="p-2 text-start">
                  {p.price > 0 ? (
                    <div className="flex items-center gap-5">
                      <h1 className="capitalize text-[15px] py-2 text-slate-700">
                        price : &#2547;{" "}
                        {p?.price -
                          parseInt((p?.price * p?.productDiscount) / 100)}
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
              <button
                onClick={() => setPage(n)}
                className="btn btn-sm bg-pink-600  border-none outline-none hover:bg-pink-500"
              >
                {n}
              </button>
            ) : (
              <button
                onClick={() => setPage(n)}
                className="btn btn-sm  border-none outline-none bg-slate-400 text-[#000] hover:bg-pink-500"
              >
                {n}
              </button>
            )
          )}
      </div>
    </div>
  );
};

export default GetProductsWithBrandName;
