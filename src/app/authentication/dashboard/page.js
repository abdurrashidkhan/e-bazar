// welcome to dashboard
'use client';

import AdminCheck from '@/app/Auth/Admin/AdminCheck';
import { auth } from '@/app/firebase.init';
import Loading from '@/Components/Common/Loading';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

// import CheckingUser from '@/components/Admin/checkingUser';
// import { auth } from '../firebase.init';
// import Loading from '../loading';

export default function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  // const checkingUsers = AdminCheck();
  let isAdmin;
  if (loading || outLoading) {
    return <Loading></Loading>;
  } else {
    // isAdmin = CheckAdmin()
  }
  if (error || OutError) {
    console.log(error?.message);
  }
  return (
    <div className=''>
      <h1>Hello Dashboard</h1>
    </div>
  );
}
