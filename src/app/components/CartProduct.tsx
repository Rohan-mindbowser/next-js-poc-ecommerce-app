"use client";
import React, { useContext } from "react";
import { cart } from "../context/ProductContext";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";

const CartProduct = ({ product }: any) => {
  const { setCartProducts, cartProducts }: any = useContext(cart);

  const removeProduct = (id: number | string) => {
    setCartProducts(cartProducts?.filter((item: any) => item.id !== id));
    toast.info("Product removed from cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const increaseQty = (id: number | string) => {
    const productIdx = cartProducts?.findIndex((item: any) => item.id === id);
    if (productIdx !== -1) {
      cartProducts[productIdx].quantity++;
      setCartProducts([...cartProducts]);
    }
  };

  const decreaseQty = (id: number | string) => {
    const productIdx = cartProducts?.findIndex((item: any) => item.id === id);
    if (productIdx !== -1) {
      if (cartProducts[productIdx].quantity > 1) {
        cartProducts[productIdx].quantity--;
        setCartProducts([...cartProducts]);
      } else {
        removeProduct(id);
      }
    }
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
              $ {product?.price * product?.quantity}
            </span>
            <div className="flex items-center gap-2">
              Quantity:
              <FaMinus
                className="cursor-pointer"
                onClick={() => decreaseQty(product?.id)}
              />
              {product?.quantity}
              <FaPlus
                className="cursor-pointer"
                onClick={() => increaseQty(product?.id)}
              />
            </div>
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
