"use client";
import ProductSlider from "@/app/components/ProductSlider";
import Trending from "@/app/components/Trending";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const data = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=9"
    );
    const res = await data.json();
    setProducts(res);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="p-2 sm:px-8">
      <Image
        src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/w_1569,c_limit/d8ae4bab-e246-45d6-9e1a-7537fe70f5e7/nike-just-do-it.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
        alt="home image"
      />
      <ProductSlider products={products} />
      <Trending products={products} />
    </div>
  );
};

export default page;
