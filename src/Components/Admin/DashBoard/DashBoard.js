'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// React Icons
import {
  HiMenuAlt2,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineFolderAdd,
  HiOutlineCog,
  HiOutlineLogout,
} from 'react-icons/hi';
import { SiGoogleanalytics } from 'react-icons/si';
import { MdOutlineRateReview } from 'react-icons/md';

export default function DashBoard({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // ✅ Hydration safe guard hook
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const menuItems = [
    {
      name: 'Analytics',
      href: '/authentication/dashboard/analytics',
      icon: <SiGoogleanalytics className='text-lg text-blue-500' />,
    },
    {
      name: 'Orders',
      href: '/authentication/dashboard/orders',
      icon: <HiOutlineShoppingCart className='text-lg text-orange-500' />,
    },
    {
      name: 'Products',
      href: '/authentication/dashboard/products',
      icon: <HiOutlineCube className='text-lg text-purple-500' />,
    },
    {
      name: 'Add Item',
      href: '/authentication/dashboard/add-item',
      icon: <HiOutlineFolderAdd className='text-lg text-green-500' />,
    },
    {
      name: 'Customers',
      href: '/authentication/dashboard/customers',
      icon: <HiOutlineUsers className='text-lg text-teal-500' />,
    },
    {
      name: 'Reviews',
      href: '/authentication/dashboard/reviews',
      icon: <MdOutlineRateReview className='text-lg text-amber-500' />,
    },
    {
      name: 'Settings',
      href: '/authentication/dashboard/settings',
      icon: <HiOutlineCog className='text-lg text-gray-500' />,
    },
  ];

  // ✅ Fixed: সার্ভার এবং ক্লায়েন্টের প্রাথমিক স্ট্রাকচার হুবহু এক রাখার জন্য এই লোডিং প্লেসহোল্ডার
  if (!isMounted) {
    return (
      <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='flex flex-col items-center gap-2'>
          <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-[#f8426a]'></div>
          <p className='text-sm font-semibold text-gray-500'>Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex h-screen bg-gray-100 font-sans' suppressHydrationWarning>
      {/* Sidebar Navigation */}
      <aside
        className={`bg-white shadow-xl h-full flex flex-col justify-between transition-all duration-300 z-50 ${
          isOpen ? 'w-64' : 'w-0 -translate-x-full md:w-20 md:translate-x-0'
        } overflow-hidden`}
      >
        <div>
          {/* Dashboard Header */}
          <div className='h-20 flex items-center justify-center border-b border-gray-100 px-6'>
            <h2
              className={`text-xl font-black tracking-wider text-[#f8426a] transition-opacity ${!isOpen && 'md:hidden'}`}
            >
              e-Bazar{' '}
              <span className='text-xs font-normal text-gray-400 block -mt-1'>ADMIN PANEL</span>
            </h2>
            {!isOpen && (
              <span className='hidden md:block text-xl font-black text-[#f8426a]'>eB</span>
            )}
          </div>

          {/* Navigation Links */}
          <nav className='p-4 space-y-1.5'>
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-50 to-pink-50 text-[#f8426a] shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className={`transition-transform duration-200 ${isActive && 'scale-110'}`}>
                    {item.icon}
                  </div>
                  <span
                    className={`text-sm tracking-wide transition-opacity duration-200 ${!isOpen && 'md:hidden'}`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className='p-4 border-t border-gray-100'>
          <Link
            href='/'
            className='flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-gray-500 hover:bg-rose-50 hover:text-rose-600 transition-colors'
          >
            <HiOutlineLogout className='text-lg' />
            <span className={`text-sm tracking-wide ${!isOpen && 'md:hidden'}`}>Back to Shop</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col overflow-hidden' suppressHydrationWarning>
        {/* Navbar / Header */}
        <header className='bg-white h-20 px-6 shadow-sm flex items-center justify-between border-b border-gray-200'>
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 hover:bg-gray-55 rounded-xl border border-gray-200 text-gray-600 transition-colors'
              aria-label='Toggle Sidebar'
            >
              <HiMenuAlt2 size={20} />
            </button>
            <h1 className='text-lg font-bold text-gray-800 capitalize hidden sm:block'>
              {pathname.split('/').pop()?.replace('-', ' ')} Overview
            </h1>
          </div>

          <div className='flex items-center gap-2'>
            <span className='flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse'></span>
            <span className='text-xs font-semibold text-gray-500 uppercase tracking-wider'>
              Live Server
            </span>
          </div>
        </header>

        {/* Viewport content */}
        <main className='flex-1 p-6 overflow-y-auto bg-gray-50/50'>
          <div className='max-w-7xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  );
}
