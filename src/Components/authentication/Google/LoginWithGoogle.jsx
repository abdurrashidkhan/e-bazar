import { auth } from "@/app/firebase.init";
import googleLogo from "@/assert/googleLogo.png";
import Loading from "@/Components/Common/Loading";
import userInfoInsert from "@/database/userInfoInsert/userInfoInsert";
import Image from "next/image";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function LoginWithGoogle() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const googleLogin = async () => {
    await signInWithGoogle();
  };
  const userInfo = {
    displayName: user?.user?.displayName,
    userNumber: user?.user?.phoneNumber || null,
    email: user?.user?.email,
    emailVerified: user?.user?.emailVerified,
    photoURL: user?.user?.photoURL,
    accessToken: user?.user?.accessToken,
  };
  if (user) {
    userInfoInsert(userInfo);
    console.log(userInfo);
  }
  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement = "";
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  return (
    <div className="">
      <button className=" " onClick={() => googleLogin()}>
        <Image
          className="w-[30px] h-auto"
          loading="lazy"
          src={googleLogo}
          alt="Loading...."
        />
      </button>
    </div>
  );
}
