import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const TopBar = () => {
  return (
    <div className="bg-[#0F3460] py-3 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-3 md:gap-8">
            <h1 className="text-white flex items-center text-sm sm:text-base gap-3">
              <BsFillTelephoneFill className="" />
              <span>+8801617-xxxxxx</span>
            </h1>
            <h1 className="text-white flex items-center text-sm sm:text-base gap-3">
              <HiOutlineMail className="text-[22px]" />
              <span>admin@support.com</span>
            </h1>
          </div>
          <div className="md:flex items-center gap-8 text-white hidden">
            <p>Theme FAQ's </p>
            <p>Need Help..?</p>
            <p>English</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
