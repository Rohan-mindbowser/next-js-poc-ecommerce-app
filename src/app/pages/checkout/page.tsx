"use client";
import CartProduct from "@/app/components/CartProduct";
import { cart } from "@/app/context/ProductContext";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const { cartProducts }: any = useContext(cart);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(
      cartProducts.reduce(
        (acc: any, curr: any) => acc + curr.price * curr.quantity,
        0
      )
    );
  }, [cartProducts]);

  return (
    <div className="w-full pt-16 flex justify-center">
      <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full p-2 lg:p-8">
        <div className="w-full lg:w-2/3">
          <div className="max-h-[70vh] overflow-y-auto">
            {cartProducts?.map((product: any, id: any) => {
              return (
                <div key={id}>
                  <CartProduct product={product} />
                </div>
              );
            })}
          </div>
          <div>
            {cartProducts?.length === 0 && (
              <div className="text-2xl font-semibold w-full h-full text-center">
                Products not added in the cart
              </div>
            )}
          </div>
        </div>
        {cartProducts?.length > 1 && (
          <div className="w-full lg:w-1/2 ">
            <div className="w-full rounded-sm bg-gray-50 p-4 gap-4 shadow max-w-[600px]">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Subtotal</span>
                <span className="text-xl font-semibold">$ {subTotal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="">Discount</span>
                <span className="">$ 0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="">Coupon</span>
                <button>Apply coupon</button>
              </div>
              <div className="flex justify-between items-center">
                <span className="">Shipping (Standard)</span>
                <span className="text-green-500">FREE</span>
              </div>
            </div>

            <div className="">
              <button className="w-full mt-4 text-white font-semibold text-xl py-1 hover:bg-blue-600 bg-blue-400 rounded-sm shadow max-w-[600px]">
                Place order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
