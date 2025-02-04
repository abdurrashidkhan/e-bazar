import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiCheckboxChecked } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import Loading from "../../Common/Loading";
import UseOneProduct from "../../Hook/SingleProduct";

const SingleContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [increment, setIncrement] = useState(1);
  const [user, loading, error] = useAuthState(auth);
  // check find user or not

  const saveCard = (data) => {
    //
    const form = location.state?.from?.pathname || "/login";
    if (!user) {
      console.log("user not find");
      navigate(form, { replace: true });
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
        .then((data) => {
          Swal.fire("Add to card", "", "success");
        });
    }
  };

  const product = UseOneProduct();
  const singleProducts = product[0]?.data;
  if (product[0].message === undefined) {
    return <Loading></Loading>;
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return console.log("there is same this worn !");
  }
  console.log(product);
  return (
    // w-full h-auto sm:h-[100vh]
    <section className="">
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 pt-32">
        <div className="">
          <div className=" bg-[#fff] p-6 shadow-2xl rounded">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-items-center">
              <div className="w-[100%] h-auto">
                <img
                  className="w-[100%] h-auto rounded"
                  src={singleProducts?.img}
                  alt="loading products..."
                />
              </div>
              <div className="">
                <h1 className="pb-2 text-xl capitalize">
                  {singleProducts?.name}
                </h1>
                <h1 className="text-[20px]">
                  Price : $ {singleProducts?.price}
                </h1>
                <div className="flex items-center gap-1">
                  <BiCheckboxChecked className="text-[#06ad00] text-[25px]"></BiCheckboxChecked>
                  <h1 className="">{singleProducts?.status}</h1>
                </div>
                <h1 className="pt-4 text-sm capitalize">
                  {singleProducts?.title}
                </h1>
                <p className="py-6 text-sm capitalize">
                  {singleProducts?.description}
                </p>
                {/* quantity */}
                <div className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="text-xs font-semibold">
                        Enter Quantity
                      </span>
                    </label>
                    <label className="input-group rounded">
                      <span
                        className="hover:bg-[#0000002f] cursor-pointer"
                        onClick={() => setIncrement(increment + 1)}
                      >
                        {" "}
                        +{" "}
                      </span>
                      <input
                        type="text"
                        value={increment}
                        disabled
                        className="border pl-4 py-[4px] w-[150px] focus:outline-none"
                      />
                      {increment > 1 ? (
                        <span
                          className="hover:bg-[#0000002f] cursor-pointer"
                          onClick={() => setIncrement(increment - 1)}
                        >
                          {" "}
                          -{" "}
                        </span>
                      ) : (
                        <span className=""> - </span>
                      )}
                    </label>

                    {increment < 2 ? (
                      <p className="text-[#bd0000] pt-2 text-xs">
                        {" "}
                        Products less than this number cannot be ordered{" "}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  {increment > 0 ? (
                    <button
                      onClick={() => saveCard(singleProducts)}
                      className="bg-[#f51c40] hover:bg-[#dd0030] hover:tracking-[1px] duration-1000 ease-in-out px-10 py-2 text-xs sm:text-base text-white rounded my-5"
                    >
                      Add_Card
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-[#f77288]  px-10 py-2 text-xs sm:text-base text-white rounded my-5"
                    >
                      Add_Card
                    </button>
                  )}
                  {increment > 0 ? (
                    <Link
                      href={`/product/payment/${singleProducts._id}`}
                      className="bg-[#f51c40] hover:bg-[#dd0030] hover:tracking-[1px] duration-1000 ease-in-out px-10 py-2 text-xs sm:text-base text-white rounded my-5"
                    >
                      Payment
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="bg-[#f77288]  px-10 py-2 text-xs sm:text-base text-white rounded my-5"
                    >
                      Payment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleContent;
