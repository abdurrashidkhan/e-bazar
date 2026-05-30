'use client';

import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase.init';
import AdminCheck from '@/app/Auth/Admin/AdminCheck';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineShieldCheck,
  HiOutlineCamera,
} from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';

export default function AdminProfile() {
  const [user, loading] = useAuthState(auth);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || loading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#f8426a]'></div>
      </div>
    );
  }

  // Common Input Styles for consistency
  const inputBaseClass =
    'w-full px-4 py-2.5 rounded-xl border border-gray-200 transition-all duration-300 ease-in-out';
  const editFieldClass = `${inputBaseClass} bg-gray-50 text-gray-500 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent`;
  const disabledFieldClass = `${inputBaseClass} bg-gray-100 text-gray-400 cursor-not-allowed`;

  return (
    <AdminCheck>
      <div className='max-w-5xl mx-auto space-y-6 animate-fadeIn pt-36'>
        {/* Header Section */}
        <div className='bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative'>
          <div className='h-40 md:h-48 bg-gradient-to-r from-rose-500 to-pink-600 relative'>
            <button className='absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2'>
              <HiOutlineCamera /> Change Cover
            </button>
          </div>

          <div className='px-6 md:px-10 pb-8'>
            <div className='flex flex-col md:flex-row items-start md:items-end gap-4 md:gap-6 -mt-16 md:-mt-20'>
              <div className='relative group cursor-pointer'>
                <img
                  src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                  alt='Admin'
                  className='w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg object-cover bg-white'
                />
              </div>
              <div className='flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2'>
                <div>
                  <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    {user?.displayName || 'Admin'}
                  </h1>
                  <span className='bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1 w-max mt-1'>
                    <HiOutlineShieldCheck /> Super Admin
                  </span>
                </div>
                <button className='bg-rose-50 hover:bg-rose-100 text-rose-600 px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 border border-rose-200'>
                  <FiEdit2 /> Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Contact Info (Left) */}
          <div className='bg-white p-6 rounded-3xl shadow-sm border border-gray-100'>
            <h3 className='text-lg font-bold text-gray-800 mb-5'>Contact Info</h3>
            <div className='space-y-4'>
              {[
                { icon: HiOutlineMail, label: 'Email', val: user?.email },
                { icon: HiOutlinePhone, label: 'Phone', val: '+880 1XXX-XXXXXX' },
                { icon: HiOutlineLocationMarker, label: 'Location', val: 'Dhaka, Bangladesh' },
              ].map((item, i) => (
                <div key={i} className='flex items-start gap-4'>
                  <div className='p-3 bg-gray-50 text-gray-600 rounded-xl'>
                    <item.icon className='text-xl' />
                  </div>
                  <div>
                    <p className='text-xs font-semibold text-gray-400 uppercase'>{item.label}</p>
                    <p className='text-sm font-medium text-gray-800'>{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details Form (Right) */}
          <div className='lg:col-span-2 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100'>
            <h3 className='text-lg font-bold text-gray-800 mb-6'>Personal Details</h3>
            <form className='space-y-5'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>Full Name</label>
                  <input
                    type='text'
                    defaultValue={user?.displayName || ''}
                    className={editFieldClass}
                  />
                </div>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>Email Address</label>
                  <input
                    type='email'
                    disabled
                    defaultValue={user?.email || ''}
                    className={disabledFieldClass}
                  />
                </div>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>Phone</label>
                  <input type='text' placeholder='+880' className={editFieldClass} />
                </div>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>Role</label>
                  <input
                    type='text'
                    disabled
                    defaultValue='Super Admin'
                    className={disabledFieldClass}
                  />
                </div>
              </div>
              <div>
                <label className='text-sm font-semibold text-gray-600'>Bio / Notes</label>
                <textarea
                  rows='3'
                  className={`${editFieldClass} resize-none`}
                  placeholder='Write something...'
                ></textarea>
              </div>
              <div className='flex justify-end pt-4 border-t'>
                <button className='bg-[#f8426a] hover:bg-rose-600 text-white px-6 py-2.5 rounded-xl font-bold transition-all'>
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminCheck>
  );
}
