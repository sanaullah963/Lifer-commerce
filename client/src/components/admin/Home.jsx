'use client'
import React from "react";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

function Home() {
  const router = useRouter()

  return (
    <Container>
      <div className="grid bg-slate-200 p-2 content-center gap-2 sm:gap-10 items-center grid-flow-row grid-cols-2 md:grid-cols-3">
        {/* total product */}
        <Link href={'/admin/product'} className="cursor-pointer bg-green-400 h-40 flex flex-col capitalize font-semibold rounded-md justify-center items-center" >
          <p className="text-white text-xl sm:text-2xl font-bold">total product</p>
          <p>500</p>
        </Link>
        {/* order */}
        <Link href={'/admin/product'} className="cursor-pointer bg-green-400 h-40 flex flex-col capitalize font-semibold rounded-md justify-center items-center" >
          <p className="text-white text-xl sm:text-2xl font-bold">order</p>
          <p>500</p>
          <p className="text-purple-600 ">new 25</p>
        </Link>
        {/* add product */}
        <Link href={'/admin/product'} className="cursor-pointer bg-green-400 h-40 flex flex-col capitalize font-semibold rounded-md justify-center items-center" >
          <p className="text-white text-xl sm:text-2xl font-bold">add Product</p>
          <p><FaPlus /></p>
        </Link>

      </div>
    </Container>
  );
}

export default Home;
