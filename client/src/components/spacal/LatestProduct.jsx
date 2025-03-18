"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Headding from "../Headding";
import ProductCard from "../product/ProductCard";
import ProductContainer from "../product/ProductContainer";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HomeProductSlider from "./HomeProductSlider";

function LatestProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/latest-product`
        );
        setProduct(res.data);
      } catch (err) {
        console.log("internal server error");
      }
    };
    fatchData();
  }, []);

  return (
    <main className={"my-6"}>
      <HomeProductSlider product={product} headding={"latest product"} />
    </main>
  );
}

export default LatestProduct;
