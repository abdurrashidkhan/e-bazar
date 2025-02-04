import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Commitment from "../Commitment/Commitment";
import Loading from "../Common/Loading";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";
import "./style.css";
const TodayDeals = () => {
  const { page } = useParams();
  const p = page.slice(5, page.length);
  const [products, setProducts] = useState([]);
  const [pages, setPage] = useState(1);
  useEffect(() => {
    fetch(
      `https://actual-products-of-e-commerce-server-site.vercel.app/today-deals/${p}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [p]);
  console.log(products);

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
    <>
      <section>
        <div className="">
          <div className="container mx-auto px-2 relative" id="today_banner">
            <div className="" id="content_center">
              <h1 className="text-[#fff] capitalize text-2xl font-mono">
                Up to 55<span className="font-serif"> % discount </span>
              </h1>
              <h1 className="text-[#fff] pt-2 capitalize text-2xl sm:text-4xl tracking-[1px]">
                For Today special offer.
              </h1>
              <p className="text-[#fff] py-5 text-base tracking-[.5px] capitalize">
                Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Doloribus Maiores Animi Assumenda Impedit Atque Illum Fugit
                Quibusdam Quas Eius Pariatur Molestiae Illo Aspernatur
                Voluptatum In, Officia Qui Exercitationem. Earum Quisquam Fugit
                Quae Porro, Eos Debitis Asperiores Quia Dolorem Quo Repellat
                Minima Est Temporibus Aperiam Consectetur Velit Suscipit,
                Numquam Ullam. Expedita, Iure Accusantium Officiis Labore Vel
                Explicabo Earum Impedit Sunt Quam?
              </p>
              <Link
                href=""
                className="text-[#fff] bg-[#1F4E4D] text-base sm:text-lg px-6 py-2 rounded shadow hover:tracking-[1px] duration-700 ease-in-out mt-1 inline-block"
              >
                Click Here
              </Link>
            </div>
          </div>
          <div className="container mx-auto px-2">
            <div className="container mx-auto px-2">
              <div className="text-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-semibold text-[#2e3a4bde] py-8 capitalize tracking-[1px]">
                    Today Special products is here.
                  </h1>
                </div>
                {products?.status ? (
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-items-center a gap-3 py-6">
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
                                  className="w-full h-[285px] rounded"
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
                      {products?.length > 12 &&
                        products?.pagination.map((n) =>
                          pages === n ? (
                            <Link
                              href={`/today-deals/page=${n}`}
                              onClick={() => setPage(n)}
                              className="btn btn-sm bg-pink-600  border-none outline-none hover:bg-pink-500"
                            >
                              {n}
                            </Link>
                          ) : (
                            <Link
                              onClick={() => setPage(n)}
                              href={`/today-deals/page=${n}`}
                              className="btn btn-sm  border-none outline-none bg-slate-400 text-[#000] hover:bg-pink-500"
                            >
                              {n}
                            </Link>
                          )
                        )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10 capitalize">
                    <h1>There is same thing is worn</h1>
                    <h1>No Data Found</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Review />
      <Commitment />
      <Footer />
    </>
  );
};

export default TodayDeals;
