import React from "react";
import { FaUser } from "react-icons/fa";
import ProductDetailHeadding from "./ProductDetailHeadding";
function Review() {
  return (
    <div>
      <ProductDetailHeadding headding={"Review"} />
      {/* user comment */}
      <div className="">
        {/* singel comment */}
        <div className="mb-5">
          <div className="flex items-center gap-x-2">
            {/* profile icom */}
            <span className="h-10 w-10 bg-gray-200 border border-gray-600 rounded-full flex items-center justify-center">
              <FaUser className="text-2xl" />
            </span>
            {/* name & date */}
            <div className="">
              <p className=" w-full font-[500] text-green-600 capitalize">
                user name
              </p>
              <p className="text-gray-400 w-full text-sm mt-[-3px]">
                12.5.2024
              </p>
            </div>
          </div>
          <p className="text-[12px] md:text-[15px] leading-4 text-gray-600 px-0 sm:ps-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            neque?
          </p>
        </div>
        {/* singel comment */}
        <div className="mb-5">
          <div className="flex items-center gap-x-2">
            {/* profile icom */}
            <span className="h-10 w-10 bg-gray-200 border border-gray-600 rounded-full flex items-center justify-center">
              <FaUser className="text-2xl" />
            </span>
            {/* name & date */}
            <div className="">
              <p className=" w-full font-[500] text-green-600 capitalize">
                user name
              </p>
              <p className="text-gray-400 w-full text-sm mt-[-3px]">
                12.5.2024
              </p>
            </div>
          </div>
          <p className="text-[12px] md:text-[15px] leading-4 text-gray-600 px-0 sm:ps-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            neque?
          </p>
        </div>
        {/* singel comment */}
        <div className="mb-5">
          <div className="flex items-center gap-x-2">
            {/* profile icom */}
            <span className="h-10 w-10 bg-gray-200 border border-gray-600 rounded-full flex items-center justify-center">
              <FaUser className="text-2xl" />
            </span>
            {/* name & date */}
            <div className="">
              <p className=" w-full font-[500] text-green-600 capitalize">
                user name
              </p>
              <p className="text-gray-400 w-full text-sm mt-[-3px]">
                12.5.2024
              </p>
            </div>
          </div>
          <p className="text-[12px] md:text-[15px] leading-4 text-gray-600 px-0 sm:ps-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            neque?
          </p>
        </div>

        {/* input */}
        <div className="max-w-md ">
          <textarea
            placeholder="Enter Your Review Here...."
            className="ms-[-4px] px-2 pt-1  w-full border-2 border-green-400 rounded text-sm  h-28"
          ></textarea>
          <div className="w-full text-end">
            <button className="px-5 py-2 bg-green-400 rounded">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
