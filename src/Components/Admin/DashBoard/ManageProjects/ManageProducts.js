import Loading from '@/Components/Common/Loading';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const ManageProducts = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [IsTrue, setTrue] = useState(false)
  useEffect(() => {
    fetch(`https://actual-products-of-e-commerce-server-site.vercel.app/manage-products/page=${page}`)
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [page, products])
  // console.log(projects);
  const deleteProject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are sure to delete project information",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://actual-products-of-e-commerce-server-site.vercel.app/delete/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.data.acknowledged) {
              Swal.fire("Deleted!", "Project information has been deleted.", "success");
            }
          });

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Delete Canceled'
        })
        return;
      }
    });
  };
  if (products?.data?.length < 0) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="pt-5 sm:pt-0">
        <h1 className=' text-slate-700'>Manage Projects</h1>
        <div className="py-5">
          <div className="overflow-x-auto ">
            <table className="table w-full  bg-white   text-slate-700 rounded shadow-2xl overflow-x-auto">
              {/* head */}
              <thead className=''>
                <tr className=' p-5'>
                  <th className='text-xs sm:text-base capitalize '>Id</th>
                  <th className='text-xs sm:text-base capitalize '>Projects Name</th>
                  <th className='text-xs sm:text-base capitalize '>Action</th>
                </tr>
              </thead>
              <tbody className=''>
                {/* row 1 */}
                {
                  products?.data?.map((p, index) =>
                    <>
                      <tr>
                        <td key={p?._id}> {index + 1} </td>
                        {/* <td > {p?._id} </td> */}
                        {
                          p?.name.length > 50 ?
                            <td className='capitalize'> {p?.name.slice(0, 50)}... </td>
                            :
                            <td className='capitalize'> {p?.name} </td>
                        }

                        <td className='flex items-center gap-3'>
                          <Link href={`/actual/admin/update-products/${p?._id}`}><FaEdit className='text-2xl text-[#04bd48]' /></Link>
                          <button onClick={() => deleteProject(p?._id)}><MdDelete className='text-2xl text-[#c93030]' /></button>
                        </td>
                      </tr>
                    </>
                  )
                }
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <div className="btn-group my-6 items-center rounded bg-none text-center">
              {
                products?.pagination?.map((n) =>
                  page === n ? (
                    <button key={n}
                      onClick={() => setPage(n)}
                      className="btn btn-sm bg-pink-600  border-none outline-none hover:bg-pink-500"
                    >
                      {n}
                    </button>
                  ) : (
                    <button key={n}
                      onClick={() => setPage(n)}
                      className="btn btn-sm  border-none outline-none bg-slate-400 text-[#000] hover:bg-pink-500"
                    >
                      {n}
                    </button>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;