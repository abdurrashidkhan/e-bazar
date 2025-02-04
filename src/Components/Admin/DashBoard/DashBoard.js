import Link from 'next/link';
import { useState } from 'react';
import { BsCaretRight } from 'react-icons/bs';
import { FaBlog } from 'react-icons/fa';
import { HiViewGridAdd } from 'react-icons/hi';
import { MdManageAccounts, MdOutlineManageHistory, MdPermDataSetting } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';
import { VscSettings } from 'react-icons/vsc';
import Footer from '../../Footer/Footer';
import './style.css';

const DashBoard = () => {
	const [open, setOpen] = useState(false);
	console.log(open)
	return (
		<>
			<section className=' bg-[#e7eafa] pt-14'>
				<div className="container mx-auto ">
					<div className="drawer lg:drawer-open">
						<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
						<div className="drawer-content flex flex-col items-center justify-center relative h-auto overflow-auto" id='dashboard_content'>
							{/* Page content here */}
							<label onClick={() => setOpen(false)} htmlFor="my-drawer-2" className="bg-[#fff] shadow-2xl drawer-button lg:hidden z-[11111] rounded-none rounded-r p-2 tooltip tooltip-right" id='dashboard_menu' data-tip="Open Menu">
								<BsCaretRight className='text-2xl  text-red-700' />
							</label>
							{/* <Outlet></Outlet> */}
							<h1>out late</h1>
						</div>
						<div className="drawer-side mt-[5rem] md:mt-0">
							<label htmlFor="my-drawer-2" className="drawer-overlay"></label>
							<ul className="menu p-4 w-80 min-h-full  bg-[#fff] text-base-content pt-20">
								{/* <!-- Sidebar content here --> */}
								<li className='py-1 text-base rounded '>
									<Link href={'/actual/admin'} className="py-2 flex items-center">
										<span><SiGoogleanalytics className=' text-slate-700' /></span>
										<span>Profile</span>
									</Link>
								</li>
								<li className='py-1 text-base rounded '>
									<Link href={'/actual/admin/upload-product'} className="py-2 flex items-center">
										<span><HiViewGridAdd className=' text-slate-700' /></span>
										<span>Add Product</span>
									</Link>
								</li>
								{/* <li className='py-1 text-lg rounded'><Link className='py-2 ' href={'/actual/admin/add-skill'}>Add Skill</Link></li>
							<li className='py-1 text-lg rounded'><Link className='py-2 capitalize' href={'/actual/admin/upload-service'}>Add services</Link></li> */}

								<li className='py-1 text-base rounded '>
									<Link href={'/actual/admin/add-blog'} className="py-2 flex items-center">
										<span><FaBlog className=' text-slate-700' /></span>
										<span>Add Blog</span>
									</Link>
								</li>
								{/* <li className='py-1 text-lg rounded'><Link className='py-2 ' href={'/actual/admin/manage-services'}>Manage Services</Link></li> */}
								<li className='py-1 text-base rounded '>
									<Link href={'/actual/admin/manage-products'} className="py-2 flex items-center">
										<span><MdOutlineManageHistory className=' text-slate-700' /></span>
										<span>Manage Products</span>
									</Link>
								</li>
								<li className='py-1 text-base rounded '>
									<Link href={'/actual/admin/manage-users'} className="py-2 flex items-center">
										<span><MdManageAccounts className=' text-slate-700 text-xl' /></span>
										<span>Manage Users</span>
									</Link>
								</li>
								{/* <li className='py-1 text-lg rounded'><Link className='py-2 ' href={'/actual/admin/manage-skills'}>Manage Skills</Link></li> */}
								<li className='py-1 text-base rounded '>
									<Link href={'/actual/admin/manage-reviews'} className="py-2 flex items-center">
										<span><VscSettings className=' text-slate-700 text-xl' /></span>
										<span>Manage Reviews</span>
									</Link>
								</li>
								<li className='py-1 text-base rounded '>
									<Link href={'/actual/admin/manage-blogs'} className="py-2 flex items-center">
										<span><MdPermDataSetting className=' text-slate-700 text-xl' /></span>
										<span>Manage Blogs</span>
									</Link>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default DashBoard;