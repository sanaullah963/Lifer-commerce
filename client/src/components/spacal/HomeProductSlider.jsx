import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "../product/ProductCard";
import LoadingSpinner from "../LoadingSpinner";
import Headding from "../Headding";

function HomeProductSlider({ product ,headding}) {

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
    <div className={"max-w-screen-xl px-3 sm:px-5 lg:px-14 mx-auto my-6"}>
      <Headding Headding={headding} />

      {product.length <= 0 ? (
        // lodding spinner
        <div className="flex justify-start">
          <LoadingSpinner />
        </div>
      ) : (
        <Slider {...settings} className="h-full">
          {product.map((i) => (
            <div className=" p-2  " key={i._id}>
              <div className=" p-2 border-2 border-gray-200 hover:shadow-xl group cursor-pointer rounded-xl pb-3 h-auto md:min-h-[340px] flex flex-col justify-between">
                <div className="">
                  <ProductCard
                    deliveryFree={i?.deliveryFree}
                    title={i.title}
                    price={i.price}
                    sellPrice={i.sellPrice}
                    imageUrl={i.imageUrl}
                    percentage={i.percentage}
                    _id={i._id}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default HomeProductSlider;
