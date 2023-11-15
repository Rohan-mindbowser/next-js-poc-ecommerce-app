"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const data = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=27&limit=9"
    );
    const res = await data.json();
    setProducts(res);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="my-12"
    >
      {products &&
        products?.map((product: any) => {
          return (
            <Link href={`/pages/product/${product?.id}`}>
              <div className="w-full px-2" key={product?.id}>
                <img
                  src={product?.images[0]}
                  className="w-full h-[500px] object-cover"
                  alt="product-img"
                />
                <div className="flex justify-between mt-2">
                  <h1>{product?.title}</h1>
                  <span>$ {product?.price}</span>
                </div>
                <h1 className="text-gray-500">{product?.category?.name}</h1>
              </div>
            </Link>
          );
        })}
    </Carousel>
  );
};

export default ProductSlider;
