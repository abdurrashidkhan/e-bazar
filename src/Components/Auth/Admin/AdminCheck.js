import { signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../../firebase-init";
import Loading from "../../Common/Loading";
import useAdmin from "../../Hook/useAdmin";

const AdminCheck = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const router = useRouter();
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current || loading || adminLoading) return;

    const handleRedirect = async () => {
      handled.current = true;

      if (!user) {
        await Swal.fire("You are not admin", "", "info");
        router.push('/login');
        return;
      }

      if (!admin) {
        await signOut(auth);
        localStorage.removeItem('token');
        await Swal.fire("You are not admin", "", "info");
        router.push('/login');
      }
    };

    handleRedirect();
  }, [user, admin, loading, adminLoading, router]);

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (user && admin) {
    return children;
  }

  return <Loading />;
};

export default AdminCheck;