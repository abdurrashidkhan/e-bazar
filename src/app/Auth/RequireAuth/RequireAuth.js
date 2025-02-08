import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../../Components/Common/Loading";
import auth from "../../../firebase.init";
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate href="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
