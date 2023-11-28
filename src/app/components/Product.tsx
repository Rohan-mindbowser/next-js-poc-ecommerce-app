"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { cart } from "../context/ProductContext";

const Product = ({ product }: any) => {
  const { cartProducts, setCartProducts }: any = useContext(cart);
  const addToCart = (product: any) => {
    setCartProducts([...cartProducts, product]);
  };
  return (
    <div className="w-full flex flex-col bg-gray-50 p-2 rounded-md shadow">
      <Link href={`/pages/product/${product?.id}`}>
        <img src={product?.images[0]} className="cursor-pointer"></img>
      </Link>
      <span className="text-xl">{product?.title}</span>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-2xl font-semibold">
            Price: $ {product?.price}
          </span>
        </div>
        <div>
          <button
            onClick={() => addToCart(product)}
            className="text-2xl font-semibold flex items-center gap-2 bg-white text-black px-2 rounded-sm"
          >
            <FaCartShopping />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
