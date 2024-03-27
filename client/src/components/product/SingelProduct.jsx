"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function SingelProduct() {
  const [count, setCount] = useState(0);
  // dicrement function
  const deCriment = () => {
    count == 0 ? setCount(0) : setCount(count - 1);
  };
  // increment function
  const inCrement = () => {
    // count < singelProduct?.stock ? setCount(count + 1) : setCount(count);
  };

  return (
    <Container>
      
    </Container>
  );
}

export default SingelProduct;
