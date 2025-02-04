import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      axios
        .get(`https://actual-products-of-e-commerce-server-site.vercel.app/user/admin/${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((data) => {
          setAdmin(data.data);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;