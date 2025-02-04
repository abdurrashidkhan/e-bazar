import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Common/Loading";

const RegistryGiftingContent = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const { page } = router.query;
  const p = page ? page.slice(5) : "";

  const [pages, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (p) {
      fetch(
        `https://actual-products-of-e-commerce-server-site.vercel.app/registry-gifting/${p}`
      )
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [p]);

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

  if (loading || !products?.status) {
    return <Loading />;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      <h1 className="text-xl sm:text-2xl py-5 capitalize text-slate-600">
        Registry and Gifting for Your Loving People
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 py-6">
        {products?.data?.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-2xl border rounded relative hover:border-red-500 duration-500"
          >
            <Link href={`/product/details/${p._id}`}>
              <div>
                {p.productDiscount > 0 && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-3 text-base rounded-full">
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
                  {p.price > 0 ? (
                    <div className="flex items-center gap-5">
                      <h1 className="text-slate-700">
                        Price: ৳
                        {p.price -
                          Math.floor((p.price * p.productDiscount) / 100)}
                      </h1>
                      {p.productDiscount > 0 && (
                        <del className="text-slate-400">৳{p.price}</del>
                      )}
                    </div>
                  ) : (
                    <h1 className="text-slate-700">Coming Soon</h1>
                  )}

                  <p className="text-slate-600 font-medium capitalize pb-6">
                    {p.title.length > 48
                      ? `${p.title.slice(0, 48)}...`
                      : p.title}
                  </p>
                </div>
              </div>
            </Link>

            <button
              onClick={() => saveCard(p)}
              className="absolute bottom-2 right-3 text-2xl bg-black/30 hover:bg-black/50 p-2 rounded text-pink-600 hover:text-red-500"
            >
              +
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2 my-6">
        {products?.pagination?.map((n) => (
          <Link
            key={n}
            href={`/today-deals/page=${n}`}
            onClick={() => setPage(n)}
            className={`btn btn-sm ${
              pages === n ? "bg-pink-600" : "bg-slate-400"
            } hover:bg-pink-500`}
          >
            {n}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegistryGiftingContent;
