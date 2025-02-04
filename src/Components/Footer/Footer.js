import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import FooterInfo from './FooterInfo';

export default function Footer() {
  return (
    <div className='bg-[#ececec] py-5'>
      <div className='container mx-auto px-4 mt-[25px]'>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Left side */}
          <div>
            <h1 className='text-2xl text-[#2E3A5B]'>Stay connected</h1>
            <div className="flex items-center justify-between">
              <ul className='py-4'>
                <li className='inline-block'><a href="#"> <AiFillFacebook className='text-3xl rounded text-[#2E3A5B] hover:text-[#202020]' /></a></li>
                <li className='inline-block ml-3'><a href="#"> <AiOutlineTwitter className='text-3xl rounded text-[#2E3A5B] hover:text-[#202020]' /></a></li>
                <li className='inline-block ml-3'><a href="#"> <AiFillInstagram className='text-3xl rounded text-[#2E3A5B] hover:text-[#202020]' /></a></li>
                <li className='inline-block ml-3'><a href="#"> <BsMessenger className='text-3xl rounded text-[#2E3A5B] hover:text-[#202020]' /></a></li>
                <li className='inline-block ml-3'><a href="#"> <IoLogoWhatsapp className='text-3xl rounded text-[#2E3A5B] hover:text-[#202020]' /></a></li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h1 className='text-[20px] text-[#2E3A5B]'>Shopping with us</h1>
              <ul className='mt-4'>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Making payments</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Delivery options</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Return policy</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Buyer Protection</Link></li>
              </ul>
            </div>

            <div>
              <h1 className='text-[20px] text-[#2E3A5B]'>Customer service</h1>
              <ul className='mt-4'>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Help Center</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Transaction Services Agreement</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Terms and Conditions</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Privacy Policy</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Take our feedback survey</Link></li>
              </ul>
            </div>

            <div>
              <h1 className='text-[20px] text-[#2E3A5B]'>Collaborate with us</h1>
              <ul className='mt-4'>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Partnerships</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>Affiliate program</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>DS Center</Link></li>
                <li><Link href="#" className='text-slate-600 hover:underline hover:text-[#313131] my-1 duration-300 ease-in-out text-sm'>24/7 Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <FooterInfo />
    </div>
  );
}
