'use client';

import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase.init';
import AdminCheck from '@/app/Auth/Admin/AdminCheck';
import DashBoard from '@/Components/Admin/DashBoard/DashBoard';

// ✅ Fixed: 'Hi' icons are now correctly imported from the 'hi' sub-module
import {
  HiOutlineShoppingCart,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Dashboard Home Screen Stats Data
  const stats = [
    {
      id: 1,
      name: 'Total Sales',
      value: '$12,450',
      icon: <HiOutlineArrowTrendingUp className='text-2xl text-emerald-600' />,
      bg: 'bg-emerald-50',
    },
    {
      id: 2,
      name: 'Active Orders',
      value: '25 Pending',
      icon: <HiOutlineShoppingCart className='text-2xl text-orange-600' />,
      bg: 'bg-orange-50',
    },
    {
      id: 3,
      name: 'Total Products',
      value: '142 Items',
      icon: <HiOutlineCube className='text-2xl text-purple-600' />,
      bg: 'bg-purple-50',
    },
    {
      id: 4,
      name: 'New Customers',
      value: '48 Users',
      icon: <HiOutlineUsers className='text-2xl text-blue-600' />,
      bg: 'bg-blue-50',
    },
  ];

  return (
    <AdminCheck>
      <DashBoard>
        {/* Dynamic Professional Content */}
        <div className='space-y-8 animate-fadeIn'>
          {/* Welcome Banner Card */}
          <div className='bg-gradient-to-r from-blue-900 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden'>
            {/* Background decorative icon - আরও বেশি ব্যালেন্সড লুকের জন্য opacity কমানো হয়েছে */}
            <div className='absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10 pointer-events-none'>
              <HiOutlineShoppingCart size={300} />
            </div>

            <div className='relative z-10 max-w-xl'>
              <span className='bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider'>
                Control Center
              </span>
              <h1 className='text-2xl sm:text-4xl font-black mt-3 tracking-tight'>
                Welcome Back, {user?.displayName || 'Admin'}! 👋
              </h1>
              {/* এখানে text-rose-100 পরিবর্তন করে indigo-100 দেওয়া হয়েছে যেন নীল থিমের সাথে মিলে যায় */}
              <p className='text-indigo-100 mt-2 text-sm sm:text-base font-medium leading-relaxed'>
                Here is what's happening with your store today. Monitor sales, manage your
                inventory, and check customer reviews all from one interactive dashboard.
              </p>
            </div>
          </div>

          {/* Overview Analytics Cards */}
          <div>
            <h3 className='text-base font-bold text-gray-800 mb-4 tracking-wide uppercase'>
              Quick Store Overview
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow duration-200'
                >
                  <div className='space-y-1'>
                    <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider'>
                      {stat.name}
                    </p>
                    <p className='text-xl font-extrabold text-gray-800'>{stat.value}</p>
                  </div>
                  <div className={`p-3.5 rounded-xl ${stat.bg}`}>{stat.icon}</div>
                </div>
              ))}
            </div>
          </div>

          {/* System Status / Notice Board */}
          <div className='bg-white p-6 rounded-2xl border border-gray-100 shadow-sm'>
            <h3 className='text-xs font-bold text-gray-800 uppercase tracking-wider mb-2'>
              Admin Notice
            </h3>
            <p className='text-sm text-gray-500 leading-relaxed'>
              All systems are fully functional. Database backup was successfully completed. If you
              want to modify products or view data, please select the specific menu from the left
              sidebar.
            </p>
          </div>
        </div>
      </DashBoard>
    </AdminCheck>
  );
};

export default DashboardHome;
