import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiCheckboxChecked } from "react-icons/bi";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import Loading from "../../Common/Loading";
import UseOneProduct from "../../Hook/SingleProduct";

const SingleContent = () => {
  const router = useRouter();
  const [increment, setIncrement] = useState(1);
  const [user, loading, error] = useAuthState(auth);

  const saveCard = (data) => {
    if (!user) {
      router.push("/login");
    } else {
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
        .then(() => {
          Swal.fire("Add to cart", "", "success");
        });
    }
  };

  const product = UseOneProduct();
  const singleProducts = product[0]?.data;

  if (product[0]?.message === undefined || loading) {
    return <Loading />;
  }

  if (error) {
    console.error("An error occurred:", error);
    return null;
  }

  return (
    <section className="container mx-auto px-4 pt-32">
      <div className="bg-white p-6 shadow-2xl rounded">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img
              className="w-full h-auto rounded"
              src={singleProducts?.img}
              alt="Product"
            />
          </div>
          <div>
            <h1 className="pb-2 text-xl capitalize">{singleProducts?.name}</h1>
            <h1 className="text-2xl">Price: ${singleProducts?.price}</h1>
            <div className="flex items-center gap-1">
              <BiCheckboxChecked className="text-green-600 text-xl" />
              <span>{singleProducts?.status}</span>
            </div>
            <p className="pt-4 text-sm capitalize">{singleProducts?.title}</p>
            <p className="py-6 text-sm capitalize">
              {singleProducts?.description}
            </p>

            <div className="form-control">
              <label className="label">
                <span className="text-xs font-semibold">Enter Quantity</span>
              </label>
              <div className="input-group rounded">
                <button
                  className="px-2 hover:bg-gray-200"
                  onClick={() => setIncrement(increment + 1)}
                >
                  +
                </button>
                <input
                  type="text"
                  value={increment}
                  disabled
                  className="border px-4 py-2 w-20 text-center"
                />
                <button
                  className="px-2 hover:bg-gray-200"
                  onClick={() => increment > 1 && setIncrement(increment - 1)}
                  disabled={increment <= 1}
                >
                  -
                </button>
              </div>
              {increment < 2 && (
                <p className="text-red-500 pt-2 text-xs">
                  Products less than this number cannot be ordered
                </p>
              )}
            </div>

            <div className="flex gap-5 mt-4">
              <button
                onClick={() => saveCard(singleProducts)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
                disabled={increment < 1}
              >
                Add to Cart
              </button>
              <Link
                href={`/product/payment/${singleProducts._id}`}
                className={`px-6 py-2 rounded text-white ${
                  increment > 0
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleContent;
