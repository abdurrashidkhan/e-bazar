import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const ProjectsPost = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const imgbbAPIKey = 'ef8e2adcf82ba9b088feff829df4d6bf';
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const projectData = {
            projectsName: data.projectsName,
            backend: data.backend,
            frontend: data.frontend,
            projectTheme: data.projectTheme,
            projectFeature: [data.projectFeature, data.projectFeature_one, data.projectFeature_two, data.projectFeature_three],
            projectsLiveLink: data.projectsLiveLink,
            projectDelivery: data.delivery,
            projectPrice: data.projectPrice,
            image: img,
            projectsDescription: data.projectsDescription,
          };
          // console.log(projectsData);
          fetch('https://portfolio-2-0-server.vercel.app/project/project-add', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(projectData),
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.acknowledged) {
                Swal.fire(
                  'product add success',
                  '',
                  'success'
                )
              }
              reset()
            })
        }
      })
  }
  return (
    <section className="h-auto py-5">
      <div className=" route mx-auto">
        <div className="rounded  shadow-2xl" id="profile_container">
          <div className="text-start">
            <h1 className="text-2xl font-semibold  dark:text-slate-200 text-slate-700 pl-9">
              Upload Project
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4">
              <div className="block sm:flex gap-3 mt-4">
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="projectsName"
                      className="dark:text-slate-200 text-slate-700 block font-semibold w-1/2 "
                    >
                      Project Name{" "}
                    </label>
                    <input
                      id="projectsName"
                      name="projectsName"
                      type="text"
                      className=" mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Project Name"
                      {...register("projectsName", {
                        required: {
                          value: true,
                          message: "Enter your project name",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.projectsName?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.projectsName.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="projectsLiveLink"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Live Site
                    </label>
                    <input

                      id="projectsLiveLink"
                      name="projectsLiveLink"
                      type="text"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="projects Live Link "
                      {...register("projectsLiveLink", {
                        required: {
                          value: true,
                          message: "Enter project Live Link",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.projectsLiveLink?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.projectsLiveLink.message}
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
                    htmlFor="projectsDescription"
                    className="dark:text-slate-200 text-slate-700 w-1/5 font-semibold"
                  >
                    {" "}
                    Project Description{" "}
                  </label>
                  <textarea
                    id="projectsDescription"
                    name="projectsDescription"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                    placeholder="Project Description"
                    cols="5"
                    rows="5"
                    {...register("projectsDescription", {
                      required: {
                        value: true,
                        message: "Enter Your projects Description",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.projectsDescription?.type === "required" && (
                    <span className="text-red-500 text-sm  capitalize">
                      {errors.projectsDescription.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="pb-4">
                <div className="">
                  <label
                    htmlFor="image"
                    className="text-slate-500 w-1/5 font-semibold block mt-4"
                  >
                    Upload Photo
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
              </div>
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

export default ProjectsPost;