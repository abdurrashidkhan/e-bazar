import Loading from '@/Components/Common/Loading';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const ManageReview = () => {
  const [users, SetUsers] = useState([])
  useEffect(() => {
    fetch(`https://portfolio-2-0-server.vercel.app/reviews`)
      .then(res => res.json())
      .then(data => SetUsers(data.data))
  }, [users])
  // console.log(users);
  const deleteProject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are sure to delete information",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://portfolio-2-0-server.vercel.app/review/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.data.acknowledged) {
              Swal.fire("Deleted!", " Information has been deleted.", "success");
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
  if (users?.length < 0) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="">
        <h1 className='dark:text-slate-300 text-slate-700'>Manage Reviews</h1>
        <div className="py-5">
          <div className="overflow-x-hidden ">
            <table className="table w-full dark:bg-[#141929] bg-white table-xs sm:table-sm md:table-md lg:table-lg  text-slate-700 rounded shadow-2xl">
              {/* head */}
              <thead className=''>
                <tr className='bg-[#222c4d] p-5'>
                  <th className='text-xs sm:text-base capitalize '>Id</th>
                  <th className='text-xs sm:text-base capitalize '>User Name</th>
                  <th className='text-xs sm:text-base capitalize '>User email</th>
                  <th className='text-xs sm:text-base capitalize '>Rating</th>
                  <th className='text-xs sm:text-base capitalize '>Action</th>
                </tr>
              </thead>
              <tbody className=''>
                {/* row 1 */}
                {
                  users?.map((p, index) =>
                    <>
                      <tr>
                        <td key={p?._id}> {index + 1} </td>
                        <td className='capitalize'> {p?.UserName} </td>
                        <td > {p?.userEmail} </td>
                        <td > {p?.userCity} </td>
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

export default ManageReview;