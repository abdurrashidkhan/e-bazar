import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import Loading from '../../common/Loading/Loading';

const ManageBlog = () => {
  const [blogs, setBlog] = useState([])
  useEffect(() => {
    fetch(`https://portfolio-2-0-server.vercel.app/blog`)
      .then(res => res.json())
      .then(data => setBlog(data.data))
  }, [blogs])
  // console.log(users);
  const deleteProject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are sure to delete blog information",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://portfolio-2-0-server.vercel.app/blog/${id}`;
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
          text: 'Delete Cancel'
        })
        return;
      }
    });
  };
  if (blogs?.length < 0) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="">
        <h1 className='dark:text-slate-300 text-slate-700'>Manage Users</h1>
        <div className="py-5">
          <div className="overflow-x-hidden ">
            <table className="table w-full dark:bg-[#141929] bg-white table-xs sm:table-sm md:table-md lg:table-lg  text-slate-700 rounded shadow-2xl">
              {/* head */}
              <thead className=''>
                <tr className='bg-[#222c4d] p-5'>
                  <th className='text-xs sm:text-base capitalize '>Id</th>
                  <th className='text-xs sm:text-base capitalize '>Author Name</th>
                  <th className='text-xs sm:text-base capitalize '>topic</th>
                  <th className='text-xs sm:text-base capitalize '>Action</th>
                </tr>
              </thead>
              <tbody className=''>
                {/* row 1 */}
                {
                  blogs?.map((p, index) =>
                    <>
                      <tr>
                        <td key={p?._id}> {index + 1} </td>
                        <td className='capitalize'> {p?.author} </td>
                        <td > {p?.topic} </td>
                        <td className='flex items-center gap-3'>
                          <Link href={`/user/update/${p?._id}`}><FaEdit className='text-2xl text-[#04bd48]' /></Link>
                          <button onClick={() => deleteProject(p?._id)}><MdDelete className='text-2xl text-[#c93030]' /></button>
                        </td>
                      </tr>
                    </>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ManageBlog;