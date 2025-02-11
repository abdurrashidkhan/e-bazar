"use client";
import findAllProducts from "@/database/find/allProducts/findAllProducts";
import { useEffect, useState } from "react";
import Loading from "../Common/Loading";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(products)
  // find products
  const fetchProducts = async () => {
    const { allProducts } = await findAllProducts()
    setProducts(allProducts)
    if (!allProducts) {
      return <Loading></Loading>
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchProducts()
    return () => controller.abort();
  }, []);

  return { products, loading, error };
};

export default useProducts;