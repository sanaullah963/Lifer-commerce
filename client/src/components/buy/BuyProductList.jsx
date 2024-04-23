"use client";
import React, { useState } from "react";
import BorderContainer from "../BorderContainer";
import LoadingSpinner from "../LoadingSpinner";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";
import { useRouter } from "next/navigation";


function BuyProductList({ productArr,priceDetail }) {
// remove button
  const removeProduct=(_id)=>{
    alert('Feature coming soon ):')
  }
// handelPlaceOrder
const router=useRouter()
const handelPlaceOrder =()=>{
  // const bark = router.back()
  console.log(router);
}
  return (
    <main>
      <BorderContainer className=" flex flex-col my-0 md:flex-row gap-1">
        {/* product list */}
        <div className="md:w-2/3 w-full">
          {/* singel product */}
          {!productArr ? (
            <LoadingSpinner />
          ) : (
            productArr.map(({ product, quantity }) => (
              <div
                key={product._id}
                className=" flex rounded-md bg-gray-100 gap-x-2 p-1 my-2"
              >
                {/* image  */}
                <div className="w-[70px] rounded">
                  <Image
                    src={product.imageUrl}
                    alt="product-Image"
                    height={400}
                    width={400}
                    className="w-full rounded"
                  />
                </div>
                {/* price & counter & price*/}
                <div className="flex-1 w-full text-[15px] md:text-[17px]">
                  <p>{product.title}</p>

                  <div className="flex justify-between">
                    {/* remove product */}
                    <button onClick={()=>removeProduct(product._id)} className="bg-red-400 text-white py-1 md:py-2 px-3 text-lg rounded-md  hover:bg-red-600 ">
                      <MdOutlineDelete />
                    </button>
                    {/* price */}
                    <p className="text-green-800 text-end pe-1 md:pe-3">
                      {`${product.sellPrice} * ${quantity} = ${
                        product.sellPrice * quantity
                      }`}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {/* total price & discount */}
        <div className=" bg-white shadow-lg rounded-md p-5 md:w-1/3 w-full mt-5 md:mt-0">
          {/* order header */}

          <div className="flex justify-between border-y capitalize">
            <span>product quantity</span> <span>{priceDetail?.totalQuantity || <LoadingSpinner/>}</span>
          </div>
          <div className="flex justify-between border-y capitalize">
            <span>Total price</span> <span>{priceDetail?.totalPrice || <LoadingSpinner/>}</span>
          </div>
          <div className="flex justify-between border-y capitalize">
            <span>delivary cost</span> <span>not set</span>
          </div>
          <div className="flex justify-between border-y capitalize">
            <span>discount</span> <span>not set</span>
          </div>
          <div className="flex justify-between border-y capitalize">
            <span>total pay</span> <span>notset</span>
          </div>

          {/* place order button */}
          <button
            className="text-white bg-primary w-full h-10 mt-3 rounded-md"
            onClick={handelPlaceOrder}
          >
            Order Now
          </button>
        </div>
      </BorderContainer>
    </main>
  );
}

export default BuyProductList;
