"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/image/logotwo.png";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import Avatar from "react-avatar";

function Navbar() {
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [cart,setCart]=useState(0)
  const router = useRouter();

  const token = Cookies.get("clientToken");
  // if token then get user info
  useEffect(() => {
    const cardData = JSON.parse(localStorage.getItem('cart'))
    
    cardData ? setCart(cardData.length): setCart(0)
    // setCart((JSON.parse(localStorage.getItem('cart'))).length)

    const haveUser = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API}/user/user-name`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserInfo(res.data);
        } catch (err) {
          console.log("data fatching error");
        }
      }
    };
    haveUser();
  }, []);
  // logout handel
  const handelLogout = () => {
    console.log("logour");
    Cookies.remove("clientToken");
    setShow(false);
    location.reload();
  };

  return (
    <div className="">
      <div className="bg-yellow-400">
        <div className={"max-w-screen-xl px-2 md:px-5 lg:px-14 mx-auto"}>
          <nav className="flex items-center gap-2 sm:gap-3 md:gap-8 w-full h-16">
            {/* logo */}
            <Link href={"/"} className="w-[80px] sm:w-[150px]">
              <Image src={logo} alt="LifeR" className="w-full" />
            </Link>
            {/* search box */}
            <div className="flex-1 flex bg-white h-10 rounded-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full ps-2 rounded-s-md outline-none"
              />
              <button className="text-2xl px-2">
                <IoSearch />
              </button>
            </div>
            {/* login && signup */}
            {userInfo?.name ? (
              //---if user
              <div className="sm:flex gap-4 hidden">
                {/* login */}
                <div
                  className="flex justify-center items-center gap-1 text-md hover:underline cursor-pointer"
                  onClick={() => router.push("/profile")}
                >
                  <Avatar name={userInfo?.name} size="50" round={true} />
                  <Link href={"/profile"} className="hidden lg:inline-flex">
                    {userInfo?.name || "My name"}
                  </Link>
                </div>
                {/* logout button */}
                <div className="flex  justify-center items-center">
                  <button
                    className="bg-black text-white py-2 px-2 text-lg rounded-md  hover:bg-gray-800"
                    onClick={handelLogout}
                  >
                    <IoExitOutline />
                  </button>
                  {/* <Link href={"/signup"}>Sign-Up</Link> */}
                </div>
              </div>
            ) : (
              // if not-have user
              <div className="sm:flex gap-1 hidden">
                {/* login */}
                <div className="flex justify-center items-center gap-1 text-md hover:underline">
                  <FaUser />
                  <Link href={"/login"}>Log-In</Link>
                </div>
                {/* center fration */}
                <span className="text-2xl text-[#E36349]"> / </span>
                {/* signup */}
                <div className="flex justify-center items-center gap-1 text-md hover:underline">
                  <FaUserPlus />
                  <Link href={"/signup"}>Sign-Up</Link>
                </div>
              </div>
            )}

            {/* add to card */}
            <div
              onClick={() => router.push("/cart")}
              className="bg-gray-600/50 h-7 w-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center relative cursor-pointer"
            >
              <span className="absolute text-[11px] sm:text-sm bottom-[-12px] font-semibold text-white bg-[#E36349] px-1 sm:px-2 rounded-md">
                {cart ? cart : 0}
              </span>
              <span className="text-sm sm:text-xl text-[#ffff]">
                <FaCartArrowDown />
              </span>
            </div>
            {/* mobile screen button */}
            <div className=" flex items-start justify-center">
              <button
                onClick={() => (show ? setShow(false) : setShow(true))}
                className="sm:hidden text-3xl"
              >
                {show ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
              </button>
            </div>
          </nav>
        </div>
      </div>
      {/* mobile screen login button */}
      {show && (
        <div className="absolute flex justify-end w-full z-10">
          {userInfo?.name ? (
            // if have user
            <div className="bg-yellow-500 flex flex-col w-auto items-start">
              {/* login */}
              <div
                onClick={() => (setShow(false), router.push("/profile"))}
                className="flex justify-center items-center gap-1 text-md hover:underline py-2 ps-2"
              >
                <Avatar name={userInfo?.name} size="30" />
                <Link href={"/profile"} className="pe-2">
                  {userInfo?.name || "My name"}
                </Link>
              </div>

              {/* logout */}
              <div
                onClick={handelLogout}
                className="flex justify-center items-center gap-1 text-md hover:underline py-2 ps-2"
              >
                <button className="bg-black text-white py-2 px-2 text-lg rounded-md  hover:bg-gray-800">
                  <IoExitOutline />
                </button>
                <p>Log-out</p>
              </div>
            </div>
          ) : (
            // if not-have user
            <div className="bg-yellow-500 flex flex-col w-28 items-start">
              {/* login */}
              <div
                onClick={() => setShow(false)}
                className="flex justify-center items-center gap-1 text-md hover:underline py-2 ps-2"
              >
                <FaUser />
                <Link href={"/login"} className="">
                  Log-In
                </Link>
              </div>

              {/* signup */}
              <div
                onClick={() => setShow(false)}
                className="flex justify-center items-center gap-1 text-md hover:underline py-2 ps-2"
              >
                <FaUserPlus />
                <Link href={"/signup"}>Sign-Up</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
