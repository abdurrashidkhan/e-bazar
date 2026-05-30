'use client';

import { auth } from '@/app/firebase.init';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineUser } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import Loading from '../Common/Loading';
import './style.css';
import TopBar from './TopBar';

const Navbar = () => {
  const pathname = usePathname();
  const [card, setCard] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  // ✅ Pro-Tip: React Hydration Safe Guard State
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openSearch = () => {
    setShowSearch(true);
  };

  // Safe Price Calculation
  const productPrice = card.reduce((total, item) => total + Math.floor(item.price || 0), 0);

  const logout = () => {
    signOut(auth);
  };

  if (error) {
    console.error('Auth Error:', error.message);
  }

  const routing = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/new-arrivals', name: 'New Arrivals' },
    { path: '/today-deals', name: 'Today Deals' },
    { path: '/registry-gifting', name: 'Registry & Gifting' },
    { path: '/support', name: 'Support' },
  ];

  return (
    <nav className='bg-[#fff] shadow-2xl z-[99999] fixed w-full'>
      {/* Top Bar */}
      <TopBar />

      <div className='container mx-auto px-4'>
        <div className='navbar'>
          {/* Navbar Start */}
          <div className='navbar-start'>
            <div className='dropdown'>
              <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-base-100 rounded w-52'
              >
                {routing.map((r) => (
                  <li key={r.path}>
                    <Link
                      className={`${pathname === r.path ? 'text-[#F96988]' : 'text-slate-600'} font-semibold`}
                      href={r.path}
                    >
                      {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href='/'
              className='normal-case text-sm sm:text-xl font-extrabold font-serif text-[#f8426a]'
            >
              e-Bazar
            </Link>
          </div>

          {/* Navbar Center */}
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal p-0'>
              {routing.map((r) => (
                <li key={r.path}>
                  <Link
                    className={`${pathname === r.path ? 'text-[#F96988]' : 'text-slate-600'} font-semibold`}
                    href={r.path}
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar End */}
          <div className='navbar-end'>
            <div className='flex-none'>
              {/* Search Trigger */}
              <div className='dropdown dropdown-end'>
                <label className='btn btn-ghost btn-circle' onClick={openSearch}>
                  <div className='indicator'>
                    <BiSearchAlt className='text-2xl' />
                  </div>
                </label>
              </div>

              {/* Cart Items */}
              <div className='dropdown dropdown-end'>
                <label tabIndex={0} className='btn btn-ghost btn-circle'>
                  <div className='indicator'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-slate-700'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                    <span className='badge badge-sm indicator-item'>{card?.length || 0}</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className='mt-3 z-[1] card card-compact dropdown-content w-52 shadow-2xl text-slate-700 bg-[#fff] rounded'
                >
                  <div className='card-body'>
                    <span className='font-bold text-lg'>{card?.length || 0} Items Selected</span>
                    <span className='text-[#DB1F3E]'>Subtotal: $ {productPrice}</span>
                    <div className='text-center'>
                      <Link
                        href='/card/overview/page=1'
                        className='w-full text-slate-700 tracking-[2px] mt-2 py-1 bg-[#00000011] shadow-2xl hover:text-[#DB1F3E] rounded inline-block'
                      >
                        View Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Menu / Avatar */}
              <div className='dropdown dropdown-end'>
                <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                  <div className='w-8 h-8 rounded-full flex items-center justify-center overflow-hidden'>
                    {/* ✅ Handles Firebase load cleanly during client mount avoiding structural differences */}
                    {!isMounted || loading ? (
                      <div className='w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin' />
                    ) : user?.photoURL ? (
                      <img src={user.photoURL} referrerPolicy='no-referrer' alt='User Profile' />
                    ) : (
                      <AiOutlineUser className='w-6 h-6 text-slate-700' />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className='menu menu-compact dropdown-content p-2 shadow-2xl rounded bg-base-100 w-52 mt-4'
                >
                  <li>
                    <button className='justify-between'>
                      Profile <span className='badge'>New</span>
                    </button>
                  </li>
                  <li>
                    <Link href='/card/overview/page=1'>Overview</Link>
                  </li>
                  <li>
                    <button>Settings</button>
                  </li>
                  <li>
                    {isMounted && user ? (
                      <button onClick={logout}>Log Out</button>
                    ) : (
                      <Link href='/authentication/login'>Log In</Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSearch && <Search />}
    </nav>
  );
};

export default Navbar;
