'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase.init';

export default function AdminCheck({ children }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    // লোডিং শেষ হওয়ার পর যদি ইউজার না থাকে বা অ্যাডমিন না হয়
    if (!loading && !user) {
      router.push('/authentication/login'); // রিডাইরেক্ট করুন
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }

  // ইউজার থাকলে চিলড্রেন রেন্ডার হবে
  return user ? <>{children}</> : null;
}
