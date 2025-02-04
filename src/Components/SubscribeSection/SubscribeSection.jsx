import React from "react";
import photos from "../../assert/images/sub/discount.svg";
const SubscribeSection = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="w-full mt-14 md:mt-0">
          <h1 className="text-slate-700 text-[25px]">
            Subscribe to our Newsletter{" "}
          </h1>
          <h1 className="text-slate-600 py-5 text-base">
            Subscribe to our Newsletter to receive exclusive offers , discount
            and overall update
          </h1>
          <div className="text-center md:text-start flex items-center">
            <input
              className="w-[90%] border border-[#11111141] p-[5px] rounded-l border-r-0 outline-[#ff3a7f6e]"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="bg-[#F50057] hover:bg-[#cc0047]  tracking-[1px] text-lg pb-[5px] pt-[4px] px-3 text-white rounded-r duration-700 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-[100%] md:w-[80%] h-auto m-auto"
            src={photos}
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
