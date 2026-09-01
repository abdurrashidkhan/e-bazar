'use client';
export default function Error({ error, reset }) {
  console.log(`error `, error);
  return (
    <section className='container mx-auto px-2 py-10'>
      <div className=' min-h-screen relative'>
        <div className=' shadow-2xl border bg-[#f1f1f1] rounded' id='content_center'>
          <div className='py-5 px-5 text-center'>
            <h2 className='text-2xl'>Something went wrong!</h2>
            {/* WRONG: <p>{error}</p> */}
            <p className='py-2'>{error.message}</p> {/* RIGHT */}
            <button
              className='bg-red-800 px-4 py-2 rounded text-white hover:bg-red-900 ease-in-out duration-500'
              onClick={() => reset()}
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
