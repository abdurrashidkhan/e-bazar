// app/authentication/dashboard/layout.js

import AdminNavbar from '@/Components/Admin/DashBoard/AdminNavbar/AdminNavbar';
import Sidebar from '@/Components/Admin/DashBoard/Sidebar/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className='flex h-screen bg-[#F8F9FD]'>
      {/* বামপাশে প্রফেশনাল সাইডবার */}
      <aside className='w-68 hidden md:block border-r bg-white'>
        <Sidebar isOpen={true} />
      </aside>

      {/* ডানদিকের মেইন বডি */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* উপরের নেভিবার (সার্চ, নোটিফিকেশন, প্রোফাইল) */}
        <header className='h-16 bg-white border-b flex items-center px-6'>
          <AdminNavbar />
        </header>

        {/* মেইন ডাইনামিক কন্টেন্ট */}
        <main className='flex-1 overflow-x-hidden overflow-y-auto p-6'>{children}</main>
      </div>
    </div>
  );
}
