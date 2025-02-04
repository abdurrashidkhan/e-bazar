import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const useCard = (data) => {
  const [cardItems, setCardItems] = useState([]);

  // const product = {
  //   name: data.name,
  //   title: data.title,
  //   unit: data.unit,
  //   status: data.status,
  //   categories: data.categories,
  //   price: data.price,
  //   brand: data.brand,
  //   section: data.section,
  //   discount: data.discount,
  //   image: data.image,
  //   quantity: data.quantity,
  //   description: data.description,
  // };
  console.log(data);
  // send services data to database
  // useEffect(() => {
  //   fetch("https://actual-products-of-e-commerce-server-site.vercel.app/card/add-card", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //     body: JSON.stringify(product),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       Swal.fire(
  //         'Add to card',
  //         '',
  //         'success'
  //       )
  //       setCardItems(data)
  //     });
  // }, []);

  return [cardItems];
};

export default useCard;
