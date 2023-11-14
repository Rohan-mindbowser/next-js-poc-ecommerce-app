"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const viewProduct = () => {
  const [product, setProduct]: any[] = useState();
  const params = useParams();
  const getSingleProduct = async (id: any) => {
    const data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const res = await data.json();
    setProduct(res);
  };
  useEffect(() => {
    getSingleProduct(params?.id);
  });
  return (
    <div className="p-2 sm:px-8 sm:py-6 w-full flex justify-center">
      {product && (
        <div className="flex flex-wrap gap-x-6 max-w-7xl sm:p-16">
          <div className="w-full sm:w-2/3">
            <img src={product?.images[0]} className="w-full"></img>
            <div className="grid grid-cols-2 max-h-40 gap-4 mt-4">
              <img src={product?.images[1]} className="hidden sm:block"></img>
              <img src={product?.images[2]} className="hidden sm:block"></img>
            </div>
          </div>
          <div className="w-full sm:w-1/4 max-w-lg">
            <h1 className="text-xl font-semibold">{product?.title}</h1>
            <p className="text-sm">{product?.category?.name}</p>
            <p className="font-bold my-6">MRP: ${product?.price}</p>
            <button className="px-4 py-4 text-xs font-semibold rounded-full bg-black text-white hover:bg-gray-600 w-full max-w-xs">
              Add to Bag
            </button>
            <button className="px-4 py-4 text-xs font-semibold rounded-full border-2 border-gray-300  text-black hover:border-black w-full max-w-xs mt-2">
              <span className="flex justify-center items-center gap-1">
                Favorite
              </span>
            </button>
            <div className="mt-4 max-w-xs">
              <p className="text-sm">
                Whenyou need a shoe that's ready 24/7, it's gotta be the Max
                Aura 5. Inspired by the AJ3, this pair of kicks puts a modern
                spin on the classic. They're made from durable leather and
                textiles that sit atop a heel of Nike Air cushioning so you can
                walk, run or skate all day and still have fresh-feeling soles.
              </p>
              <div className="mt-4">
                <span className="text-sm font-semibold">Benefits</span>
                <p className="text-sm">- Jumpman label on tongue</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default viewProduct;
