import Image from "next/image";
import Link from "next/link";
import React from "react";

const Trending = ({ products }: any) => {
  return (
    <div className="my-12">
      <h1 className="text-xl mb-4">Trending</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex-1">
          <Image
            src={products[0]?.images[0]}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home image"
          />
          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-sm">Dropping on App:31 August</p>
            <p className="mb-6 text-xl">Vaporfly Next%3 EK</p>
            <Link href={`/pages/product/${products[0]?.id}`}>
              <button className="px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-600">
                Get it first
              </button>
            </Link>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            src={products[1]?.images[0]}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt="home image"
          />
          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-sm">Dropping on App:31 August</p>
            <p className="mb-6 text-xl">Vaporfly Next%3 EK</p>
            <Link href={`/pages/product/${products[1]?.id}`}>
              <button className="px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-600">
                Get it first
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
