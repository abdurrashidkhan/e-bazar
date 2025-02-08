import { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../../Components/Common/Loading";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [cUser, cLoading, cError] = useAuthState(auth);
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  // console.log(user);

  const userData = {
    displayName: cUser?.displayName,
    email: cUser?.email,
    emailVerified: cUser?.emailVerified,
    phoneNumber: cUser?.phoneNumber,
    photoURL: user?.photo,
  };
  console.log(userData);
  useEffect(() => {
    if (cUser) {
      fetch(
        `https://actual-products-of-e-commerce-server-site.vercel.app/user/${cUser.email}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(userData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          // setToken(data.token);
          // console.log(data);
        });
    }
  }, [cUser]);

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
        <FcGoogle
          onClick={() => signInWithGoogle()}
          className="text-4xl  cursor-pointer"
        ></FcGoogle>
      </div>
    </div>
  );
};

export default SocialLogin;
