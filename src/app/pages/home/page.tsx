import ProductSlider from "@/app/components/ProductSlider";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="p-2 sm:px-8">
      <Image
        src="https://static.nike.com/a/images/f_auto/dpr_1.1,cs_srgb/w_1569,c_limit/d8ae4bab-e246-45d6-9e1a-7537fe70f5e7/nike-just-do-it.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
        alt="home image"
      />
      <ProductSlider />
    </div>
  );
};

export default page;
