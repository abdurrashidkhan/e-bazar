import React from 'react';
import './Loading.css';
const Loading = () => {
  return (
    <div className='my-6 text-center z-[1111111]' id="loading_fixed">
      <div className="flex justify-center items-center">
        <div className="relative w-20 h-20 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-700 to-[#E94560] ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[69px] h-[69px] bg-gray-200 rounded-full border-2 border-white"></div>
        </div>
      </div>
      <h1 className='text-[19px] font-bold pt-2'>Loading..........</h1>
    </div>
  );
};

export default Loading;