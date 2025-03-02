"use client";
import React, { useEffect, useState } from "react";
import BorderContainer from "../BorderContainer";
import LoadingSpinner from "../LoadingSpinner";
import Image from "next/image";
import { MdOutlineDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import axios from "axios";

function BuyProductList({ productArr, priceDetail, userAddress }) {
  const router = useRouter();
  // remove button
  const removeProduct = (_id) => {
    alert("Feature coming soon ):");
  };
  const token = Cookies.get("clientToken");
  // use effect
  useEffect(() => {
    // const token = Cookies.get("clientToken");
    if (!token) return router.push("/");
  }, []);

  // submit order handel
  const handelPlaceOrder = async () => {
    if (!userAddress?.address) {
      toast.error("Go to profile and Set address");
    } else {
      let list = [];
      productArr.map((i) => {
        let newObj = {
          ProductID: i.product._id,
          quantity: i.quantity,
        };
        list.push(newObj);
      });
      const orderObj = {
        userID: userAddress._id,
        userAddress: userAddress.address,
        totalprice: priceDetail.totalPay,
        productList: list,
      };
      // submit order api
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/product/submit-order`,
          { order: orderObj },
          {
            headers: {
              Authorization: `barer ${token}`,
            },
          }
        );
        console.log(res.data);
        if (res.data == "error") toast.error("Error");
        else {
          toast.success("Order Submited");
          setTimeout(() => {
            router.back();
          }, 2000);
        }
      } catch (error) {
        console.log("sever errors", error);
      }
    } //end else-block
  };

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
                    <button
                      onClick={() => removeProduct(product._id)}
                      className="bg-red-400 text-white py-1 md:py-2 px-3 text-lg rounded-md  hover:bg-red-600 "
                    >
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
            <span>product quantity</span>{" "}
            <span>{priceDetail?.totalQuantity || <LoadingSpinner />}</span>
          </div>
          <div className="flex justify-between border-y capitalize">
            <span>Total price</span>{" "}
            <span>{priceDetail?.totalPrice || <LoadingSpinner />}</span>
          </div>
          <div className="flex justify-between border-y capitalize">
            <span>delivary cost</span>
            <span>{priceDetail?.totaldelivary || "00"}</span>
          </div>
          <div className="flex justify-between border-y capitalize">
            <span>discount</span>
            {priceDetail?.discount || "00"}
          </div>
          <div className="flex justify-between border-y capitalize">
            <span>total pay</span>
            {priceDetail?.totalPay || <LoadingSpinner />}
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
      <ToastContainer />
    </main>
  );
}

export default BuyProductList;
