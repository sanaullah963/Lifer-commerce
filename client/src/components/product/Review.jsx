import React from "react";
import { FaUser } from "react-icons/fa";
function Review() {
  return (
    <div>
      <h1 className="font-semibold">Review</h1>
      <div className="w-[60%] text-start">
        <hr className="bg-gray-400 h-[2px] mb-8" />
      </div>
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
              <p className=" w-full font-[500] text-primary capitalize">user name</p>
              <p className="text-gray-400 w-full text-sm mt-[-3px]">
                12.5.2024
              </p>
            </div>
          </div>
          <p className="text-[14px] leading-4 text-gray-600 px-0 sm:ps-12 mt-2">
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
              <p className=" w-full font-[500] text-primary capitalize">user name</p>
              <p className="text-gray-400 w-full text-sm mt-[-3px]">
                12.5.2024
              </p>
            </div>
          </div>
          <p className="text-[14px] leading-4 text-gray-600 px-0 sm:ps-12 mt-2">
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
              <p className=" w-full font-[500] text-primary capitalize">user name</p>
              <p className="text-gray-400 w-full text-sm mt-[-3px]">
                12.5.2024
              </p>
            </div>
          </div>
          <p className="text-[14px] leading-4 text-gray-600 px-0 sm:ps-12 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            neque?
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Review;
