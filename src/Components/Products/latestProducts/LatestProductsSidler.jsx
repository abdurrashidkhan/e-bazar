import { AiFillStar, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";

import Slider from "react-slick";

import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";

import { auth } from "@/app/firebase.init";
import Loading from "@/Components/Common/Loading";
import useProducts from "@/Components/Hook/UseProducts";
import Link from "next/link";
import "./style.css";

const LatestProductsSidler = () => {
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

  const products = useProducts();
  console.log(products);
  const lastedProducts = products[0]?.data;
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  // set card products
  // console.log(products[0]?.data?.length);
  // if (cards) {
  //   const c = UseCard(cards);
  // }

  if (!lastedProducts) {
    return <Loading></Loading>;
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return console.log(error);
  }
  return (
    <div id="slider" className="pt-14 ">
      <Slider {...settings}>
        {lastedProducts?.map((p) => (
          <div key={p?._id} className="mb-10">
            <div className="relative  mx-2 bg-[#fff] shadow-2xl rounded pb-4">
              {p?.productDiscount > 0 && (
                <div id="offer" className="absolute top-[2%] left-[2%]">
                  <h1 className="bg-[#DB1F3E] text-[#fff] px-3 text-base font-ubuntu rounded-[20px] text-center">
                    {p?.productDiscount}% Off
                  </h1>
                </div>
              )}
              <div className="image">
                <img
                  className="w-full h-[280px] rounded m-auto"
                  src={p?.img}
                  alt=""
                />
              </div>
              <div className="text-start px-2">
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
                <p className="capitalize pb-5 text-[15px] text-slate-700">
                  {p?.title.length > 65
                    ? `${p?.title.slice(0, 65)}...`
                    : p?.title}
                </p>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="text-start ">
                  {/* review */}
                  <ul className="inline-flex gap-2 pt-2">
                    <li>
                      <AiFillStar className="text-[#FF9529] text-[18px]"></AiFillStar>
                    </li>
                    <li>
                      <AiFillStar className="text-[#FF9529] text-[18px]"></AiFillStar>
                    </li>
                    <li>
                      <AiFillStar className="text-[#FF9529] text-[18px]"></AiFillStar>
                    </li>
                    <li>
                      <AiOutlineStar className="text-[#FF9529] text-[18px]"></AiOutlineStar>
                    </li>
                    <li>
                      <AiOutlineStar className="text-[#FF9529] text-[18px]"></AiOutlineStar>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <button
                    onClick={() => saveCard(p)}
                    className="hover:cursor-pointer text-[25px] text-[#DB1F3E]"
                  >
                    <AiOutlinePlus className=""></AiOutlinePlus>
                  </button>
                  <Link
                    className="block underline text-slate-700 font-normal hover:text-[#ad1a33]"
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
    </div>
  );
};

export default LatestProductsSidler;
