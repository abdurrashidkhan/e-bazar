import React from 'react';
import { BiCategoryAlt, BiSearch } from 'react-icons/bi'
import { AiOutlineFieldTime } from 'react-icons/ai'

const Search = () => {
   return (
      <div className='bg-white border-t border-[#e7e7e7] py-4'>
         <div className="container mx-auto px-4">
            <div className="sm:flex items-center justify-between gap-5 px-4">
               <div className="w-full">
                  <div className="flex items-center gap-3">
                     <div className="">
                        <AiOutlineFieldTime className='text-3xl text-slate-600'></AiOutlineFieldTime>
                     </div>
                     <div className="w-[100%] sm:w-1/2">
                        <select className="w-full sm:auto text-lg bg-[#0d0e0d0c] focus:outline-none border border-[#00000015] py-1 rounded font-semibold text-slate-600 focus:border-slate-400">
                           <option disabled selected>Uploaded Time</option>
                           <option defaultValue="last-hours">Last Hours</option>
                           <option defaultValue="mobile">This Week</option>
                           <option defaultValue="laptop">This Month</option>
                        </select>
                        {/* <button className="btn">Go</button> */}
                     </div>
                  </div>
               </div>
               <div className="w-full mt-5 sm:mt-0">
                  <div className="flex items-center gap-3">
                     <div className="">
                        <BiCategoryAlt className='text-3xl text-slate-600'></BiCategoryAlt>
                     </div>
                     <div className="w-[100%] sm:w-1/2">
                        <select className="w-full sm:auto text-lg bg-[#0d0e0d0c] focus:outline-none border border-[#00000015] py-1 rounded font-semibold text-slate-600 focus:border-slate-400">
                           <option disabled selected>Category</option>
                           <option>T-shirts</option>
                           <option>Mugs</option>
                           <option defaultValue="mobile">Mobile</option>
                           <option defaultValue="laptop">Laptop</option>
                           <option defaultValue="ne-no-products">Ne-no Electronic Products</option>
                           <option defaultValue="tv">Tv</option>
                        </select>
                        {/* <button className="btn">Go</button> */}
                     </div>
                  </div>
               </div>
               {/* input box */}
               <div className=" w-full text-right mt-5 sm:mt-0">
                  <div className="flex items-center justify-end">
                     <input type="text" placeholder="Search…" className="w-full sm:w-[100%] border border-[#0808083b] py-[7px] focus:outline-none pl-2 rounded-br-none rounded-l focus:border-[#2600ff41] " />
                     <button className="bg-blue-700 hover:bg-blue-500 transition-all ease-in-out duration-300 text-2xl p-2 text-white px-5 rounded-r">
                        <BiSearch />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Search;