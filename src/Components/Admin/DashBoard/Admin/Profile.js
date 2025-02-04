import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Profile.css'
import auth from '../../../../firebase.init';
import Loading from '../../../Common/Loading';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className=" text-center py-8 bg-white w-[100%] h-[100vh] md:w-96 md:h-96 shadow-2xl rounded my-10" >
      <div className="avatar online z-[0]">
        <div className="w-24 rounded-full">
          {
            user?.photoURL ? <img src={user?.photoURL} alt='' /> : <img src="https://placeimg.com/192/192/people" alt='' />
          }

        </div>
      </div>
      <strong className='block '>{user?.displayName}</strong>
      {/* <p className='text-slate-700'>last Login : {user?.auth?.currentUser?.metadata?.lastSignInTime}</p> */}
      <button className='capitalize mt-2 border text-slate-100 bg-blue-600 hover:bg-blue-700 text-sm hover:text-white px-4 py-1 rounded' onClick={logout}>logOut</button>
    </div>
  );
};

export default Profile;