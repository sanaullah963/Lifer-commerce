"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import product1 from "@/image/proudct/p6.png";
import freeDelivery from "@/image/free_delivery.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeartSharp } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { HiOutlineCash } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { FaShield } from "react-icons/fa6";
import Link from "next/link";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import Review from "./Review";
import ProductDetailHeadding from "./ProductDetailHeadding";

function ProductDetail() {
  const [count, setCount] = useState(1);
  const minusCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  const plusCounter = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* product info */}
      <div className="max-w-[450px] md:max-w-[650px] lg:max-w-screen-lg mx-auto my-10 xl:max-w-screen-xl px-2 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center min-h-[390px] gap-x-5 gap-y-10 w-full  border-[4px] rounded-md p-2 shadow-lg shadow-gray-400 ">
          {/*---------left side product image*/}
          <div className="w-full lg:w-[30%] relative inline-flex border rounded-md shadow-lg">
            <Image
              src={product1}
              height={1000}
              width={1000}
              alt="product image"
              className="w-full lg:w-full md:w-[80%] mx-auto   rounded-md"
            />
          </div>
          {/*--------center product detaisl */}
          <div className="lg:flex-1 mx-0 bg-white">
            {/* title */}
            <p className="text-[15px] capitalize my-2">
              Vintage T9 Hair Cutting Machine Hair Trimmer Recharge Professional
              Cordless Hair Trimmer
            </p>
            <hr />
            {/* brnad */}
            <p className="capitalize text-md mt-3">brand : no brand</p>
            {/* like && share */}
            <div className=" flex gap-2">
              <span className="items-center flex">
                <span className="text-lg me-2">125</span>
                <IoMdHeartEmpty className="text-4xl cursor-pointer" />
              </span>
              <span className="text-3xl cursor-pointer">
                <IoMdShare />
              </span>
            </div>
            {/* price and off */}
            <div className=" flex gap-2 mt-5">
              <div className="flex items-center justify-center">
                <span className="text-3xl ">
                  <TbCurrencyTaka />
                </span>
                <span className="text-xl">250</span>
              </div>
              <del className="text-lg text-gray-600 mt-2">352</del>
              {/* off */}
              <div className="relative">
                <div className="font-semibold bg-yellow-400 absolute top-0 px-2 py-1 rounded-md">
                  <span className="me-2">30%</span>
                  <span className="text-[12px]">off</span>
                </div>
              </div>
            </div>
            <div className="ms-2">
              <Image src={freeDelivery} alt="free delivery" />
            </div>
            <hr />
            {/* quantity counter */}

            <div className="my-5 flex items-center gap-2 sm:gap-4">
              <span className="text-gray-500 capitalize me-2">Quantity</span>
              <button
                onClick={minusCount}
                className={`${
                  count > 1
                    ? "bg-gray-300 border-gray-500  text-black"
                    : "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed"
                } text-lg p-[5px] rounded-md border-2`}
              >
                <FaMinus />
              </button>
              <span className="text-lg">{count}</span>
              <button
                onClick={plusCounter}
                className={` bg-gray-300 border-gray-500  text-black
                text-lg p-[5px] rounded-md border-2`}
              >
                <FaPlus />
              </button>
              <span className="text-gray-500 capitalize">22 item left</span>
            </div>
            {/* button */}
            <div className="flex gap-5 ">
              {/* add-to cart button */}
              <button
                className={`${
                  count <= 0
                    ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600 text-white"
                } capitalize  h-10 w-1/2 text-lg`}
              >
                add to cart
              </button>
              {/* buy-now button */}
              <button
                className={`${
                  count <= 0
                    ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                    : "bg-sky-500 hover:bg-sky-600 text-white"
                } capitalize h-10  w-1/2 text-lg`}
              >
                buy now
              </button>
            </div>
          </div>
          {/*--------right side delivery details */}
          <div className="w-full lg:w-[25%] border border-gray-200 rounded-lg">
            <p className="capitalize bg-gray-200 rounded-t-lg ps-2 py-2 text-xl font-[500] mb-2">
              delivery
            </p>
            {/* delivery details */}
            <div className="px-2">
              {/* indise dhaka */}
              <div>
                <div className="flex text-lg capitalize items-center gap-3 font-[500]">
                  <TbTruckDelivery className="text-xl" />
                  <p>inside dhaka :</p>
                  <p className="text-end flex items-center text-green-600">
                    <TbCurrencyTaka className="text-xl" />
                    39
                  </p>
                </div>
                <p className="text-sm text-start ps-5 text-gray-400 mb-5">
                  29 Mar - 02 Apr (01 - 05 Days)
                </p>
              </div>
              {/* outsied dhaka */}
              <div>
                <div className="flex text-lg capitalize items-center gap-3 font-[500]">
                  <TbTruckDelivery className="text-xl" />
                  <p>outside dhaka :</p>
                  <p className="text-end flex items-center text-green-600">
                    <TbCurrencyTaka className="text-xl" />
                    89
                  </p>
                </div>
                <p className="text-sm text-start ps-5 text-gray-400 mb-5">
                  31 Mar - 04 Apr (03 - 07 Days)
                </p>
              </div>
              {/* cash on delivery */}
              <div>
                <div className="flex text-lg capitalize items-center gap-3 font-[500]">
                  <HiOutlineCash className="text-xl" />
                  <p>Cash on Delivery :</p>
                </div>
                <p className=" capitalize ps-8 text-green-600 mb-5">
                  Available
                </p>
              </div>
              {/* return time */}
              <div>
                <div className="flex text-lg capitalize items-center gap-3 font-[500]">
                  <TbTruckReturn className="text-xl" />
                  <p>return :</p>
                  <p className="text-end flex items-center text-green-600">
                    3 days
                  </p>
                </div>
                <Link
                  href={"/"}
                  className=" ps-7 text-green-800 mb-5 block underline"
                >
                  View return policy
                </Link>
              </div>
              {/* warranty time */}
              <div className="flex text-lg capitalize items-center gap-3 font-[500] mb-5">
                <FaShield className="text-xl" />
                <p>no warranty available</p>
                {/* <p className="text-end flex items-center text-green-600">
                  not 
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/*--------product description */}
        <div className="border-[4px] rounded-md p-2 shadow-lg shadow-gray-400 my-10 ps-4">
          <ProductDetailHeadding headding={"details"} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            voluptatum doloremque hic accusamus laborum sunt nemo eligendi
            veritatis reprehenderit voluptate?
          </p>
        </div>
        {/* ---------user review */}
        <div className="border-[4px] rounded-md p-2 shadow-lg shadow-gray-400 my-10 ps-4 flex flex-col gap-y-3">
          <Review />
        </div>
      </div>
      {/*----------similar product section */}
      <div className="px-3 max-w-md sm:max-w-screen-xl mx-auto sm:w-full">
        <ProductContainer
          className={
            "border-[4px] rounded-md shadow-lg shadow-gray-400 my-10 px-1 sm:px-3 py-3"
          }
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductContainer>
      </div>
    </div>
  );
}

export default ProductDetail;
