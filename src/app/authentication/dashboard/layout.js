// app/authentication/dashboard/layout.js

import AdminNavbar from '@/Components/Admin/DashBoard/AdminNavbar/AdminNavbar';
import Sidebar from '@/Components/Admin/DashBoard/Sidebar/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className='flex h-screen bg-[#F8F9FD]'>
      {/* left side menu */}
      <aside className='w-68 hidden md:block border-r bg-white'>
        <Sidebar isOpen={true} />
      </aside>

      {/* right side main body */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* top header (search, notifications, profile) */}
        <header className='h-16 bg-white border-b flex items-center px-6'>
          <AdminNavbar />
        </header>

        {/* main dynamic content */}
        <main className='flex-1 overflow-x-hidden overflow-y-auto p-6'>{children}</main>
      </div>
    </div>
  );
}
