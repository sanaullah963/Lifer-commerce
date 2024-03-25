import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import logo from "@/image/logotwo.png";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
function Navbar() {
  return (
    <div className="bg-yellow-400">
      <Container>
        <nav className="flex items-center gap-1 lg:gap-8 w-full h-16">
          {/* logo */}
          <div className="w-[150px]">
            <Image src={logo} alt="LifeR" className="w-full" />
          </div>
          {/* search box */}
          <div className="flex-1 flex bg-white h-10 rounded-md">
              <input type="text" placeholder="Search" className="w-full ps-2 rounded-s-md outline-none" />
              <button className="text-2xl px-2">
                <IoSearch />
              </button>
            </div>

          {/* login && signup */}
          <div className="flex gap-1">
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
          <div className="">
            <div className="bg-gray-600/50 h-10 w-10 rounded-full flex items-center justify-center relative">
              <span className="absolute text-sm bottom-[-12px] font-semibold text-white bg-[#E36349] px-2 rounded-md">
                10
              </span>
              <span className="text-xl text-[#ffff]">
                <FaCartArrowDown />
              </span>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
