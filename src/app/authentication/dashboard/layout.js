'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import './style.css';
import AdminCheck from '@/app/Auth/Admin/AdminCheck';
import { auth } from '@/app/firebase.init';
import Loading from '@/Components/Common/Loading';
const Layout = ({ children }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { admin, setAdmin } = useState(false);
  const checkingUsers = AdminCheck(); // call checking user fund or not
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const dashboardRouting = [
    { path: '/dashboard', name: 'Overview' },
    { path: '/dashboard/add-book', name: 'Add Book' },
    { path: '/dashboard/manage-books', name: 'Manage Books' },
  ];

  useEffect(() => {
    CheckAdmin(user, signOut);
  }, [user, signOut]);

  if (loading || outLoading) {
    return <Loading ></Loading>;
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  console.log(open);
  return (
    <>
      {/* <Navbar /> */}
      <div className='container mx-auto px-2  pt-[60px] sm:pt-[50px] '>
        {/* end  */}
        <div className='flex gap-0 relative'>
          {/* {open && (
            <div className="">
              <aside className="absolute sm:hidden w-[70%] bg-[#fff] h-[100vh]  py-5 ease-in-out duration-700 top-[-2%] left-[0%] z-[999]">
                <div
                  className="absolute  text-red-700"
                  id="dashboard_close_icon"
                >
                  <IoClose
                    className="sm:hidden text-3xl"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <ul className="" id="dashboard_mobile_items">
                  {dashboardRouting.map(({ path, name }) => (
                    <li
                      key={path}
                      className="px-3 py-1  hover:bg-[#fff] mx-1 rounded"
                    >
                      <Link
                        exact={path === "/dashboard"}
                        className={`${
                          pathname === path ? "text-[#e93c25]" : ""
                        } w-full`}
                        href={path}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          )} */}
          {/* this menu list for large dives */}
          <aside className='hidden sm:block sm:w-[30%] bg-[#fff] h-[100vh]  py-5 ease-in-out duration-700 rounded shadow-2xl drop-shadow-2xl pt-[5%]'>
            <ul className='mt-5'>
              {dashboardRouting.map(({ path, name }) => (
                <li key={path} className='px-3 py-1 hover:bg-[#3333332f] mx-1 rounded'>
                  <Link
                    exact={path === '/dashboard'}
                    className={`${pathname === path ? 'text-[#e93c25]' : ''} w-full`}
                    href={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          {/* main content show */}
          <div
            className='w-[100%] bg-[#f7f7f7] text-[#000] p-5 h-[100vh] mt-[2%] sm:mt-[0%] rounded shadow-2xl  text-center sm:text-start pt-10 mb-5 overflow-auto md:relative'
            id='dashboard_content'
          >
            {children}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
