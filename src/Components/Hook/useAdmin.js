'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    const token = localStorage.getItem('accessToken'); // এখানে নাম চেক করুন

    if (email && token) {
      axios
        .get(`https://actual-products-of-e-commerce-server-site.vercel.app/user/admin/${email}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setAdmin(res.data.admin); // সার্ভার থেকে আসা ডাটা সেট হবে
          setAdminLoading(false);
        })
        .catch(() => {
          setAdmin(false);
          setAdminLoading(false);
        });
    } else {
      // যদি ইউজার বা টোকেন না থাকে
      if (!user) {
        setAdminLoading(false);
      }
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
