import React from 'react';
import { AiFillAppstore, AiFillMacCommand } from 'react-icons/ai';
import img1 from '../../../assert/images/TopCategories/1.jpg'
import img2 from '../../../assert/images/TopCategories/2.jpg'
import img3 from '../../../assert/images/TopCategories/3.jpg'
import img4 from '../../../assert/images/TopCategories/4.jpg'

const TopCategories = () => {
  return (
    <div className='my-20'>
      <div className="container mx-auto px-4">
        <div className="">
          <h1 className='text-2xl font-semibold text-[#2e3a4b]'><span><AiFillAppstore className='inline mr-2 text-[#ff1f45] text-3xl'></AiFillAppstore></span>Top Categories</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-12">
          <div className="">
            <img className='w-full h-[150px] rounded shadow-2xl' src={img1} alt="" />
          </div>
          <div className="">
            <img className='w-full h-[150px] rounded shadow-2xl' src={img2} alt="" />
          </div>
          <div className="">
            <img className='w-full h-[150px] rounded shadow-2xl' src={img3} alt="" />
          </div>
          <div className="">
            <img className='w-full h-[150px] rounded shadow-2xl' src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;