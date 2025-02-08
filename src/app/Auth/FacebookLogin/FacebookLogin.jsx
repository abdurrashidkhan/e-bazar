import { FacebookAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../Components/Common/Loading";
import auth from "../../../firebase.init";

const FacebookLogin = () => {
  const provider = new FacebookAuthProvider();
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home");
      Swal.fire("Login successfully", "", "success");
    }
  }, [user, navigate]);

  let errorElement = "";
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="">
        <BsFacebook
          onClick={() => signInWithFacebook()}
          className="text-4xl text-[#2655ee] cursor-pointer"
        ></BsFacebook>
      </div>
    </div>
  );
};

export default FacebookLogin;
