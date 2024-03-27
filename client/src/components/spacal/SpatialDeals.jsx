import React from "react";
import Container from "../Container";
import Image from "next/image";
import { spatialDealsArray } from "@/constant/data";
import Headding from "../Headding";
function SpatialDeals() {
  return (
    <main>
      <Container className={""}>
        {/* <h1 className="text-center text-3xl mt-16"></h1> */}
        <h2 className="text-center text-3xl mt-16">Spatial Deals</h2>
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16">
          {spatialDealsArray.map((i, index) => (
            <div key={index}>
              <Image src={i.image} alt="offer image" />
              <div className="mt-2 flex gap-x-1 ">
                <h3 className="text-md md:text-xl flex-1 leading-5 md:leading-6">
                  {i.title}
                </h3>
                <div className="w-[120px] flex justify-between">
                  {/* day counting */}
                  <div className="flex flex-col bg-gray-500  rounded-[3px]">
                    <span className="px-1 bg-gray-900 text-white h-6 rounded-t-[3px]">
                      59
                    </span>
                    <span className="text-sm text-center text-white capitalize py-1">
                      day
                    </span>
                  </div>
                  {/* houre counting */}
                  <div className="flex flex-col bg-gray-500  rounded-[3px]">
                    <span className="px-1 bg-gray-900 text-white h-6 rounded-t-[3px]">
                      59
                    </span>
                    <span className="text-sm text-center text-white capitalize py-1">
                      h
                    </span>
                  </div>
                  {/* minute counting */}
                  <div className="flex flex-col bg-gray-500  rounded-[3px]">
                    <span className="px-1 bg-gray-900 text-white h-6 rounded-t-[3px]">
                      59
                    </span>
                    <span className="text-sm text-center text-white capitalize py-1 ">
                      m
                    </span>
                  </div>
                  {/* secend counting */}
                  <div className="flex flex-col bg-gray-500  rounded-[3px]">
                    <span className="px-1 bg-gray-900 text-white h-6 rounded-t-[3px]">
                      59
                    </span>
                    <span className="text-sm text-center text-white capitalize py-1">
                      sec
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}

export default SpatialDeals;
