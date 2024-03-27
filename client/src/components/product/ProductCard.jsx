import Image from "next/image";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import delivaryFreeImg from "@/image/free_delivery.svg";
import product1 from "@/image/proudct/product1.jpeg";
import Link from "next/link";

function ProductCard({ deliveryFree }) {
  let title = "Joypuri Ari Work Salwar Kameez for Women - JSS 12 (Multicolor)";
  return (
    <Link
      href={"/"}
      className="border-2 relative hover:shadow-lg group cursor-pointer"
    >
      <span className="h-[23px] block"></span>
      {/* discount */}
      <div className="font-semibold bg-green-400 absolute top-2 px-2 py-1 rounded-e-lg">
        <span className="me-2">30%</span>
        <span className="text-[12px]">off</span>
      </div>
      {/* image */}
      {/* image must be 1:1 */}
      <div className="overflow-hidden  bg-slate-400">
        <Image src={product1} alt="something" className="" />
      </div>

      {/* delivary free */}
      {deliveryFree ? (
        <Image src={delivaryFreeImg} alt="free delivary" className="" />
      ) : (
        <span className="h-[23px] block"></span>
      )}
      {/* title */}
      <div className="px-1 lg:px-2">
        <p className="text-[13px] leading-4 capitalize group-hover:underline">
          {title.length > 45 ? title.slice(0, 45) + "..." : title}
        </p>
        {/* price */}
        <div className="flex items-end gap-2">
          <div className="flex items-center text-lg">
            <TbCurrencyTaka />
            <span className="text-primary">1199</span>
          </div>
          <del className="text-sm">1586</del>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;