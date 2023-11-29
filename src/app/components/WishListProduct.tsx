"use client";
import React, { useContext } from "react";
import { cart } from "../context/ProductContext";

const WishListProduct = ({ product }: any) => {
  const { wishList, setWishList, cartProducts, setCartProducts }: any =
    useContext(cart);

  const removeProduct = (id: number | string) => {
    setWishList(wishList?.filter((item: any) => item.id !== id));
  };

  const moveToCart = (product: any) => {
    const productIdx = cartProducts?.findIndex(
      (item: any) => item.id === product?.id
    );
    if (productIdx === -1) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    } else {
      cartProducts[productIdx].quantity++;
      setCartProducts([...cartProducts]);
    }

    removeProduct(product?.id);
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
            <div className="flex items-center justify-center sm:mt-6 gap-4 flex-wrap md:flex-nowrap">
              <button
                onClick={() => moveToCart(product)}
                className="px-2 py-2 sm:px-4 sm:py-4 text-xs font-semibold rounded-full bg-black text-white hover:bg-gray-600 w-full max-w-xs"
              >
                Move to cart
              </button>
              <button
                onClick={() => removeProduct(product?.id)}
                className="px-2 py-2 sm:px-4 sm:py-4 text-xs font-semibold rounded-full border-2 border-gray-300  text-black hover:border-black w-full max-w-xs"
              >
                <span className="flex justify-center items-center gap-1">
                  Remove
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListProduct;
