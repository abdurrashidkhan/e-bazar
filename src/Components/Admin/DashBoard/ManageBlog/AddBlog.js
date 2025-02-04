import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddBlog = () => {
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
            topic: data.topic,
            author: data.author,
            description: data.description,
            date: new Date(),
            img: img,
          };
          console.log(projectData);
          fetch('https://portfolio-2-0-server.vercel.app/blog/add-blog', {
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
              Upload Blog
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4">
              <div className="block sm:flex gap-3 mt-4">
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="topic"
                      className="dark:text-slate-200 text-slate-700 block font-semibold w-1/2 "
                    >
                      Project Name{" "}
                    </label>
                    <input
                      id="topic"
                      name="topic"
                      type="text"
                      className=" mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Enter your Blog name"
                      {...register("topic", {
                        required: {
                          value: true,
                          message: "Enter your Blog name",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.topic?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.topic.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full">
                  <div className="">
                    <label
                      htmlFor="author"
                      className="dark:text-slate-200 text-slate-700 font-semibold w-1/2 "
                    >
                      Author Name
                    </label>
                    <input

                      id="author"
                      name="author"
                      type="text"
                      className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                      placeholder="Author Name "
                      {...register("author", {
                        required: {
                          value: true,
                          message: "Author Name",
                        },
                      })}
                    />
                  </div>
                  <label className="text-left sm:text-start block">
                    {errors.author?.type === "required" && (
                      <span className="text-red-500 text-sm capitalize">
                        {errors.author.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="py-2">
                <div className="mt-4">
                  <label
                    htmlFor="description"
                    className="dark:text-slate-200 text-slate-700 w-1/5 font-semibold"
                  >
                    {" "}
                    Blog Description{" "}
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    type="text"
                    className="mt-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  dark:text-[#fff] bg-transparent text-gray-700 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 text-sm sm:text-base"
                    placeholder="Blog Description"
                    cols="5"
                    rows="5"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Enter Your Blog Description",
                      },
                    })}
                  />
                </div>
                <label className="text-left sm:text-start block">
                  {errors.description?.type === "required" && (
                    <span className="text-red-500 text-sm  capitalize">
                      {errors.description.message}
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
              Upload
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBlog;