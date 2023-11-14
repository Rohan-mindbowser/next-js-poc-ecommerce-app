import Link from "next/link";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";

const navLinks: string[] = ["New & Featured", "Men", "Women", "Kids", "SNKRS"];

const Navbar = () => {
  return (
    <div className="p-2 sm:px-8 py-4 flex justify-between items-center fixed bg-white w-full shadow">
      <Link href="/" className="font-bold sm:text-xl">
        E-shop
      </Link>
      <div className="hidden xl:block">
        <div className="flex gap-4 md:gap-6 text-md">
          {navLinks?.map((link) => {
            return (
              <Link
                href="#"
                className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="text-[30px] flex gap-4">
        <div className="relative">
          <FiHeart />
          <div className="bg-red-500 absolute top-0 right-0 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            9+
          </div>
        </div>

        <div className="relative">
          <AiOutlineShopping />
          <div className="bg-red-500 absolute top-0 right-0 rounded-full w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            9+
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
