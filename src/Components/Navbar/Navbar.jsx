"use client";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

import { auth } from "@/app/firebase.init";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Loading from "../Common/Loading";
import "./style.css";
import TopBar from "./TopBar";
const Navbar = () => {
  const pathname = usePathname();
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [showSearch, setShowSearch] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const openSearch = () => {
    setShowSearch(true);
  };

  // calculation
  let productPrice = 0;
  for (let i = 0; i < card.length; i++) {
    const price = card[i];
    productPrice = Math.floor(productPrice) + Math.floor(price.price);
  }

  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error.message);
  }
  // logout
  const logout = () => {
    signOut(auth);
  };
  // console.log(pathname);
  const routing = [
    { path: "/", name: "Home" },
    { path: "/products", name: "Products" },
    { path: "/new-arrivals", name: "New Arrivals" },
    { path: "/today-deals", name: "Today Deals" },
    { path: "/registry-gifting", name: "Registry & Gifting" },
    { path: "/support", name: "Support" },
  ];
  return (
    <nav className="bg-[#fff]  shadow-2xl z-[99999] fixed w-full">
      {/* top bar */}
      <TopBar />
      <div className="container mx-auto px-4">
        {/* navbar */}
        <div className="">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-base-100 rounded w-52"
                >
                  {routing?.map((r) => (
                    <li key={r?.path}>
                      <Link
                        className={`
                        ${
                          pathname === r.path
                            ? "text-[#F96988]"
                            : "text-slate-600 "
                        } font-semibold`}
                        href={r?.path}
                      >
                        {r?.name}
                      </Link>
                    </li>
                  ))}

                  {/* <li>
                    <Link
                      className="text-slate-600 font-semibold"
                      href={"/blog"}
                    >
                      Blog
                    </Link>
                  </li> */}
                </ul>
              </div>
              <Link
                href="/"
                className=" normal-case  text-sm sm:text-xl font-extrabold font-serif text-[#f8426a] "
              >
                e-Bazar
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                {routing?.map((r) => (
                  <li key={r?.path}>
                    <Link
                      className={`
                        ${
                          pathname === r.path
                            ? "text-[#F96988]"
                            : "text-slate-600 "
                        } font-semibold`}
                      href={r?.path}
                    >
                      {r?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end">
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label
                    className="btn btn-ghost btn-circle"
                    onClick={() => openSearch()}
                  >
                    <div className="indicator">
                      <BiSearchAlt className="text-2xl"></BiSearchAlt>
                    </div>
                  </label>
                </div>
                <div className="dropdown dropdown-end ">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-slate-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {card?.length}
                      </span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 shadow-2xl text-slate-700  bg-[#fff] rounded"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">
                        {card?.length} Items Selected
                      </span>
                      <span className="text-[#DB1F3E]">
                        Subtotal: $ {productPrice}
                      </span>
                      <div className="text-center">
                        <Link
                          href={`/card/overview/page=1`}
                          className="w-full  text-slate-700 tracking-[2px] mt-2 py-1 bg-[#00000011] shadow-2xl  hover:text-[#DB1F3E] rounded inline-block"
                        >
                          View Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-8 rounded-full ">
                      {/* profile */}
                      {user ? (
                        <div>
                          {user ? (
                            user?.photoURL ? (
                              <img
                                src={user?.photoURL}
                                loading="lazy"
                                alt="loading"
                              />
                            ) : (
                              <AiOutlineUser className="w-8 h-8" />
                            )
                          ) : (
                            <AiOutlineUser className="w-8 h-8" />
                          )}
                        </div>
                      ) : (
                        <Link href={`/authentication/login`}>
                          {user ? (
                            user?.photoURL ? (
                              <img
                                src={user?.photoURL}
                                loading="lazy"
                                alt="loading"
                              />
                            ) : (
                              <AiOutlineUser className="w-8 h-8" />
                            )
                          ) : (
                            <AiOutlineUser className="w-8 h-8" />
                          )}
                        </Link>
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content p-2 shadow-2xl rounded bg-base-100  w-52 mt-4"
                  >
                    <li>
                      <button className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </button>
                    </li>
                    <li>
                      <Link href={`/card/overview/page=1`}>Overview</Link>
                    </li>
                    <li>
                      <button>Settings</button>
                    </li>
                    <li>
                      {user ? (
                        <button onClick={() => logout()}>Log Out</button>
                      ) : (
                        <Link href="/login">Log In</Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* search box */}
      {showSearch && <Search />}
    </nav>
  );
};

export default Navbar;
