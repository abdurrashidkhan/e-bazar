import { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";
import Loading from "../../Common/Loading";
import FacebookLogin from "../FacebookLogin/FacebookLogin";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";

  const [updateProfile] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e) => {
    await createUserWithEmailAndPassword(e.email, e.password);
    await updateProfile({ displayName: e.userName });
    const userData = { email: e.email, displayName: e.userName };
    if (e.email) {
      fetch(
        `https://actual-products-of-e-commerce-server-site.vercel.app/api/v1/users/${e.email}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            // authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(userData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // localStorage.setItem("token", data.token);
          // setToken(data.token);
          console.log(data);
        });
    }
  };
  // google account with login

  // token hook
  // const [token] = UseToken(user);

  useEffect(() => {
    if (user) {
      navigate("/login");
      Swal.fire("your account create successfully", "", "success");
    }
  }, [user, navigate, form]);

  let errorElement = "";
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  const agreeBtn = (e) => {
    const agreeValue = e.target.checked;
    setAgree(agreeValue);
  };

  return (
    <section className="container mx-auto px-4">
      <div className="">
        <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md  w-full  bg-slate-200 p-4 rounded-lg shadow-lg">
            <div>
              <div className="user_icon">
                {/* <img
                  className="mx-auto  h-20 w-auto"
                  src="https://i.ibb.co/Ct43kdn/image-removebg-preview-6.png"
                  alt="Workflow"
                /> */}
              </div>
              <h2 className="mt-1 font-serif text-center text-3xl font-extrabold text-gray-900">
                Sign Up
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="">
                  <label htmlFor="userName" className="text-slate-700 pt-2">
                    User Name
                  </label>
                  <input
                    id="userName"
                    name="userName"
                    type="text"
                    autoComplete="userName"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="User Name"
                    {...register("userName", {
                      required: {
                        value: true,
                        message: "Please enter your name",
                      },
                      minLength: {
                        value: 3,
                        message: "min name characters 3 ",
                      },
                    })}
                  />
                  <label className="">
                    {errors.userName?.type === "required" && (
                      <span className="text-red-500 text-sm pt-2">
                        {errors.userName.message}
                      </span>
                    )}
                    {errors.userName?.type === "minLength" && (
                      <span className="text-red-500">
                        {errors.userName.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="pt-3">
                  <label htmlFor="email" className="text-slate-700 pt-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="Email address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Please enter your email",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "enter your valid email",
                      },
                    })}
                  />
                  <label className="">
                    {errors.email?.type === "required" && (
                      <span className="text-red-500 text-sm pt-2">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="pt-3">
                  <label htmlFor="password" className="text-slate-700 pt-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
                    placeholder="Password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter your password",
                      },
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/,
                        message: "upper and lower case  and a number",
                      },
                      minLength: {
                        value: 6,
                        message: "min 6 characters ",
                      },
                    })}
                  />
                  <label className="">
                    {errors.password?.type === "required" && (
                      <span className="text-red-500 text-sm pt-2">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="block sm:flex items-center justify-between">
                <div className="flex  items-center">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    onChange={agreeBtn}
                  />
                  <label
                    htmlFor="agree"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    agree terms and conditions
                  </label>
                </div>
              </div>
              {errorElement && errorElement}
              <div>
                {agree ? (
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-bold hoverBtnSpacing"
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-bold"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </form>
            <div className="mt-5">
              <Link
                className="text-blue-700 hover:text-blue-900"
                href={"/login"}
              >
                I Have Account ?{" "}
              </Link>
            </div>
            {/* social login */}
            <div className="flex items-center justify-items-center gap-6 justify-center py-4">
              <SocialLogin></SocialLogin>
              <span> | </span>
              <FacebookLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
