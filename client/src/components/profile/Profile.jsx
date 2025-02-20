"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import { GoPlus } from "react-icons/go";
import Modal from "./Modal";
import BorderContainer from "../BorderContainer";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import OrderTable from "./OrderTable";

function Profile() {
  const [show, setShow] = useState(false);
  const [showSpnnier, setShowSpnnier] = useState(false);
  const [cart, setCart] = useState(0);
  const [address,setAddtess]=useState({})
  const router = useRouter();
  const [orderData,setOrderData]=useState([])
  //------- closemodal Handel
  function closeModal() {
    show && setShow(false);
  }
  // access token && get user address
  useEffect(() => {
    // access token
    setShowSpnnier(true)
    const token = Cookies.get("clientToken");
    if (!token) return router.push("/");
    // access and shwo total card item
    const cardData = JSON.parse(localStorage.getItem("cart"));
    cardData ? setCart(cardData.length) : setCart(0);
    // get address API
    const fatchData = async () => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/user/get-address`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAddtess(data.data.address)

      } catch (err) {
        console.log("fatching error", err);
      }
    };
    fatchData();
    // get indivisul order data
    const fatchOrder = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/order/indivisul`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrderData(res.data)
      } catch (err) {
        console.log("order fatching error", err);
      }
    }
    fatchOrder()
    setShowSpnnier(false)
  }, []);
  return (
    <main>
      <div className="">{show && <Modal closeModal={closeModal} />}</div>
      <div>
        
           {showSpnnier && <LoadingSpinner/>} 
           {/* address and total order count section */}
        <BorderContainer className={"my-5"}>
          {/* inner border */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 mx-auto">
            <div className=" w-full md:w-1/2 grid grid-cols-2 gap-1 sm:gap-3 md:gap-5">
              {/* product orderd */}
              <div className=" border-2 border-green-600 rounded-md flex items-center justify-center flex-col gap-2 py-6">
                <div className="h-10 w-16 sm:h-16 sm:w-24 rounded-3xl bg-green-200 text-green-700 flex justify-center items-center font-bold text-xl sm:text-3xl shadow-md shadow-green-500">
                  {orderData.length}
                </div>
                <p className="capitalize text-sm sm:text-lg lg:text-xl">
                  Products ordered
                </p>
              </div>
              {/* cart counting */}
              <div className=" border-2 border-blue-600 rounded-md flex items-center justify-center flex-col gap-2 py-6">
                <div className="h-10 w-16 sm:h-16 sm:w-24 rounded-3xl bg-blue-200 text-blue-700 flex justify-center items-center font-bold text-xl sm:text-3xl shadow-md shadow-blue-500">
                  {cart}
                </div>
                <p className="capitalize text-sm sm:text-lg lg:text-2xl">
                  in your cart
                </p>
              </div>
            </div>
            <div className=" flex-1 border-2 border-gray-400 bg-gray-100 rounded-md px-2 sm:px-3 py-2">
              <div className="">
                <div className="flex justify-between items-center mb-3">
                  <p className="capitalize text-lg sm:text-2xl">
                    Shipping Address
                  </p>
                  <span className="w-[1px] block h-[18px] bg-black"></span>
                  <button
                    onClick={() => !show && setShow(true)}
                    className="capitalize flex items-center text-blue-600 gap-[2px]"
                  >
                    <GoPlus /> add new
                  </button>
                </div>
                <div className="">
                  <p className="capitalize font-[500]">name : {address?.address?.name}</p>
                  <p className="text-gray-600 text-sm">
                    {`${address?.address?.district} - ${address?.address?.upazila} - ${address?.address?.address} - `}
                    Bangladesh
                  </p>
                  <p className="text-gray-600">{address?.address?.number}</p>
                </div>
              </div>
            </div>
          </div>
        </BorderContainer>

        {/* recent order */}
        <BorderContainer className={"my-5"}>
          <h2 className="capitalize font-semibold text-xl">recent order</h2>
          <OrderTable orderData={orderData} isAdimn={false}/>
        </BorderContainer>

      </div>
    </main>
  );
}

export default Profile;
