"use client";
import { districtArray } from "@/constant/data";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Modal({ closeModal }) {
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState([]);
  const [upazilaValue, setUpazilaValue] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("bangladesh");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  // district handel and finding upazila array
  const handelDistrict = (e) => {
    setDistrict(e.target.value);
    districtArray.map((i) => {
      i.district == e.target.value && setUpazila(i.upazila);
    });
  };
  // submit handel
  const handelSubmit = async () => {
    const token = Cookies.get("clientToken");
    if (
      !name ||
      !number ||
      !country ||
      !district ||
      !upazilaValue ||
      !address
    ) {
      toast.error("Requiered fild are empty");
    } else {
      const obj = {
        name,
        number,
        country,
        district,
        upazila: upazilaValue,
        address,
      };
      // api request
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/user/user-address`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);

      closeModal();
    }
  };
  return (
    <div className=" absolute h-auto top-0 right-0 left-0 bg-gray-200 px-2 md:px-10">
      {/* inner div */}
      <div className="max-w-sm  sm:max-w-md md:max-w-lg border-[4px] mx-auto rounded-md p-1 sm:p-2 md:px-10 md:py-5 shadow-lg shadow-gray-600 my-10 bg-white">
        {/* modal button */}
        <div className=" flex justify-between items-center mb-5">
          <h2 className="capitalize font-[500] text-zinc-600 text-md sm:text-xl">
            create new Shipping Address
          </h2>
          <button
            onClick={() => closeModal()}
            className="text-xl sm:text-3xl p-1 rounded-md border-2 border-red-300 hover:border-red-500 bg-red-200 hover:bg-red-300 text-red-400 hover:text-red-800 duration-150"
          >
            <IoClose />
          </button>
        </div>
        {/* form section */}
        <div className="">
          <div className="">
            {/* name */}
            <div className="flex flex-col mb-3">
              <label htmlFor="name" className="capitalize font-[500]">
                name*
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter Full Name"
                className="outline-none border  hover:border-green-400 focus:border-green-400 rounded px-2 py-1"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* number */}
            <div className="flex flex-col mb-3">
              <label htmlFor="number" className="capitalize font-[500]">
                number*
              </label>
              <input
                id="number"
                type="number"
                placeholder="Enter number"
                className="outline-none border hover:border-green-400 focus:border-green-400 rounded px-2 py-1"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            {/* country */}
            <div className="flex flex-col mb-3">
              <label htmlFor="country" className="capitalize font-[500]">
                country*
              </label>
              <select
                id="country"
                className="outline-none border hover:border-green-400 focus:border-green-400 rounded px-2 py-1"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="bangladesh" selected>
                  Bangladesh
                </option>
              </select>
            </div>
            {/* district */}
            <div className="flex flex-col mb-3">
              <label htmlFor="district" className="capitalize font-[500]">
                district*
              </label>
              <select
                id="district"
                className="outline-none border hover:border-green-400 focus:border-green-400 rounded px-2 py-1"
                onChange={handelDistrict}
              >
                <option selected>select district</option>
                {districtArray.map((i, index) => (
                  <option key={index} value={i.district}>
                    {i.district}
                  </option>
                ))}
              </select>
            </div>
            {/* upazila */}
            <div className="flex flex-col mb-3">
              <label htmlFor="upazila" className="capitalize font-[500]">
                upazila*
              </label>

              <select
                id="upazila"
                className="outline-none border hover:border-green-400 focus:border-green-400 rounded px-2 py-1"
                onChange={(e) => setUpazilaValue(e.target.value)}
              >
                {upazila.length <= 0 ? (
                  <option selected>select district fist</option>
                ) : (
                  upazila.map((i, index) => (
                    <option key={index} value={i}>
                      {i}
                    </option>
                  ))
                )}
              </select>
            </div>
            {/* address */}
            <div className="flex flex-col mb-3">
              <label htmlFor="address" className="capitalize font-[500]">
                address*
              </label>
              <input
                id="address"
                type="text"
                placeholder=" Area , Road , House"
                className="outline-none border  hover:border-green-400 focus:border-green-400 rounded px-2 py-1"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            {/* submit button */}
            <button
              className="w-full bg-green-400 hover:bg-green-500 py-1 capitalize font-[500] rounded text-xl mt-4"
              onClick={handelSubmit}
            >
              add address
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Modal;
