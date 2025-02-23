"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";



import HomeProductSlider from "./HomeProductSlider";

function FreeDeliveryProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/delivery-free`
        );
        setProduct(res.data);
      } catch (err) {
        console.log("internal server error");
      }
    };
    fatchData();
  }, []);
  return (
    <div>
      <HomeProductSlider product={product} headding={"free delivery for you"} />
    </div>
  );
}

export default FreeDeliveryProduct;
