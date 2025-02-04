"use client"
import { auth } from '@/app/firebase.init';
import Loading from '@/Components/Common/Loading';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import newIcon from '../../../assert/images/coming/new.png';
const ComingProducts = () => {
  // console.log(data);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://actual-products-of-e-commerce-server-site.vercel.app/coming-products/${page}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page]);
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
    <div className='container mx-auto px-4 '>
      <div className="flex items-center gap-2">
        <img src={newIcon} className='w-[40px] h-auto' alt="loading" />
        <h1 className='text-2xl font-semibold text-[#2e3a4b]'>Coming Products</h1>
      </div>
      <div className="py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-items-center a gap-3">
          {products?.data?.map((p) => (
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