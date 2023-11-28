"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { cart } from "../context/ProductContext";
import { MdCancel } from "react-icons/md";
import CartProduct from "./CartProduct";

const navLinks: { label: string; value: string }[] = [
  { label: "New & Featured", value: "/pages/latestproducts" },
];

const Navbar = () => {
  const { cartProducts, wishList }: any = useContext(cart);
  const [showCartSlider, setShowCartSlider] = useState(false);

  const showSlider = () => {
    setShowCartSlider((show) => !show);
  };

  return (
    <>
      <div className="p-2 sm:px-8 py-4 flex justify-between items-center fixed bg-white w-full shadow z-[999]">
        <Link href="/" className="font-bold sm:text-xl">
          E-shop
        </Link>
        <div className="hidden xl:block">
          <div className="flex gap-4 md:gap-6 text-md">
            {navLinks?.map((link, id) => {
              return (
                <Link
                  href={link?.value}
                  className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  key={id}
                >
                  {link?.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-[30px] flex gap-4">
          <div className="relative cursor-pointer" onClick={() => showSlider()}>
            <FiHeart />
            <div className="bg-red-500 absolute top-0 right-0 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              {cartProducts?.length}
            </div>
          </div>

          <div className="relative">
            <AiOutlineShopping />
            <div className="bg-red-500 absolute top-0 right-0 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              {wishList?.length}
            </div>
          </div>
        </div>

        {showCartSlider && (
          <div className="absolute left-0 top-0 w-full lg:w-1/2 bg-white h-screen shadow-sm p-2 sm:p-6 overflow-y-auto z-[99999]">
            <div className="text-4xl flex justify-end cursor-pointer">
              <MdCancel onClick={() => showSlider()} />
            </div>
            <div className="my-4">
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
        )}
      </div>
    </>
  );
};

export default Navbar;
