"use client";
import React from "react";
import Container from "../Container";
import carouseltwo from "@/image/carousel/caroudeltwo.jpg";
import carouselthree from "@/image/carousel/caroudelthree.jpg";
import carouselfour from "@/image/carousel/caroudelfour.jpg";
import carouselfive from "@/image/carousel/caroudelfive.jpg";
import carouselsix from "@/image/carousel/caroudelsix.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function CarouselComponent() {
  return (
    <main className="">
      <Container>
      <div>
        <Carousel
          autoPlay={true}
          // transitionTime={1000}
          infiniteLoop={true}
          showStatus={false}
        >
          {/* 1350 * 675 is perfict carusel image size */}
          <div className="">
            <Image src={carouseltwo} alt="carousel1" />
          </div>
          <div>
            <Image src={carouselthree} alt="carousel1" />
          </div>
          <div>
            <Image src={carouselfour} alt="carousel1" />
          </div>
          <div>
            <Image src={carouselfive} alt="carousel1" />
          </div>
          <div>
            <Image src={carouselsix} alt="carousel1" />
          </div>
        </Carousel>
      </div>
      </Container>
    </main>
  );
}

export default CarouselComponent;
