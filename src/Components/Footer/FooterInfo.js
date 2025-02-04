import Link from "next/link";

export default function FooterInfo() {
  return (
    <div className='container mx-auto px-4 py-4'>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="pt-4">
          <div className="">
            <h1 className='text-xl text-[#2E3A5B]'>Help</h1>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Help</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Center</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Disputes & Report</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Buyer Protection</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Report IPR infringement</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Regulated Information</Link>
          </div>
          <div className="mt-5">
            <h1 className='text-xl text-[#2E3A5B]'>Tag by Category</h1>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Help</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Center</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Disputes & Report</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Buyer Protection</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Report IPR infringement</Link>
            <Link href='' className='text-sm m-[2px] text-slate-700 hover:text-[#F84D73]'>Regulated Information</Link>
          </div>
        </div>


        <div className="pt-4">
          <div className="">
            <h1 className='text-xl text-[#2E3A5B]'>Multi-Language Sites</h1>
            <Link href='' className='pt-2 text-slate-600 text-sm'>English</Link>
          </div>
          <div className="mt-[44px]">
            <Link className='text-xl text-[#2E3A5B] ' href=''>Actual Products About</Link>
            <p className=' text-slate-600 text-sm pt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, hic?</p>
          </div>
        </div>


      </div>
    </div>
  )
}
