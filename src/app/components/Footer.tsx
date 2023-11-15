import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black text-white p-2 py-4 sm:px-8 sm:py-8 md:py-16 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 gap-y-6 sm:gap-y-0">
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-[14px]">
            FIND A STORE
          </Link>
          <Link href="#" className="font-bold text-[14px]">
            BECOME A MEMBER
          </Link>
          <Link href="#" className="font-bold text-[14px]">
            Send Us Feedback
          </Link>
          <Link href="#" className="font-bold text-[14px]">
            STUDENT DISCOUNTS
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link href="#" className="font-bold text-[14px]">
            GET HELP
          </Link>
          <Link
            href="#"
            className="font-semibold text-[14px] text-gray-500 hover:text-white"
          >
            Order Status
          </Link>
          <Link
            href="#"
            className="font-semibold text-[14px] text-gray-500 hover:text-white"
          >
            Delivery
          </Link>
          <Link
            href="#"
            className="font-semibold text-[14px] text-gray-500 hover:text-white"
          >
            Returns
          </Link>
          <Link
            href="#"
            className="font-semibold text-[14px] text-gray-500 hover:text-white"
          >
            Payment Options
          </Link>
          <Link
            href="#"
            className="font-semibold text-[14px] text-gray-500 hover:text-white"
          >
            Contact Us On Nike.com Inquiries
          </Link>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col gap-4">
            <Link href="#" className="font-bold text-[14px]">
              ABOUT NIKE
            </Link>
            <Link
              href="#"
              className="font-semibold text-[14px] text-gray-500 hover:text-white"
            >
              News
            </Link>
            <Link
              href="#"
              className="font-semibold text-[14px] text-gray-500 hover:text-white"
            >
              Careers
            </Link>
            <Link
              href="#"
              className="font-semibold text-[14px] text-gray-500 hover:text-white"
            >
              Investors
            </Link>
            <Link
              href="#"
              className="font-semibold text-[14px] text-gray-500 hover:text-white"
            >
              Sustainability
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="rounded-full bg-gray-600 h-8 w-12 flex justify-center items-center">
            <Link href="#">
              <FaFacebookF className="text-xl text-black" />
            </Link>
          </div>
          <div className="rounded-full bg-gray-600 h-8 w-12 flex justify-center items-center">
            <Link href="#">
              <BsTwitter className="text-xl text-black" />
            </Link>
          </div>{" "}
          <div className="rounded-full bg-gray-600 h-8 w-12 flex justify-center items-center">
            <Link href="#">
              <AiFillInstagram className="text-xl text-black" />
            </Link>
          </div>{" "}
          <div className="rounded-full bg-gray-600 h-8 w-12 flex justify-center items-center">
            <Link href="#">
              <AiFillYoutube className="text-xl text-black" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
