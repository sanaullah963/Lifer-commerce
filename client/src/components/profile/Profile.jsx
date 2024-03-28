import React from "react";
import Container from "../Container";
import { GoPlus } from "react-icons/go";
function Profile() {
  return (
    <main>
      <Container className={' '}>
        <div className="border-[4px] max-w-sm  sm:max-w-md md:max-w-[820px] mx-auto rounded-md p-1 sm:p-2 shadow-lg shadow-gray-400 my-10 pt-8">
          {/* inner border */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 mx-auto">
            <div className=" w-full md:w-1/2 grid grid-cols-2 gap-1 sm:gap-3 md:gap-5">
              {/* product orderd */}
              <div className=" border-2 border-green-400 rounded-md flex items-center justify-center flex-col gap-2 py-6">
                <div className="h-10 w-16 sm:h-16 sm:w-24 rounded-3xl bg-green-200 text-green-700 flex justify-center items-center font-bold text-xl sm:text-3xl shadow-md shadow-green-500">
                  25
                </div>
                <p className="capitalize text-sm sm:text-lg">Products ordered</p>
              </div>
              {/* cart counting */}
              <div className=" border-2 border-blue-400 rounded-md flex items-center justify-center flex-col gap-2 py-6">
                <div className="h-10 w-16 sm:h-16 sm:w-24 rounded-3xl bg-blue-200 text-blue-700 flex justify-center items-center font-bold text-xl sm:text-3xl shadow-md shadow-blue-500">
                  25
                </div>
                <p className="capitalize text-sm sm:text-lg">in your cart</p>
              </div>
            </div>

            <div className=" flex-1 border-2 border-gray-400 bg-gray-100 rounded-md px-2 sm:px-3 py-2">
              <div className="">
                <div className="flex justify-between items-center mb-3">
                  <p className="capitalize text-lg sm:text-2xl">Shipping Address</p>
                  <span className="w-[1px] block h-[18px] bg-black"></span>
                  <button className="capitalize flex items-center text-blue-600 gap-[2px]"><GoPlus/> add new</button>
                </div>
                <div className="">
                  <p className="capitalize font-[500]">name sanaullah</p>
                  <p className="text-gray-600 text-sm">Baresal, pord rood, Gournadi, Barisal District -8200, Bangladesh</p>
                  <p className="text-gray-600">01744584584</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Profile;
