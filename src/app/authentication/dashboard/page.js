'use client';

import AdminCheck from '@/app/Auth/Admin/AdminCheck';
import { auth } from '@/app/firebase.init';
import DashBoard from '@/Components/Admin/DashBoard/DashBoard';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { HiOutlineCube, HiOutlineShoppingCart, HiOutlineUsers } from 'react-icons/hi';
import { HiOutlineArrowTrendingUp, HiOutlineCalendarDays } from 'react-icons/hi2';

const DashboardHome = () => {
  const [user] = useAuthState(auth);
  const [isMounted, setIsMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setIsMounted(true);
    const date = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    setCurrentDate(date);
  }, []);

  if (!isMounted) return null;

  const stats = [
    {
      id: 1,
      name: 'Total Sales',
      value: '$12,450',
      icon: <HiOutlineArrowTrendingUp className='text-2xl text-emerald-600' />,
      bg: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
    },
    {
      id: 2,
      name: 'Active Orders',
      value: '25 Pending',
      icon: <HiOutlineShoppingCart className='text-2xl text-orange-600' />,
      bg: 'bg-orange-50',
      borderColor: 'border-orange-100',
    },
    {
      id: 3,
      name: 'Total Products',
      value: '142 Items',
      icon: <HiOutlineCube className='text-2xl text-purple-600' />,
      bg: 'bg-purple-50',
      borderColor: 'border-purple-100',
    },
    {
      id: 4,
      name: 'New Customers',
      value: '48 Users',
      icon: <HiOutlineUsers className='text-2xl text-blue-600' />,
      bg: 'bg-blue-50',
      borderColor: 'border-blue-100',
    },
  ];

  return (
    <AdminCheck>
      <DashBoard>
        <div className='space-y-8 animate-in fade-in duration-700'>
          {/* Top Header - Greeting & Date */}
          <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
            <div>
              <h2 className='text-2xl font-bold text-gray-800'>Dashboard Overview</h2>
              <p className='text-sm text-gray-500'>Welcome back to your store management.</p>
            </div>
            <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 text-gray-600'>
              <HiOutlineCalendarDays className='text-indigo-500' />
              <span className='text-sm font-medium'>{currentDate}</span>
            </div>
          </div>

          {/* Main Welcome Banner */}
          <div className='group relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 rounded-[2rem] p-8 text-white shadow-xl transition-all duration-300'>
            {/* Background Icon Decoration */}
            <HiOutlineShoppingCart
              className='absolute -right-10 -bottom-10 text-white/5 rotate-12 group-hover:rotate-6 transition-transform duration-700'
              size={320}
            />

            <div className='relative z-10 space-y-4'>
              <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20'>
                <span className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></span>
                <span className='text-[10px] font-bold uppercase tracking-[0.2em]'>
                  System Live
                </span>
              </div>

              <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight'>
                Hello, {user?.displayName?.split(' ')[0] || 'Admin'}! 👋
              </h1>

              <p className='max-w-xl text-blue-100/80 text-sm md:text-lg leading-relaxed font-light'>
                Your store has seen a{' '}
                <span className='text-emerald-400 font-bold'>12% increase</span> in sales today.
                Everything looks great! Check your latest orders below.
              </p>
            </div>
          </div>

          {/* Analytics Cards Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`bg-white p-6 rounded-2xl border ${stat.borderColor} shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4`}
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div>
                  <p className='text-xs font-bold text-gray-400 uppercase tracking-widest mb-1'>
                    {stat.name}
                  </p>
                  <p className='text-2xl font-black text-gray-800 tracking-tight'>{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Notice / System Status */}
          <div className='flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm'>
            <div className='flex-shrink-0 w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600'>
              <HiOutlineCube size={20} />
            </div>
            <div>
              <h4 className='text-sm font-bold text-gray-800 mb-1'>System Maintenance & Status</h4>
              <p className='text-sm text-gray-500 leading-relaxed'>
                All systems are operational. Scheduled database optimization is at{' '}
                <span className='text-indigo-600 font-medium'>12:00 AM UTC</span>. New security
                patches have been applied to the payment gateway.
              </p>
            </div>
          </div>
        </div>
      </DashBoard>
    </AdminCheck>
  );
};

export default DashboardHome;
