// Components/Admin/DashBoard/DashBoard.js
'use client';
import { useEffect, useState } from 'react';
import { HiChevronLeft, HiMenuAlt2 } from 'react-icons/hi';

export default function DashBoard({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // screen small then sidebar auto close
    const handleResize = () => {
      if (window.innerWidth < 1024) setIsOpen(false);
      else setIsOpen(true);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) return null;
  // open and close sidebar with button click

  return (
    <div className='flex min-h-screen bg-[#F8F9FD]'>
      {/* main content area */}
      <div className='flex-1 flex flex-col min-w-0 overflow-hidden'>
        {/* top header */}
        <header className='h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='p-2 bg-gray-50 rounded-lg text-gray-600 hover:text-rose-500 transition-all'
          >
            {isOpen ? (
              <HiChevronLeft size={24} onClick={() => setIsOpen(true)} />
            ) : (
              <HiMenuAlt2 size={24} onClick={() => setIsOpen(false)} />
            )}
          </button>

          <div className='flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-emerald-500 animate-pulse'></span>
            <span className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>
              Server: Live
            </span>
          </div>
        </header>

        {/* main body */}
        <main className='p-6 md:p-10 overflow-y-auto'>
          <div className='max-w-7xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  );
}
