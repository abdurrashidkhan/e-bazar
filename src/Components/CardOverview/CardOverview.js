import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";
import Loading from "../Common/Loading";
import Review from "../Review/Review";
import Commitment from "../Commitment/Commitment";
import Footer from "../Footer/Footer";

const CardOverview = () => {
  const router = useRouter();
  const { page } = router.query; // Get the page parameter from the URL
  const p = page ? page.slice(5) : 1; // Extract the page number
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);
  const [user, loading, error] = useAuthState(auth);

  // Fetch products based on the page number and user email
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://actual-products-of-e-commerce-server-site.vercel.app/cards/page=${p}/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(err));
    }
  }, [p, user]);

  // Delete item function
  const deleteItem = async (id) => {
    try {
      const response = await fetch(
        `https://actual-products-of-e-commerce-server-site.vercel.app/card/delete-item/${id}`,
        { method: "DELETE" }
      );
      const result = await response.json();
      if (result) {
        Swal.fire("Delete success", "", "success");
        router.reload(); // Reload the page after deletion
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.error(error);
    return <div>Error loading data.</div>;
  }

  return (
    <>
      <div className="container mx-auto px-2 pt-[8rem]">
        <div>
          <h1 className="text-2xl font-semibold text-[#2e3a4b] hvf-dom-checked py-8">
            Card Overview
          </h1>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-items-center gap-4 py-6">
          {products?.data?.map((p) => (
            <div key={p._id} className="relative overflow-hidden">
              <div className="bg-[#fff] shadow-2xl border border-[#fff] rounded relative hover:border-[#da1a3a79] duration-500 ease-in-out">
                <Link href={`/product/details/${p._id}`}>
                  {p?.discount > 0 && (
                    <div id="offer" className="absolute top-[2%] left-[2%]">
                      <h1 className="bg-[#DB1F3E] text-[#fff] px-3 text-base font-ubuntu rounded-[20px] text-center">
                        {p?.discount}% Off
                      </h1>
                    </div>
                  )}
                  <div>
                    <img
                      className="w-full h-[285px] rounded"
                      src={p?.image}
                      alt="loading product"
                      loading="lazy"
                    />
                  </div>
                  <hr />
                  <div className="p-2 text-start">
                    {p.price > 0 ? (
                      <div className="flex items-center gap-5">
                        <h1 className="capitalize text-[15px] py-2 text-slate-700">
                          Price : &#2547;{" "}
                          {p?.price - parseInt((p?.price * p?.discount) / 100)}
                        </h1>
                        {p?.discount > 0 && (
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
                    <p className="text-slate-600 text-[15px] font-medium capitalize pb-6">
                      {p?.title.length > 48
                        ? `${p?.title.slice(0, 48)}...`
                        : p?.title}
                    </p>
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name="rating-1"
                          className="mask mask-star bg-orange-500"
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
              {/* Action Buttons */}
              <div className="absolute bottom-[0%] w-full px-1 bg-[#b3b3b3b0] py-5 rounded-b">
                <div className="flex items-center justify-between gap-5 text-center">
                  <button
                    onClick={() => deleteItem(p?._id)}
                    className="w-full bg-[#F8426A] hover:bg-[#db1943] px-5 py-1 text-[#fff] rounded"
                  >
                    Delete
                  </button>
                  <Link
                    href={`/payment/${p?._id}`}
                    className="w-full bg-[#F8426A] hover:bg-[#db1943] px-5 py-1 text-[#fff] rounded"
                  >
                    Payment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="text-center">
          <div className="btn-group my-6 items-center rounded bg-none">
            {products?.pagination?.map((n) => (
              <Link
                key={n}
                href={`/card/overview/page=${n}`}
                className={`btn btn-sm ${pages === n
                  ? "bg-pink-600"
                  : "bg-slate-400 text-[#000] hover:bg-pink-500"
                  } border-none outline-none`}
                onClick={() => setPages(n)}
              >
                {n}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Review />
      <Commitment />
      <Footer />
    </>
  );
};

export default CardOverview;