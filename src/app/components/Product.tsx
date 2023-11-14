import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Product = ({ product }: any) => {
  return (
    <div className="w-full flex flex-col bg-gray-900 p-2 rounded-md">
      <img src={product?.images[0]}></img>
      <span className="text-xl">{product?.title}</span>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-2xl font-semibold">
            Price: $ {product?.price}
          </span>
        </div>
        <div>
          <button className="text-2xl font-semibold flex items-center gap-2 bg-white text-black px-2 rounded-sm">
            <FaCartShopping />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
