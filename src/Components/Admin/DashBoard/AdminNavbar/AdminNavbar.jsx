// components/Dashboard/AdminNavbar.js
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FiBell, FiChevronDown, FiHelpCircle, FiMenu, FiSearch } from 'react-icons/fi';

export default function AdminNavbar() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className='w-full flex items-center justify-between'>
      {/* বাম পাশ: মোবাইল মেনু বাটন এবং সার্চ বার */}
      <div className='flex items-center gap-4 flex-1'>
        <button className='p-2 md:hidden hover:bg-gray-100 rounded-lg'>
          <FiMenu className='text-xl text-gray-600' />
        </button>

        <div className='relative w-full max-w-md hidden sm:block'>
          <span className='absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400'>
            <FiSearch />
          </span>
          <input
            type='text'
            placeholder='Search analytics, orders...'
            className='w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all'
          />
        </div>
      </div>

      {/* ডান পাশ: ল্যাঙ্গুয়েজ, নোটিফিকেশন এবং প্রোফাইল */}
      <div className='flex items-center gap-2 md:gap-5'>
        {/* ল্যাঙ্গুয়েজ/সাপোর্ট (ঐচ্ছিক) */}
        <div className='hidden lg:flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 cursor-pointer'>
          <FiHelpCircle />
          <span>Need Help?</span>
        </div>

        {/* নোটিফিকেশন */}
        <button className='relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all'>
          <FiBell className='text-xl' />
          <span className='absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full border-2 border-white'></span>
        </button>

        <div className='h-8 w-[1px] bg-gray-200 mx-2 hidden sm:block'></div>

        {/* ইউজার প্রোফাইল ড্রপডাউন */}
        <div className='relative'>
          <button
            onClick={() => setShowProfile(!showProfile)}
            className='flex items-center gap-3 p-1 hover:bg-gray-50 rounded-xl transition-all'
          >
            <div className='text-right hidden sm:block'>
              <p className='text-sm font-semibold text-gray-800 leading-tight'>Abdur Rashid</p>
              <p className='text-[11px] text-indigo-600 font-medium uppercase tracking-tighter'>
                Super Admin
              </p>
            </div>

            <div className='relative h-10 w-10 rounded-xl overflow-hidden border-2 border-indigo-100'>
              <Image
                src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg'
                alt='Profile'
                fill
                className='object-cover'
              />
            </div>
            <FiChevronDown
              className={`text-gray-400 transition-transform ${showProfile ? 'rotate-180' : ''}`}
            />
          </button>

          {/* ড্রপডাউন মেনু */}
          {showProfile && (
            <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2'>
              <div className='px-4 py-2 border-b border-gray-50 mb-1'>
                <p className='text-xs text-gray-400'>Manage Account</p>
              </div>
              <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors'>
                Profile Settings
              </button>
              <button className='w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors'>
                Security
              </button>
              <hr className='my-1 border-gray-50' />
              <button className='w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium'>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
