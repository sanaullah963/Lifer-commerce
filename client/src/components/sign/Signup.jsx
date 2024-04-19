"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";
import VerifyToken from "../verifyToken";

function Signup() {
  const [formdata, setFormdata] = useState({});
  const [seePss, setSeePass] = useState(false);
  const [loaderState, setLoaderState] = useState(false);
  //if have token then verify 
  VerifyToken()
  // handel change function
  const handelChange = (e) => {
    const { value, name } = e.target;
    // console.log(name,value);
    setFormdata({ ...formdata, [name]: value });
  };
  // handle submit
  const handelSubmit = async () => {
    if (
      !formdata?.name ||
      !formdata?.numberORemail ||
      !formdata?.password ||
      !formdata?.conformPass
    ) {
      toast.error("Requier fild is empty");
    } else if (formdata.password !== formdata.conformPass) {
      toast.error("Password not match");
    } else {
      setLoaderState(true);
      try {
        // send data
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/uaer/signup`,
          formdata,
          { withCredentials: true }
        );
        res ? setLoaderState(false) : setLoaderState(true);
        //  remove input filed data
        setFormdata({name: "",conformPass: "",password: "",numberORemail: "", });
        if (res.data.status === "error") {
          toast.error(res.data.data);
        } else if (res.data.status === "success") {
          toast.success(res.data.data);
          Cookies.set('clientToken',res.data.token,{ expires: 1 })
          setTimeout(()=>history.back(),2000)
          
        }
      } catch (err) {
        console.log("data fatcjong error");
      }
    }
  };
  // handel See password
  return (
    <div className="px-3">
      <div className="bg-gray-200 shadow-lg shadow-gray-500 max-w-screen-sm mx-auto rounded-lg my-20 py-10 px-4 sm:px-16">
        <h1 className="text-center text-2xl">Create LifeR account</h1>
        {/* form section */}
        <div className=" flex flex-col items-center gap-y-3 my-5">
          {/* name */}
          <input
            type="text"
            placeholder="Name*"
            name="name"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
            onChange={handelChange}
            value={formdata?.name}
          />
          {/* email or number */}
          <input
            type="text"
            placeholder="Email or Number*"
            name="numberORemail"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
            onChange={handelChange}
            value={formdata?.numberORemail}
          />
          {/* password */}
          <div className="w-full max-w-md flex">
            <input
              type={seePss ? "text" : "password"}
              name="password"
              placeholder="Password*"
              className="h-10 px-3 rounded-s-md hover:outline-green-400 outline-green-400 flex-1"
              onChange={handelChange}
              value={formdata?.password}
            />
            <span
              className="w-10 flex items-center justify-center cursor-pointer bg-zinc-100 rounded-e-md"
              onClick={() => (!seePss ? setSeePass(true) : setSeePass(false))}
            >
              {seePss ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {/*confirm password */}
          <div className="w-full max-w-md flex">
            <input
              type={seePss ? "text" : "password"}
              placeholder="Confirm Password*"
              name="conformPass"
              className="h-10 px-3 rounded-s-md hover:outline-green-400 outline-green-400 flex-1"
              onChange={handelChange}
              value={formdata?.conformPass}
            />
            <span
              className="w-10 flex items-center justify-center cursor-pointer bg-zinc-100 rounded-e-md"
              onClick={() => (!seePss ? setSeePass(true) : setSeePass(false))}
            >
              {seePss ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          {/* signup button */}
          <div className="max-w-md w-full">
            {loaderState ? (
              <button
                className="w-full bg-primary text-white h-10 rounded-md "
                disabled
              >
                <LoadingSpinner />
              </button>
            ) : (
              <button
                className="w-full bg-primary text-white h-10 text-xl rounded-md hover:bg-[#e13614]"
                onClick={handelSubmit}
              >
                Signup
              </button>
            )}
          </div>
          {/* redirect signup */}
          <div className="max-w-md w-full">
            <div className="text-start flex gap-x-2 items-center">
              <span className="text-sm">Already have an account?</span>
              <Link
                href={"/login"}
                className="text-blue-500 text-xl border-b-2 hover:text-blue-800"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
