import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const AddReview = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const imgbbAPIKey = 'ef8e2adcf82ba9b088feff829df4d6bf';
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const review = {
            userName: data.name,
            location: data.location,
            review: data.review,
            image: img
          }
          // send services data to database
          fetch('https://portfolio-2-0-server.vercel.app/projects/add-review', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.acknowledged) {
                Swal.fire(
                  'review add success',
                  '',
                  'success'
                )
                reset();
              }
            })
        }
      })
  }
  return (
    <div>
      <div id="services-content" className='rounded'>
        <div className="text-center">
          <h1 className="text-2xl font-serif pt-4" >Add Review</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div>
              <label htmlFor="name" className="text-slate-600">Your Name</label>
              <input id="name" name="name" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Your Name "
                {...register("name", {
                  required: {
                    value: true,
                    message: "please type name",
                  },
                }
                )}
              />
              <label className="">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="location" className="text-slate-600"> Address</label>
              <input id="location" name="location" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Address "

                {...register("location", {
                  required: {
                    value: true,
                    message: "please type your Address",
                  },

                }
                )}
              />
              <label className="">
                {errors.location?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.location.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="review" className="text-slate-600">Type Here</label>
              <textarea id="review" name="review" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="What is your comment on my project"
                cols="30" rows="5"
                {...register("review", {
                  required: {
                    value: true,
                    message: "please type  review",
                  },

                }
                )}
              />
              <label className="">
                {errors.review?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.review.message}
                  </span>
                )}
              </label>
            </div>
            <div className='pb-4'>
              <label htmlFor="image" className="text-slate-600">Your photos</label>
              <input id="image" name="image" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here Services photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "enter your photos",
                  },

                }
                )}
              />
              <label className="">
                {errors.image?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;