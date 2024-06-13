"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import Review from "./Review";
import ProductDetailHeadding from "./ProductDetailHeadding";
import LoadingSpinner from "../LoadingSpinner";

function ProductDetail({ params }) {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartLodder, setCartLodder] = useState(false);
  const router = useRouter();
  // access token
  const token = Cookies.get("clientToken");
  const _id = params.detail[0];
  // fatch product detail
  useEffect(() => {
    try {
      const fatchData = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/product-detail/${_id}`
        );
        setProduct(res.data.product);
        setSimilarProduct(res.data.similarProduct)
      };
      fatchData();
    } catch (err) {
      console.log("data fatching server error", err);
    }
  }, []);
  // minus count
  const minusCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  // plus count
  const plusCounter = () => {
    setCount(count + 1);
  };
  // handel buy button
  const handelBuyNow = async () => {
    if (!token) {
      toast.error("Login your account");
      setTimeout(() => {
        router.push("/login");
      }, 500);
    } else {
      router.push(`/buy/${product?._id}.${count}`);
    }
  };
  // handel add-to-cart button
  const handelAddToCart = () => {
    setCartLodder(true);
    const existingCart = JSON.parse(localStorage.getItem("cart"));
    if (existingCart) {
      const newCart = {
        product: product?._id,
        quantity: count,
      };
      existingCart.map((i, index) => {
        if (i.product == product._id) {
          existingCart.splice(index, 1);
          // toast.success("Allready had added ");
        }
      });
      existingCart.push(newCart);
      const totalcart = JSON.stringify(existingCart);
      localStorage.setItem("cart", totalcart);
      toast.success("Product Successfully added");
      setTimeout(() => {
        location.reload();
      }, 500);
    } else {
      const newCart = JSON.stringify([
        {
          product: product?._id,
          quantity: count,
        },
      ]);
      localStorage.setItem("cart", newCart);
      toast.success("Product Successfully added");
      setTimeout(() => {
        location.reload();
      }, 500);
    }
    setCartLodder(false);
  };
  // insart date
const insartDate = {
  date:new Date(product?.insartDate).getDate(),
  month:new Date(product?.insartDate).getMonth() + 1,
  year:new Date(product?.insartDate).getFullYear(),
}
// handle share

const handelShare =()=>{
  navigator.clipboard.writeText(location.href)
  toast.success('Coppy to clipboard')
}
// handle love react

const handelLoveReact = async()=>{
  try {
    if(!token){
      return toast.error('Plase Login')
    }
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/product/update-react`,{productId:product._id},{
      headers : {
        Authorization : `barer ${token}`
      }
    })
    console.log(res.data);
  } catch (error) {
    console.log('sever error');
  }
  console.log(product?.react);
}
  return (
    <div>
      {/* product info */}
      <div className="max-w-[450px] md:max-w-[650px] lg:max-w-screen-lg mx-auto my-10 xl:max-w-screen-xl px-2 xl:px-14">
        {/*--------product image & price & delivery */}
        <div className="flex flex-col lg:flex-row items-center min-h-[390px] gap-x-5 gap-y-10 w-full  border-[4px] rounded-md p-2 shadow-lg shadow-gray-400 ">
          {/*---------left side product image*/}
          <div className="w-full lg:w-[30%] relative inline-flex border rounded-md shadow-lg">
            <Link
              href={product?.imageUrl || "lifer-bd.vercel.app"}
              target="_blank"
            >
              <Image
                src={product.imageUrl}
                height={1000}
                width={1000}
                alt="product image"
                className="w-full lg:w-full md:w-[80%] mx-auto   rounded-md"
              />
            </Link>
          </div>
          {/*--------center product detaisl */}
          <div className="lg:flex-1 mx-0 bg-white">
            
            {/* title */}
            <p className="text-[15px] capitalize my-2">{product.title}</p>
            <hr />
            {/* insart date */}
            <div className="mt-2">
              <span>Date of add : </span>
              <span className=" bg-gray-200 border border-gray-400 text-gray-500 px-3 py-1 text-sm rounded">{`${insartDate.date}/${insartDate.month}/${insartDate.year}`}</span>
            </div>
            {/* brnad */}
            <p className="capitalize text-md mt-3">
              Brand : {product?.brand || "no brand"}
            </p>
            {/* like && share */}
            <div className=" flex gap-2">
              <span className="items-center flex">
                <span className="text-lg me-2">{product?.react}</span>
                <button onClick={handelLoveReact}><IoMdHeartEmpty className="text-4xl cursor-pointer" /></button>
                
              </span>
              <button onClick={handelShare} className="text-3xl cursor-pointer">
                <IoMdShare />
              </button>
            </div>
            {/* price and off */}
            <div className=" flex gap-2 mt-5">
              <div className="flex items-center justify-center">
                <span className="text-3xl ">
                  <TbCurrencyTaka />
                </span>
                <span className="text-xl">{product.price}</span>
              </div>
              <del className="text-lg text-gray-600 mt-2">
                {product.sellPrice}
              </del>
              {/* off */}
              <div className="relative">
                <div className="font-semibold bg-yellow-400 absolute top-0 px-2 py-1 rounded-md">
                  <span className="me-2">{product.percentage}%</span>
                  <span className="text-[12px]">off</span>
                </div>
              </div>
            </div>
            {/* free delivery */}
            <div className="ms-2">
              {product.deliveryFree && (
                <Image src={freeDelivery} alt="free delivery" />
              )}
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
              <span className="text-gray-500 capitalize">
                {product.stock} item left
              </span>
            </div>
            {/* button */}
            <div className="flex gap-5 ">
              {/* add-to cart button */}
              {cartLodder ? (
                <button
                  className={
                    "bg-orange-500 hover:bg-orange-600 text-white capitalize  h-10 w-1/2 text-lg"
                  }
                  disabled
                >
                  <LoadingSpinner />
                </button>
              ) : (
                <button
                  className={
                    "bg-orange-500 hover:bg-orange-600 text-white capitalize  h-10 w-1/2 text-lg"
                  }
                  onClick={handelAddToCart}
                >
                  add to cart
                </button>
              )}

              {/* buy-now button */}
              <button
                onClick={handelBuyNow}
                className={
                  "bg-sky-500 hover:bg-sky-600 text-white capitalize h-10  w-1/2 text-lg"
                }
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
                    {product?.deliveryCost?.insideDhaka || 39}
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
                    {product?.deliveryCost?.outsideDhaka || 79}
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
                <p className={`${product?.warranty != '0' ?'text-green-500' : 'text-black' }`} >{product?.warranty != '0' ?  product?.warranty + ' warranty' : 'no warranty available'}</p>
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
          <p>{product.detail}</p>
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
          {
            similarProduct.length > 0 && ( similarProduct.map(i=>(
              <ProductCard
                key={i._id}
                deliveryFree={i.deliveryFree}
                title={i.title}
                price={i.price}
                sellPrice={i.sellPrice}
                imageUrl={i.imageUrl}
                percentage={i.percentage}
                _id={i._id}
              />
            ))
              
            )
          }
          
        </ProductContainer>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetail;
