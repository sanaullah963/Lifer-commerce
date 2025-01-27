'use client'
import React from "react";
import Container from "../Container";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";

function Home() {
  const router = useRouter()

  return (
    <Container>
      <div className="grid bg-slate-200 p-2 content-center gap-2 sm:gap-10 items-center grid-flow-row grid-cols-2 md:grid-cols-3">
        {/* total product */}
        <div onClick={()=>router.push('/admin/product')} className="cursor-pointer bg-green-400 h-40 flex flex-col capitalize font-semibold rounded-md justify-center items-center">
          <p className="text-white text-xl sm:text-2xl font-bold">total product</p>
          <p>500</p>
        </div>
        {/* order */}
        <div onClick={()=>router.push('/admin/order')} className="cursor-pointer bg-green-400 h-40  flex flex-col capitalize font-semibold rounded-md justify-center items-center">
          <p className="text-white text-xl sm:text-2xl font-bold">order</p>
          <p>500</p>
        </div>
        {/* add product */}
        <div onClick={()=>router.push('/admin/insartproduct')} className="cursor-pointer bg-green-400 h-40  flex flex-col capitalize font-semibold rounded-md justify-center items-center">
          <p className="text-white text-xl sm:text-2xl font-bold">add Product</p>
          <p><FaPlus /></p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
