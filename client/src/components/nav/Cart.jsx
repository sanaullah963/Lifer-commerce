"use client";
import React, { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import product from "@/image/proudct/p4.jpg";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";
import ProductDetailHeadding from "../product/ProductDetailHeadding";
import { useRouter } from "next/navigation";

function Cart() {
  const [count, setCount] = useState(1);
  const router = useRouter()
  // munus count
  const minusCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  // plus count
  const plusCounter = () => {
    setCount(count + 1);
  };
  // test element
  let title =
    "Joypuri Ari Work Salwar Kameez for Women - JSS 12 (Multicolor)Joypuri Ari Work Salwar Kameez for Women - JSS 12 Kameez for";
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="px-2 sm:px-5 bg-[#dff9fb] py-10">
      <div className="border-[4px] max-w-[820px] mx-auto rounded-md p-1 sm:p-2 md:py-5 shadow-lg shadow-gray-400 bg-white">
        <ProductDetailHeadding headding={"10 product"} />
        {/* singel row */}
        {arr.map((i) => (
          <div key={i}>
            <div className="flex gap-0 sm:gap-2 my-1 ">
              {/* checkbox */}
              <div className="my-auto">
                <input
                  type="checkbox"
                  className=" w-[20px] h-[20px]"
                  onChange={(e) => console.log(e.target.checked)}
                />
              </div>
              {/*product image */}
              <div className="w-[130px] md:w-[100px]">
                <Image
                  src={product}
                  alt="product"
                  height={400}
                  width={400}
                  className="w-[100%] rounded-xl"
                />
              </div>
              {/* title and outher info */}
              <div className="">
                {/* title */}
                <div className="leading-[11px]">
                  <Link
                    href={"/product/cart"}
                    className="hover:underline text-[12px] sm:text-lg"
                  >
                    {title.length > 66 ? title.slice(0, 66) + "..." : title}
                  </Link>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-0 sm:gap-3">
                  {/* counter and price */}
                  <div className="flex items-center justify-between me-5 flex-1">
                    {/* counter */}
                    <div className=" flex items-center gap-1 sm:gap-2">
                      <button
                        onClick={minusCount}
                        className={`${
                          count > 1
                            ? "bg-gray-300 border-gray-500  text-black"
                            : "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed"
                        } text-sm sm:text-lg p-[2px] sm:p-[5px] rounded-md border`}
                      >
                        <FaMinus />
                      </button>
                      <span className="text-lg">{count}</span>
                      <button
                        onClick={()=>setCount(count + 1)}
                        className={` bg-gray-300 border-gray-500  text-black
                  text-sm sm:text-lg p-[2px] sm:p-[5px] rounded-md border`}
                      >
                        <FaPlus />
                      </button>
                      <span className="text-gray-500 capitalize">22 stock</span>
                    </div>
                    {/* price */}
                    <div className="flex items-center justify-center text-green-600">
                      <TbCurrencyTaka className="text-2xl" />
                      142
                    </div>
                  </div>
                  {/* order button */}
                  <div className="w-full sm:w-1/5 flex flex-row sm:flex-col sm:gap-y-1 gap-x-1">
                    <button onClick={()=>router.push('/buy')} className="bg-green-600 hover:bg-green-700 w-full py-1 capitalize text-white rounded-md text-sm sm:text-md">
                      buy now
                    </button>
                    <button className="w-full text-[18px] py-1  rounded-md text-red-700 bg-red-200 hover:bg-red-300">
                      <MdDeleteOutline className="mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="h-[1px] sm:h-[2px] bg-gray-400 my-2" />
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Cart;
