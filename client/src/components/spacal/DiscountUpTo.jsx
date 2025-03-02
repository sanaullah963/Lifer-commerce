"use client";
import React, { useEffect, useState } from "react";
import ProductContainer from "../product/ProductContainer";
import ProductCard from "../product/ProductCard";
import Container from "../Container";
import Headding from "../Headding";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Home from "@/app/page";
import HomeProductSlider from "./HomeProductSlider";

function DiscountUpTo() {
  let discount = 40;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/discount-upto`
        );
        setProduct(res.data);
      } catch (err) {
        console.log("internal server error");
      }
    };
    fatchData();
  }, []);

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-gray-600"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full cursor-pointer z-10 hover:bg-gray-600"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <HomeProductSlider
        product={product}
        headding={`discount up to ${discount}%`}
      />
    </main>
  );
}

export default DiscountUpTo;
