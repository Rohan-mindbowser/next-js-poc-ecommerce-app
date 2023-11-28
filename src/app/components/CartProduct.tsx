"use client";
import React, { useContext } from "react";
import { cart } from "../context/ProductContext";

const CartProduct = ({ product }: any) => {
  const { setCartProducts, cartProducts }: any = useContext(cart);

  const removeProduct = (id: number | string) => {
    setCartProducts(cartProducts?.filter((item: any) => item.id !== id));
  };

  return (
    <>
      <div className="flex w-full rounded-sm bg-gray-50 p-4 gap-4 h-[300px] shadow">
        <div className="flex-1 w-full h-full">
          <img
            src={product?.images[0]}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <span className="font-semibold">{product?.title}</span>
            <span className="text-gray-500">Miscellaneous</span>
            <span className="text-xl font-semibold mt-4">
              $ {product?.price}
            </span>
            <button
              onClick={() => removeProduct(product?.id)}
              className="px-2 py-2 sm:px-4 sm:py-4 sm:mt-6 text-xs font-semibold rounded-full bg-black text-white hover:bg-gray-600 w-full max-w-xs"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
