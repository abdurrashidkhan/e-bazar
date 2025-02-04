import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const SkillsPost = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    const imgbbAPIKey = 'ef8e2adcf82ba9b088feff829df4d6bf';
    const image = data.skillPhotos[0];
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
          console.log(result);
          const img = result.data.url;
          const skill = {
            skillName: data.skillName,
            percentage: data.percentage,
            img: img
          }
          // send services data to database
          fetch('https://portfolio-2-0-server.vercel.app/projects/skill-add', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(skill)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.acknowledged) {
                Swal.fire(
                  'skill add success',
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
          <h1 className="text-2xl font-serif pt-4" >Add skill</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <div>
              <label htmlFor="skillName" className="text-slate-600">Skill Name </label>
              <input id="skillName" name="skillName" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Type Here "
                {...register("skillName", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                }
                )}
              />
              <label className="">
                {errors.skillName?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.skillName.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="percentage" className="text-slate-600">How much can you do?</label>
              <input id="percentage" name="percentage" type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="How much can you do?"

                {...register("percentage", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },
                }
                )}
              />
              <label className="">
                {errors.percentage?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.percentage.message}
                  </span>
                )}
              </label>
            </div>
            <div className='py-4'>
              <label htmlFor="skillPhotos" className="text-slate-600">skill photo</label>
              <input id="skillPhotos" name="skillPhotos" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="How much can you do?"

                {...register("skillPhotos", {
                  required: {
                    value: true,
                    message: "select photo ",
                  },
                }
                )}
              />
              <label className="">
                {errors.skillPhotos?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.skillPhotos.message}
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

export default SkillsPost;