"use client";
import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const data = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=36"
    );
    const res = await data.json();
    setProducts(res);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl p-4 pt-16 mx-auto">
      {products?.map((item: any) => {
        return (
          <div className="w-full" key={item?.id}>
            <Product product={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
