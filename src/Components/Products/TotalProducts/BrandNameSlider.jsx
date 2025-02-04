"use client";
import { useEffect, useState } from "react";

const BrandNameSlider = () => {
  const [brandName, setBrandName] = useState([]);
  useEffect(() => {
    fetch(
      "https://actual-products-of-e-commerce-server-site.vercel.app/products/brand/name"
    )
      .then((res) => res.json())
      .then((data) => setBrandName(data));
  }, []);
  const { data } = brandName;
  console.log(data);
  return (
    <div>
      <ul>
        {data?.map((brandName) => (
          <>
            <h1>{brandName.brand}</h1>
          </>
        ))}
      </ul>
    </div>
  );
};

export default BrandNameSlider;
