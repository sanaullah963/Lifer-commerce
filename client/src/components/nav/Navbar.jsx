"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "@/image/logotwo.png";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Link from "next/link";
function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="bg-yellow-400">
        <Container>
          <nav className="flex items-center gap-2 sm:gap-3 md:gap-8 w-full h-16">
            {/* logo */}
            <Link href={'/'} className="w-[80px] sm:w-[150px]">
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
            <div className="sm:flex gap-1 hidden">
              {/* login */}
              <div className="flex justify-center items-center gap-1 text-md hover:underline">
                <FaUser />
                <button className="">Log-In</button>
              </div>
              {/* center fration */}
              <span className="text-2xl text-[#E36349]"> / </span>
              {/* signup */}
              <div className="flex justify-center items-center gap-1 text-md hover:underline">
                <FaUserPlus />
                <button className="">Sign-Up</button>
              </div>
            </div>
            {/* add to card */}
            <div className="bg-gray-600/50 h-7 w-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center relative">
              <span className="absolute text-[11px] sm:text-sm bottom-[-12px] font-semibold text-white bg-[#E36349] px-1 sm:px-2 rounded-md">
                10
              </span>
              <span className="text-sm sm:text-xl text-[#ffff]">
                <FaCartArrowDown />
              </span>
            </div>
            {/* mobile screen button */}
            <div className=" flex items-start justify-center">
              <button
                onClick={() => (show ? setShow(false) : setShow(true))}
                className="sm:hidden text-xl"
              >
                {show ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
              </button>
            </div>
          </nav>
        </Container>
      </div>
      {/* mobile screen login button */}
      {show && (
        <div className="absolute flex justify-end w-full z-10">
          <div className="bg-yellow-500 flex flex-col w-28 items-start">
            {/* login */}
            <div className="flex justify-center items-center gap-1 text-md hover:underline py-2 ps-2">
              <FaUser />
              <button className="">Log-In</button>
            </div>

            {/* signup */}
            <div className="flex justify-center items-center gap-1 text-md hover:underline py-2 ps-2">
              <FaUserPlus />
              <button className="">Sign-Up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
