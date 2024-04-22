"use client";
import Container from "../Container";

import Image from "next/image";
import Link from "next/link";
import imm from "@/image/proudct/p4.jpg";
import BorderContainer from "../BorderContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
async function Odder({ params }) {
  const token = Cookies.get("clientToken");
  // fatch data
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/buy-product`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              ids: params.product_id,
            },
            withCredentials:true,
          }
        );
        console.log(res);
      } catch (err) {
        console.log("server error", err);
      }
    };
    fatchData();
  }, []);
  const title =
    "Vintage T9 Hair Cutting Machine Hair Trimmer Recharge Professional Cordless Hair Trimmer";
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      {/* first box */}
      <div className="">
        {/* address */}
        <BorderContainer className="  ">
          <div className="flex w-full justify-between">
            {/* left side */}
            <div className=" text-sm sm:text-lg flex-1 ">
              {/* name */}
              <div>
                <span className="font-[500]">Name&nbsp;:</span>
                <span className="text-gray-600">&nbsp;intisar sanaullah</span>
              </div>
              {/* number */}
              <div>
                <span className="font-[500]">Number&nbsp;:</span>
                <span className="text-gray-600">&nbsp;01245685475</span>
              </div>
              {/* address */}
              <div className="leading-4">
                <span className="font-[500]">Address&nbsp;:</span>
                <span className="text-gray-600">
                  &nbsp;barishal,barishal sador,kawniya branch road,munshi vila
                </span>
              </div>
            </div>
            {/* edit button */}
            <div className=" relative">
              <Link
                href={"/profile"}
                className="underline text-blue-600 absolute right-0 top-0  px-3 "
              >
                Edit
              </Link>
            </div>
          </div>
        </BorderContainer>
        {/* product & price */}
        <BorderContainer className=" flex flex-col my-0 md:flex-row gap-1">
          {/* left-side */}
          <div className="md:w-2/3 w-full">
            {/* singel product */}
            {arr.map((i, index) => (
              <div
                key={index}
                className=" flex rounded-md bg-gray-100 gap-x-2 p-1 my-2"
              >
                {/* image  */}
                <div className="w-[70px] rounded">
                  <Image
                    src={imm}
                    alt="product-Image"
                    height={400}
                    width={400}
                    className="w-full rounded"
                  />
                </div>
                {/* price */}
                <div className="flex-1 w-full">
                  <p>{title}</p>
                  <p className="text-primary text-end pe-1 md:pe-3">20*2=40</p>
                </div>
              </div>
            ))}
          </div>
          {/* ride-side */}
          <div className=" bg-white shadow-lg rounded-md p-5 md:w-1/3 w-full mt-5 md:mt-0">
            {/* order header */}

            <div className="flex justify-between border-y capitalize">
              <span>product quantity</span> <span>120</span>
            </div>
            <div className="flex justify-between border-y capitalize">
              <span>Total price</span> <span>120</span>
            </div>
            <div className="flex justify-between border-y capitalize">
              <span>delivary fee</span> <span>120</span>
            </div>
            <div className="flex justify-between border-y capitalize">
              <span>discount</span> <span>120</span>
            </div>
            <div className="flex justify-between border-y capitalize">
              <span>total pay</span> <span>120</span>
            </div>

            {/* place order button */}
            <button
              className="text-white bg-primary w-full h-10 mt-3 rounded-md"
              onClick={"placeOrder"}
            >
              Order Now
            </button>
          </div>
        </BorderContainer>
      </div>
    </main>
  );
}

export default Odder;
