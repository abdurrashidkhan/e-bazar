"use client";
import { auth } from "@/app/firebase.init";
import LoginWithFb from "@/Components/authentication/Facebbok/LoginWithFb";
import LoginWithGoogle from "@/Components/authentication/Google/LoginWithGoogle";
import Loading from "@/Components/Common/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
export default function Login() {
  const [cUser, cLoading, xError] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.userEmail, data.password);
  };
  useEffect(() => {
    if (user || cUser) {
      router.push("/");
      Swal.fire({
        title: "Login success",
        icon: "success",
      });
    }
  }, [user, router, cUser]);

  if (loading || cLoading) {
    return <Loading></Loading>;
  }
  if (error || xError) {
    console.log(error || xError);
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50  text-black">
      {/* Main Container */}
      <div className="bg-white  border border-gray-300 p-6 w-full max-w-sm rounded-md shadow-lg">
        {/* Social Zone Logo */}
        <h1 className="text-center text-3xl font-logo mb-6">Social Zone</h1>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div>
            <input
              type="email"
              id="userEmail"
              placeholder="Phone number, username, or email"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none     bg-white"
              {...register("userEmail", { required: "Email is required" })}
            />
            {errors.userEmail && (
              <p className="text-red-500 text-sm mt-1">{errors.userEmail.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none     bg-white"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
          >
            Log in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm px-2">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        {/* Login with Facebook */}
        <div className="text-[#0095F6] font-semibold hover:underline text-center flex items-start justify-center gap-5  ">
          {/* <FaFacebook className="text-2xl text-[#0095F6]" /> */}
          <LoginWithGoogle />
          <strong>||</strong>
          <LoginWithFb />
        </div>

      </div>

      {/* Sign-up Section */}
      <div className="mt-6 text-center">
        <p className="text-sm">
          Don&#39;t have an account?{" "}
          <a
            href="/authentication/create-account"
            className="text-blue-500 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
        <Link href={'/password/forget'} className="text-sm text-blue-600 mt-3 cursor-pointer hover:underline">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
