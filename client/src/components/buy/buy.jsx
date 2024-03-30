// "use client";
import Container from "../Container";

import Image from "next/image";
import Link from "next/link";
import imm from "@/image/proudct/p4.jpg";
import BorderContainer from "../BorderContainer";
async function Odder() {
  return (
    <main>
      {/* first box */}
      <div className="">
        {/* address */}
        <BorderContainer className=" ">
          <div className="flex w-full justify-between">
            {/* left side */}
            <div className=" text-sm sm:text-lg flex-1 ">
              {/* name */}
              <div>
                <span className="font-[500]">Name&nbsp;:</span>
                <span className="text-gray-600">&nbsp;intisar sanaullah</span>
              </div>
              {/* number */}
              <div>
                <span className="font-[500]">Number&nbsp;:</span>
                <span className="text-gray-600">&nbsp;01245685475</span>
              </div>
              {/* address */}
              <div className="leading-4">
                <span className="font-[500]">Address&nbsp;:</span>
                <span className="text-gray-600">
                  &nbsp;barishal,barishal sador,kawniya branch road,munshi vila
                </span>
              </div>
            </div>
            {/* edit button */}
            <div className=" relative">
              <Link
                href={"/profile"}
                className="underline text-blue-600 absolute right-0 top-0  px-3 "
              >
                Edit
              </Link>
            </div>
          </div>
        </BorderContainer>
        {/* product & price */}
        <BorderContainer className=" flex flex-col md:flex-row gap-1">
          {/* product image,title,price,quentity, */}
          <div className="md:w-2/3 w-full  bg-white ">
            <div className=" flex gap-4">
              {/* image  */}
              <div className="h-20 w-20">
                <Image
                  src={imm}
                  alt="product-Image"
                  height={400}
                  width={300}
                  className="w-full"
                />
              </div>
              {/* price */}
              <div className="w-full">
                <p>{"product.title"}</p>
                <p className="text-primary text-end">{"price"}</p>
              </div>
            </div>
          </div>
          {/* total price and delivary charge */}
          <div className=" bg-white shadow-lg rounded-md p-5 md:w-1/3 w-full ">
            {/* order header */}
            <div className="flex justify-between">
              <div className="">
                <p>Total product :</p>
                <p>price :</p>
                <p>Delivery Fee :</p>
                <p>Total Payment :</p>
              </div>
              <div className="text-primary flex flex-col items-end">
                <p>{"quantity"}</p>
                <p>{"product.newPrice * quantity"}</p>
                <p>{"delivaryFee"}</p>
                <p>{"product.newPrice * quantity + delivaryFee"}</p>
              </div>
            </div>
            {/* place order button */}
            <button
              className="text-white bg-primary w-full h-10 mt-3 rounded-md"
              onClick={"placeOrder"}
            >
              Order Now
            </button>
          </div>
        </BorderContainer>
      </div>
    </main>
  );
}

export default Odder;
