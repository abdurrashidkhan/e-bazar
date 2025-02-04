import { auth } from '@/app/firebase.init';
import Loading from '@/Components/Common/Loading';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const [user, loading, error] = useAuthState(auth);
  const [users, SetUsers] = useState([])
  useEffect(() => {
    fetch(`https://actual-products-of-e-commerce-server-site.vercel.app/users/delete/${user?.email}`)
      .then(res => res.json())
      .then(data => SetUsers(data.data))
  }, [users])
  // console.log(users);
  const deleteProject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are sure to delete this info",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://actual-products-of-e-commerce-server-site.vercel.app/user/delete/${id}/${user?.email}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (!data.status) {
              return Swal.fire("Delete Fail !", data.message, "warning");
            }
            if (data.status) {
              return Swal.fire("Deleted!", data.message, "success");
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
  if (users?.length <= 0) {
    return <Loading></Loading>
  }
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error)
  }
  return (
    <div className="w-[98%] h-[100vh] pt-[7rem]">
      <h1 className=' text-slate-700 font-semibold'>Total Users : {users?.length}</h1>
      <div className="py-5">
        <div className="overflow-x-auto ">
          <table className="table w-full  bg-white   text-slate-600 rounded shadow-2xl font-semibold overflow-x-auto">
            {/* head */}
            <thead className='text-slate-700'>
              <tr className=' p-5 border-[#cacacab2] dark:border-[#00000021]'>
                <th className='text-xs sm:text-base capitalize '>Id</th>
                <th className='text-xs sm:text-base capitalize '>User Name</th>
                <th className='text-xs sm:text-base capitalize '>User email</th>
                <th className='text-xs sm:text-base capitalize '>User Role</th>
                <th className='text-xs sm:text-base capitalize '>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {/* row 1 */}
              {
                users?.map((p, index) =>
                  <tr className='border-[#00000021]  ' key={p?._id}>
                    <td> {index + 1} </td>
                    <td className='capitalize text-xs sm:text-sm'> {p?.displayName} </td>
                    {
                      p?.email === 'rashidkhanbd57@gmail.com' ? <td className=' text-xs sm:text-sm'> admin.support@gmail.com </td>
                        : <td className=' text-xs sm:text-sm'> {p?.email} </td>
                    }
                    {
                      p?.role === 'admin' ? <td className='capitalize text-xs sm:text-sm'> {p?.role} </td> : <td className='capitalize text-xs sm:text-sm'> Normal</td>
                    }
                    <td className='flex items-center gap-3'>
                      <Link href={`/user/update/${p?._id}`}><FaEdit className='text-2xl text-[#04bd48]' /></Link>
                      <button onClick={() => deleteProject(p?._id)}><MdDelete className='text-2xl text-[#c93030]' /></button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
};

export default ManageUsers;