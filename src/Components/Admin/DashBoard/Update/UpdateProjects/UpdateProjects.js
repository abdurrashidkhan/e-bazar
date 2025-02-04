import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../../firebase.init";
import Loading from "../../../common/Loading/Loading";
const UpdateProject = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [project, setProject] = useState([]);
  const navigate = useNavigate();
  const email = user?.email;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://portfolio-2-0-server.vercel.app/project/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProject(data.data));
  }, [id]);
  // console.log(project);
  const onSubmit = (data) => {
    // const imgbbAPIKey = "e32b2607a3f00cb963832ebb13d8a672";
    // const image = data.image[0];
    // const formData = new FormData();
    // formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    // fetch(url, {
    //    method: "POST",
    //    body: formData,
    // })
    //    .then((res) => res.json())
    //    .then((result) => {
    //       if (result.success) {
    //          const img = result?.data?.url;
    //          const user = {
    //             displayName: data.displayName,
    //             country: data.country,
    //             city: data.city,
    //             aboutMe: data.aboutMe,
    //             address: data.address,
    //             email: data.email,
    //             image: img,
    //          };

    // fetch(`https://eventy-server.vercel.app/user-update/${email}`, {
    //    method: "PUT",
    //    headers: {
    //       "content-type": "application/json",
    //    },
    //    body: JSON.stringify(user),
    // })
    //    .then((res) => res.json())
    //    .then((inserted) => {
    //       if (inserted) {
    //          toast.success("updated");
    //          navigate('/manage-profile')
    //          reset();
    //       }
    //    });
    //    }
    // });
    const projectData = {
      productsName: data.productsName,
      backend: data.backend,
      frontend: data.frontend,
      projectTheme: data.projectTheme,
      projectFeature: [data.projectFeature, data.projectFeature_one, data.projectFeature_two, data.projectFeature_three],
      // productsLiveLink: data.productsLiveLink,
      projectDelevary: data.delivery,
      projectPrice: data.projectPrice,
      // image: data.image,
      productsDescription: data.productsDescription,
    };
    console.log(projectData);

    fetch(`https://portfolio-2-0-server.vercel.app/project/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(projectData),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted) {
          Swal.fire("Update successfully", "", "success");
          navigate("/");
          reset();
        }
      });
  };

  const projectFeature_1 = project?.projectFeature?.[0]
  const projectFeature_2 = project?.projectFeature?.[1]
  const projectFeature_3 = project?.projectFeature?.[2]
  const projectFeature_4 = project?.projectFeature?.[3]


  // for user
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
  }
  console.log(project);
  return (
    <section className="h-auto py-5">
      <div className=" route mx-auto">
        <div className="rounded  shadow-2xl" id="profile_container">
          <div className="text-start">
            <h1 className="text-2xl font-semibold  dark:text-slate-200 text-slate-700 pl-9">
              Update Project
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4">
              <div className="block sm:flex gap-3 mt-4">
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="productsName"
                      className="dark:text-slate-200 text-slate-700 block font-semibold w-1/2 "
                    >
                      Project Name{" "}
                    </label>
                    <input
                      defaultValue={project?.productsName}
                      id="productsName"
                      name="productsName"
                      type="text"
                      className=" mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="User Name"
                      {...register("productsName", {
                        required: {
                          value: true,
                          message: "Enter your project name",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.productsName?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.productsName.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="productsLiveLink"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Live Site
                    </label>
                    <input
                      value={project.productsLiveLink}
                      readOnly
                      id="productsLiveLink"
                      name="productsLiveLink"
                      type="text"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="products Live Link "
                      {...register("productsLiveLink", {
                        // required: {
                        //   value: true,
                        //   message: "Enter products Live Link",
                        // },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.productsLiveLink?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.productsLiveLink.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="block sm:flex gap-3 mt-4">
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="projectTheme"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Project Theme
                    </label>
                    <input
                      // defaultValue={userData?.country? userData?.country : "Enter Your Country"}
                      defaultValue={project?.projectTheme}
                      id="projectTheme"
                      name="projectTheme"
                      type="text"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Project Theme"
                      {...register("projectTheme", {
                        required: {
                          value: true,
                          message: "Enter Your Project Theme",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.projectTheme?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.projectTheme.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="projectPrice"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Project Price
                    </label>
                    <input
                      defaultValue={project?.projectPrice}
                      id="projectPrice"
                      name="projectPrice"
                      type="number"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="$100"
                      {...register("projectPrice", {
                        required: {
                          value: true,
                          message: "Enter Project Price ",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.projectPrice?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.projectPrice.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="block sm:flex gap-3 mt-4">
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="projectFeature"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Project feature
                    </label>
                    <input
                      // defaultValue={userData?.country? userData?.country : "Enter Your Country"}
                      defaultValue={projectFeature_1}
                      id="projectFeature"
                      name="projectFeature"
                      type="text"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Project Feature"
                      {...register("projectFeature", {
                        required: {
                          value: true,
                          message: "Project Feature",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.projectFeature?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.projectFeature.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="projectFeature_one"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Project Feature
                    </label>
                    <input
                      defaultValue={projectFeature_2}
                      id="projectFeature_one"
                      name="projectFeature_one"
                      type="text"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Project feature"
                      {...register("projectFeature_one", {
                        required: {
                          value: true,
                          message: "Enter Project Feature",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.projectFeature_one?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.projectFeature_one.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="block sm:flex gap-3 mt-4">
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="projectFeature_two"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Project feature
                    </label>
                    <input
                      // defaultValue={userData?.country? userData?.country : "Enter Your Country"}
                      defaultValue={projectFeature_3}
                      id="projectFeature_two"
                      name="projectFeature_two"
                      type="text"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Project Feature"
                      {...register("projectFeature_two", {
                        required: {
                          value: true,
                          message: "Project Feature",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.projectFeature_two?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.projectFeature_two.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="projectFeature_three"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Project Feature
                    </label>
                    <input
                      defaultValue={projectFeature_4}
                      id="projectFeature_three"
                      name="projectFeature_three"
                      type="text"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Project feature"
                      {...register("projectFeature_three", {
                        required: {
                          value: true,
                          message: "Enter Project Feature",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.projectFeature_three?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.projectFeature_three.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    htmlFor="delivery"
                    className="dark:text-slate-200 text-slate-700 font-semibold "
                  >
                    Delivery
                  </label>
                  <input
                    defaultValue={project?.projectDelivery}
                    id="delivery"
                    name="delivery"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                    placeholder="Project Deration"
                    {...register("delivery", {
                      required: {
                        value: true,
                        message: "Project Deration",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.delivery?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.delivery.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    htmlFor="frontend"
                    className="dark:text-slate-200 text-slate-700 font-semibold "
                  >
                    Frontend Technology
                  </label>
                  <input
                    defaultValue={project?.frontend}
                    id="frontend"
                    name="frontend"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                    placeholder="Frontend Technology"
                    {...register("frontend", {
                      required: {
                        value: true,
                        message: "Frontend Technology",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.frontend?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.frontend.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <div className="mt-4">
                  <label
                    htmlFor="backend"
                    className="dark:text-slate-200 text-slate-700 font-semibold "
                  >
                    Backend Technology
                  </label>
                  <input
                    defaultValue={project?.backend}
                    id="backend"
                    name="backend"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                    placeholder="Backend Technology"
                    {...register("backend", {
                      required: {
                        value: true,
                        message: "Backend Technology",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.backend?.type === "required" && (
                    <span className="text-red-500 text-sm capitalize">
                      {errors.backend.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="py-2">
                <div className="mt-4">
                  <label
                    htmlFor="productsDescription"
                    className="dark:text-slate-200 text-slate-700 w-1/5 font-semibold"
                  >
                    {" "}
                    Project Description{" "}
                  </label>
                  <textarea
                    defaultValue={project?.productsDescription}
                    id="productsDescription"
                    name="productsDescription"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                    placeholder="Project Description"
                    cols="5"
                    rows="5"
                    {...register("productsDescription", {
                      required: {
                        value: true,
                        message: "Enter Your products Description",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.productsDescription?.type === "required" && (
                    <span className="text-red-500 text-sm  capitalize">
                      {errors.productsDescription.message}
                    </span>
                  )}
                </label>
              </div>
              {/* <div className="pb-4">
                     <div className="">
                        <label
                           htmlFor="image"
                           className="text-slate-500 w-1/5 font-semibold block mt-4"
                        >
                           Update Photos
                        </label>
                        <input

                           id="image"
                           name="image"
                           type="file"
                           className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                           placeholder="select photo"
                           {...register("image", {
                              required: {
                                 value: true,
                                 message: "select photos",
                              },
                           })}
                        />
                     </div>
                     <label className="text-left sm:text-start block">
                        {errors.image?.type === "required" && (
                           <span className="text-red-500 text-sm  capitalize">
                              {errors.image.message}
                           </span>
                        )}
                     </label>
                  </div> */}
            </div>
            <button className="uppercase transition-all bg-[#00C749] w-full py-2 text-white hover:bg-green-600 rounded-b">
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateProject;