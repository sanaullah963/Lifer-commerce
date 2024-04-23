"use client";
import React, { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import product from "@/image/proudct/p4.jpg";
import Image from "next/image";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Headding from "../Headding";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";

function Cart() {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);
  const router = useRouter();
  // munus count
  const minusCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  // plus count
  const plusCounter = () => {
    setCount(count + 1);
  };
  // get cart from  localstoreg
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // fatch data
    const fatchData = async () => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/product/cart-product`,
        cart
      );
      setCart(res.data);
    };
    fatchData();
  }, []);
  console.log(cart);

// handel remove button
const handelRemove = (id)=>{
  const existingCart = JSON.parse(localStorage.getItem("cart"))
  console.log(existingCart);
  existingCart.map((i,index)=>{
    if(i.product == id){
      existingCart.splice(index,1)
    }
  })
  const total = JSON.stringify(existingCart)
  localStorage.setItem('cart',total)
  location.reload()
}
  return (
    <div className="px-2 sm:px-5 bg-[#dff9fb] py-10">
      <div className="border-[4px] max-w-[820px] mx-auto rounded-md p-1 sm:p-2 md:py-5 shadow-lg shadow-gray-400 bg-white">
        <Headding Headding={`${cart?.length || '... '}  product in your cart`} />
        {/* singel row */}
        {cart.length <= 0 ? (
          <LoadingSpinner />
        ) : (
          cart.map(({productList,quantity}) => (
            <div key={productList._id}>
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
                    src={productList.imageUrl}
                    alt="product"
                    height={400}
                    width={400}
                    className="w-[100%] rounded-xl"
                  />
                </div>
                {/* title and outher info */}
                <div className="w-full">
                  {/* title */}
                  <div className="leading-[11px]">
                    <Link
                      href={`/product/${productList._id}`}
                      className="hover:underline text-[12px] sm:text-lg"
                    >
                      {productList?.title.length > 66 ? productList?.title.slice(0, 66) + "..." : productList?.title}
                    </Link>
                  </div>
                    {/* counter & price & button */}
                  <div className="flex flex-col sm:flex-row justify-between gap-0 sm:gap-3">
                    <div className="flex items-center justify-between me-0 sm:me-5 flex-1">
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
                        <span className="text-[12px] sm:text-lg">{count} </span>
                        <button
                          onClick={() => setCount(count + 1)}
                          className={` bg-gray-300 border-gray-500  text-black
                  text-sm sm:text-lg p-[2px] sm:p-[5px] rounded-md border`}
                        >
                          <FaPlus />
                        </button>
                      </div>
                      {/* stock */}
                        <span className="text-gray-500 capitalize text-sm">
                          {productList.stock}
                        </span>
                      {/* price */}
                      <div className="flex items-center text-sm md:text-2xl justify-center text-green-600">
                        <TbCurrencyTaka className="" />
                        <p className="text-[11px] sm:text-xl">
                          {`${productList.sellPrice} * ${quantity} = ${productList.sellPrice * quantity}`}
                        </p>
                        
                      </div>
                    </div>
                    {/* order button */}
                    <div className="w-full sm:w-1/5 flex flex-row sm:flex-col sm:gap-y-1 gap-x-1">
                      <button
                        onClick={() => router.push(`/buy/${productList._id}.${quantity}`)}
                        className="bg-green-600 hover:bg-green-700 w-full py-1 capitalize text-white rounded-md text-sm sm:text-md"
                      >
                        buy now
                      </button>
                      <button className="w-full text-[18px] py-1  rounded-md text-red-700 bg-red-200 hover:bg-red-300" onClick={()=>handelRemove(productList._id)}>
                        <MdDeleteOutline className="mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="h-[1px] sm:h-[2px] bg-gray-400 my-2" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
