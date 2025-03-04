"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Headding from "../Headding";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

function HomeCatagory() {
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    //get all catagoty
    const getCategory = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/all-category`
        );
        setCatagory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);
  return (
    <div>
      <Container>
        <Headding Headding="Catagory" />
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-7 gap-4">
          {catagory.map((item, index) => (
            <Link href={`/catagorys/${item.category}`} key={index} className="bg-gray-100 p-4">
              <div className=" bg-neutral-600 rounded-full w-20 h-20 mx-auto">
                <Image
                  src={item.image}
                  className="t my-auto bg-slate-600"
                  alt="image"
                  width={100}
                  height={100}
                />
              </div>
              <p className="font-normal text-sm text-center">{item.category}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default HomeCatagory;
