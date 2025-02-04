import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './Upload.css'

const UploadServices = () => {
  const [isLoading, seIsLoading] = useState(false);
  const [thimbleOne, setThimbleOne] = useState('')
  const [thimbleTwo, setThimbleTwo] = useState('')
  const [thimbleThree, setThimbleThree] = useState('')
  const [thimbleFore, setThimbleFore] = useState('')
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    // loading start
    seIsLoading(true)

    // thimble
    const imgbbAPIKey = '0f140d3e8e7c284d126389c955a6ca33';
    const formData = new FormData();
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;

    // const imageOne = data.imageOne[0];
    // formData.append('imageOne', imageOne);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleOne(result.data.url)
    //     }
    //   })



    // const imageTwo = data.imageTwo[0];
    // formData.append('imageTwo', imageTwo);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleTwo(result.data.url)
    //     }
    //   })



    // const imageThree = data.imageThree[0];
    // formData.append('imageThree', imageThree);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleThree(result.data.url)
    //     }
    //   })





    // const imageFore = data.imageFore[0];
    // formData.append('imageFore', imageFore);
    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.data.url) {
    //       setThimbleFore(result.data.url)
    //     }
    //   })


    // end thimble





    const image = data.image[0];
    formData.append('image', image);
    // const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const services = {
            name: data.productsName,
            title: data.productsTitle,
            unit: data.productUnit,
            status: data.productStatus,
            categories: data.catagories,
            price: data.productPrice,
            brand: data.productsBrand,
            section: data.productsSection,
            productDiscount: data.productDiscount,
            date: new Date,
            productFacture: [
              { facture: data.productFacture },
              { facture: data.productFactureTwo },
              { facture: data.productFactureThree },
              { facture: data.productFactureFore },
              { facture: data.productFactureFive },
              { facture: data.productFactureSix },
              { facture: data.productFactureSeven },
              { facture: data.productFactureEight }
            ],
            // thimble: [
            //   { thimble: data.thimbleOne },
            //   { thimble: data.thimbleTwo },
            //   { thimble: data.thimbleThree },
            //   { thimble: data.thimbleFore }

            // ],
            img: img,
            quantity: data.productsQuantity,
            description: data.productDescription,
          }
          console.log(services)
          // send services data to database
          fetch('https://actual-products-of-e-commerce-server-site.vercel.app/product/add-product', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(services)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.status) {
                Swal.fire(
                  'Product add success',
                  '',
                  'success'
                )
                reset();
                seIsLoading(false)
              }
            })
          // console.log(services);
        }
      })
  }
  return (
    <div className='w-[98%]'>
      <div id="services-content" className='rounded  bg-[#fff] dark:text-[#fff] shadow-2xl  mt-[4rem] mb-[4rem]'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center md:text-start">
            <h1 className="text-2xl font-serif pt-4 text-slate-700 pl-5" >Add Product</h1>
          </div>
          <div className="p-4">

            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5">
              <div className='w-full'>
                <label htmlFor="productsName" className="text-slate-700 ">Product Name </label>
                <input id="productsName" name="productsName" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Product Name "
                  {...register("productsName", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productsName?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productsName.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="productsTitle" className="text-slate-700 ">Product Title </label>
                <input id="productsTitle" name="productsTitle" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Product Name "
                  {...register("productsTitle", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message: "Product title is short",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productsTitle?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productsTitle.message}
                    </span>
                  )}
                </label>
              </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5 pt-3">
              <div className='w-full'>
                <label htmlFor="productsQuantity" className="text-slate-700 ">Product Quantity </label>
                <input id="productsQuantity" name="productsQuantity" type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Product Quantity "
                  {...register("productsQuantity", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productsQuantity?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productsQuantity.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="productStatus" className="text-slate-700 ">Product Status</label>
                <select id="productStatus" className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" {...register("productStatus", {
                  required: {
                    value: true,
                    message: "Select product status",
                  },
                }
                )}>
                  <option selected disabled>Select Status</option>
                  <option value="in-stock">In-stock</option>
                  <option value="out-stock">Out-stock</option>
                  <option value="coming">Coming</option>
                </select>
                <label className="">
                  {errors.productStatus?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productStatus.message}
                    </span>
                  )}
                </label>
              </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5 pt-3">
              <div className='w-full'>
                <label htmlFor="productsBrand" className="text-slate-700 ">Product Brand </label>
                <input id="productsBrand" name="productsBrand" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Product Brand "
                  {...register("productsBrand", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productsBrand?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productsBrand.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="productsSection" className="text-slate-700 ">Product Section Name</label>
                <select id="productsSection" className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" {...register("productsSection", {
                  required: {
                    value: true,
                    message: "Select product unit",
                  },
                }
                )}>
                  <option selected disabled>Select product section name</option>
                  <option value="latest-products">Latest Products</option>
                  <option value="coming-products">Coming Products</option>
                  <option value="today-deals">Today Deals</option>
                  <option value="gift-card">Gift Card</option>
                  <option value="new-arrivals">New Arrivals</option>
                  <option value="registry-gifting">Registry and Gifting</option>
                  <option value="coming-products">Coming Products</option>
                </select>
                <label className="">
                  {errors.productsSection?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productsSection.message}
                    </span>
                  )}
                </label>
              </div>
            </div>




            <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-5 pt-3">
              <div className='w-full'>
                <label htmlFor="productPrice" className="text-slate-700 ">Product price </label>
                <input id="productPrice" name="productPrice" type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product price"
                  {...register("productPrice", {
                    required: {
                      value: true,
                      message: "please enter your product price",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productPrice?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productPrice.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="productDiscount" className="text-slate-700 ">Product Discount </label>
                <input id="productDiscount" name="productDiscount" type="number" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400   placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Discount"
                  {...register("productDiscount", {
                    required: {
                      value: true,
                      message: "please enter product discount",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productDiscount?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productDiscount.message}
                    </span>
                  )}
                </label>
              </div>
            </div>





            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-3">
              <div className='w-full'>
                <label htmlFor="productUnit" className="text-slate-700 ">Product Unit</label>
                <select id="productUnit" className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" {...register("productUnit", {
                  required: {
                    value: true,
                    message: "Select product unit",
                  },
                }
                )}>
                  <option selected disabled>Select product unit</option>
                  <option value="pas">PSE</option>
                  <option value="kg">KG</option>
                </select>
                <label className="">
                  {errors.productUnit?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productUnit.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="catagories" className="text-slate-700 ">Product Catagories</label>
                <select id="catagories" className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" {...register("catagories", {
                  required: {
                    value: true,
                    message: "Select Catagories",
                  },
                }
                )}>
                  <option selected disabled>Select Catagories</option>
                  <option value="mobile">Mobile</option>
                  <option value="laptop">Laptop</option>
                  <option value="monitor">Monitor</option>
                  <option value="watch">Watch</option>
                  <option value="headphone">Headphone</option>
                  <option value="computer">Computer</option>
                  <option value="computer-accessories">Computer Accessories</option>
                  <option value="charger-cables">Charger and Cables</option>
                  <option value="power-bank">Power Bank</option>
                  <option value="cards-coupons">Cards and Coupons</option>
                  <option value="registry-gifting">Registry and Gifting</option>
                  <option value="tv">Tv</option>
                </select>
                <label className="">
                  {errors.catagories?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.catagories.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            {/* product catagories */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5 pt-3">
              <div className='w-full'>
                <label htmlFor="productFactureEight" className="text-slate-700 ">Product Facture</label>
                <input id="productFactureEight" name="productFactureEight" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Facture"
                  {...register("productFactureEight", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productFactureEight?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productFactureEight.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="productFactureSeven" className="text-slate-700 ">Product Facture</label>
                <input id="productFactureSeven" name="productFactureSeven" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Facture"
                  {...register("productFactureSeven", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productFactureSeven?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productFactureSeven.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5 pt-3">
              <div className='w-full'>
                <label htmlFor="productFactureSix" className="text-slate-700 ">Product Facture</label>
                <input id="productFactureSix" name="productFactureSix" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Facture"
                  {...register("productFactureSix", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productFactureSix?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productFactureSix.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="productFactureFive" className="text-slate-700 ">Product Facture</label>
                <input id="productFactureFive" name="productFactureFive" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Facture"
                  {...register("productFactureFive", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productFactureFive?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productFactureFive.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5 pt-3">
              <div className='w-full'>
                <label htmlFor="productFactureFore" className="text-slate-700 ">Product Facture</label>
                <input id="productFactureFore" name="productFactureFore" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Facture"
                  {...register("productFactureFore", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productFactureFore?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productFactureFore.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="productFactureThree" className="text-slate-700 ">Product Facture</label>
                <input id="productFactureThree" name="productFactureThree" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Facture"
                  {...register("productFactureThree", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productFactureThree?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productFactureThree.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  gap-5 pt-3">
              <div className='w-full'>
                <label htmlFor="productFacture" className="text-slate-700 ">Product Facture</label>
                <input id="productFacture" name="productFacture" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Facture"
                  {...register("productFacture", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productFacture?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productFacture.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='w-full'>
                <label htmlFor="productFactureTwo" className="text-slate-700 ">Product Facture</label>
                <input id="productFactureTwo" name="productFactureTwo" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border dark:border-gray-400 border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Product Facture"
                  {...register("productFactureTwo", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },
                  }
                  )}
                />
                <label className="">
                  {errors.productFactureTwo?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.productFactureTwo.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            {/* end products catagories */}

            {/* timbal */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">

              <div className='pt-3'>
                <label htmlFor="imageOne" className="text-slate-700 ">Product Thimble</label>
                <input id="imageOne" name="imageOne" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Services photos "
                  {...register("imageOne", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },

                  }
                  )}
                />
                <label className="">
                  {errors.imageOne?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.imageOne.message}
                    </span>
                  )}
                </label>
              </div>
              <div className='pt-3'>
                <label htmlFor="imageTwo" className="text-slate-700 ">Product Thimble</label>
                <input id="imageTwo" name="imageTwo" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Services photos "
                  {...register("imageTwo", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },

                  }
                  )}
                />
                <label className="">
                  {errors.imageTwo?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.imageTwo.message}
                    </span>
                  )}
                </label>
              </div>
              <div className=''>
                <label htmlFor="imageThree" className="text-slate-700 ">Product Thimble</label>
                <input id="imageThree" name="imageThree" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Services photos "
                  {...register("imageThree", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },

                  }
                  )}
                />
                <label className="">
                  {errors.imageThree?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.imageThree.message}
                    </span>
                  )}
                </label>
              </div>
              <div className=''>
                <label htmlFor="imageFore" className="text-slate-700 ">Product Thimble</label>
                <input id="imageFore" name="imageFore" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Services photos "
                  {...register("imageFore", {
                    required: {
                      value: true,
                      message: "input box is clear please type now",
                    },

                  }
                  )}
                />
                <label className="">
                  {errors.imageFore?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.imageFore.message}
                    </span>
                  )}
                </label>
              </div>
            </div> */}
            <div className='pt-3'>
              <label htmlFor="image" className="text-slate-700 ">Product Photo</label>
              <input id="image" name="image" type="file" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm  bg-[#fff] mt-2" placeholder="Type Here Services photos "
                {...register("image", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
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

            <div className='pt-3'>
              <label htmlFor="productDescription" className="text-slate-700 ">Product Description</label>
              <textarea cols="10" rows="5" id="productDescription" name="productDescription" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border  border-gray-400  placeholder-gray-500 dark:text-slate-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#fff] mt-2" placeholder="Type Here Product Description "

                {...register("productDescription", {
                  required: {
                    value: true,
                    message: "input box is clear please type now",
                  },

                }
                )}
              />
              <label className="">
                {errors.productDescription?.type === "required" && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.productDescription.message}
                  </span>
                )}
              </label>
            </div>
          </div>
          {
            isLoading ? <button className="btn w-full rounded capitalize bg-blue-700 py-2 text-white hover:bg-blue-600 rounded-b border-none" disabled >
              <span className="loading loading-spinner"></span>
              loading...
            </button>
              :
              <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>submit</button>
          }

        </form>
      </div>
    </div>
  );
};

export default UploadServices;