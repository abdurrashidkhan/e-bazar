// Components/Admin/DashBoard/Sidebar.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HiOutlineCog,
  HiOutlineCube,
  HiOutlineFolderAdd,
  HiOutlineLogout,
  HiOutlineShoppingCart,
  HiOutlineUserCircle,
  HiOutlineUsers,
} from 'react-icons/hi';
import { MdOutlineRateReview } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';

const Sidebar = ({ isOpen }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Analytics',
      href: '/authentication/dashboard',
      icon: <SiGoogleanalytics />,
      color: 'text-blue-500',
    },
    {
      name: 'Orders',
      href: '/authentication/dashboard/orders',
      icon: <HiOutlineShoppingCart />,
      color: 'text-orange-500',
    },
    {
      name: 'Products',
      href: '/authentication/dashboard/products',
      icon: <HiOutlineCube />,
      color: 'text-purple-500',
    },
    {
      name: 'Add Item',
      href: '/authentication/dashboard/add-item',
      icon: <HiOutlineFolderAdd />,
      color: 'text-green-500',
    },
    {
      name: 'Customers',
      href: '/authentication/dashboard/customers',
      icon: <HiOutlineUsers />,
      color: 'text-teal-500',
    },
    {
      name: 'Reviews',
      href: '/authentication/dashboard/reviews',
      icon: <MdOutlineRateReview />,
      color: 'text-amber-500',
    },
    {
      name: 'Profile',
      href: '/authentication/dashboard/profile',
      icon: <HiOutlineUserCircle />,
      color: 'text-rose-500',
    },
    {
      name: 'Settings',
      href: '/authentication/dashboard/settings',
      icon: <HiOutlineCog />,
      color: 'text-gray-500',
    },
  ];

  return (
    <aside
      className={`bg-white shadow-2xl h-screen flex flex-col transition-all duration-300 ease-in-out sticky top-0 left-0 z-50 flex-shrink-0 ${
        isOpen ? 'w-64' : 'w-24'
      }`}
    >
      {/* Brand Logo Area */}
      <div className='h-24 flex items-center justify-center border-b border-gray-50 flex-shrink-0'>
        <div className='flex items-center gap-3 px-4'>
          <div className='h-10 w-10 bg-rose-500 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0'>
            <span className='text-xl font-black italic'>eB</span>
          </div>
          {isOpen && (
            <div className='transition-all duration-300'>
              <h2 className='text-xl font-black text-gray-800 tracking-tighter leading-none'>
                e-Bazar
              </h2>
              <span className='text-[9px] font-bold text-rose-500 uppercase tracking-widest'>
                Admin Panel
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className='flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar'>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} title={item.name}>
              <div
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
                  isActive ? 'bg-rose-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <div className={`text-xl flex-shrink-0 ${isActive ? 'text-white' : item.color}`}>
                  {item.icon}
                </div>
                {isOpen && (
                  <span className='text-sm font-bold tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300'>
                    {item.name}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Back to Shop */}
      <div className='p-4 border-t border-gray-50 flex-shrink-0'>
        <Link href='/'>
          <div className='flex items-center gap-4 px-4 py-4 rounded-2xl text-gray-400 hover:bg-rose-50 hover:text-rose-600 transition-all group'>
            <HiOutlineLogout className='text-xl flex-shrink-0 group-hover:-translate-x-1 transition-transform' />
            {isOpen && <span className='text-sm font-bold whitespace-nowrap'>Back to Shop</span>}
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
