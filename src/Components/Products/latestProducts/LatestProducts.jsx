// react Icon
import { IoIosFlash } from "react-icons/io";
import LatestProductsSidler from "./LatestProductsSidler";
import "./style.css";

export default function LatestProducts() {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="">
        <div className="">
          <div className="flex items-center justify-start gap-1">
            <span className="text-4xl font-bold text-[#ff1f45]">
              <IoIosFlash></IoIosFlash>
            </span>
            <h1 className="text-2xl font-semibold text-[#2e3a4b]">
              Latest Products
            </h1>
          </div>
        </div>
      </div>
      {/* slider for latest products*/}
      <LatestProductsSidler></LatestProductsSidler>
    </div>
  );
}
