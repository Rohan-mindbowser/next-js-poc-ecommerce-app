"use client";
import React from "react";
import { Oval } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Oval
        height={80}
        width={80}
        color="#000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default loading;
