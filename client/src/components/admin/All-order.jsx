import React from "react";
import Container from "../Container";
import product from "../../image/proudct/p3.jpg";
import Image from "next/image";

const AllOrder = () => {
  return (
    <Container>
      <div className="flex my-4 gap-3 rounded-md bg-green-100">
        {/* product image */}
        <div className="my-auto">
          <Image
            src={product}
            width={50}
            height={100}
            alt="product image"
            className="w-full"
          />
        </div>
        {/* title && status */}
        <div className="w-2/4">
          <p className="">this is product title</p>
          {/* show status */}
          <p className="px-2 capitalize inline-block text-white rounded-sm relative bottom-0 text-sm  bg-green-500">
            status
          </p>
          <p className="text-primary">price</p>
        </div>
        {/* status button */}
        <div className="flex  items-center justify-center gap-2">
          {/* comform button */}
          <button
            className={`capitalize text-white p-2  rounded-[4px] bg-green-500`}
          >action</button>
          {/* cancel button */}
        </div>
        {/* address && name */}
        <div className="flex flex-col items-center justify-center w-1/4">
          <p>address</p>
          <p className="capitalize">
            f-name & l-name
          </p>
        </div>
        {/* email && number */}
        <div className="flex flex-col items-center justify-center w-1/4">
          <p>user email</p>
          <p className="capitalize">phone number</p>
        </div>
      </div>
    </Container>
  );
};

export default AllOrder;
