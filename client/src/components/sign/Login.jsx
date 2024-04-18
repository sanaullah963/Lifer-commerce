"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../LoadingSpinner";
import VerifyToken from "../verifyToken";

function Login() {
  const [formData, setFormData] = useState({});
  const [loaderState, setLoaderState] = useState(false);
  // verify token
  // VerifyToken()
  // handel change
  const handelChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // const handel submit
  const handelSubmit = async () => {
    const { numberORemail, password } = formData;
    if (!numberORemail || !password) {
      toast.error("Empty fild not accepted");
    } else {
      setLoaderState(true);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/uaer/login`,
          formData,{withCredentials:true}
        );
        res ? setLoaderState(false) : setLoaderState(true);
        setFormData({ numberORemail: "", password: "" });
        if (res.data.status === "error") {
          toast.error(res.data.data);
        } else if (res.data.status === "success") {
          toast.success(res.data.data);
        }
      } catch (err) {
        console.log("server side error");
      }
    }
  };

  return (
    <div className="px-3">
      <div className="bg-gray-200 shadow-lg shadow-gray-500 max-w-screen-sm mx-auto rounded-lg my-20 py-10 px-4 sm:px-16">
        <h1 className="text-center text-2xl">Login to your account</h1>
        {/* form section */}
        <div className=" flex flex-col items-center gap-y-3 my-5">
          <input
            type="text"
            name="numberORemail"
            value={formData.numberORemail}
            onChange={handelChange}
            placeholder="Email or Number"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handelChange}
            placeholder="Password"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
          />
          {/* forget password */}
          <div className="max-w-md w-full">
            <Link
              href={"/"}
              className="text-end text-blue-500 block hover:text-blue-800"
            >
              Forgot password?
            </Link>
          </div>
          {/* login button */}
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
                onClick={handelSubmit}
                className="w-full bg-primary text-white h-10 text-xl rounded-md hover:bg-[#e13614]"
              >
                Login
              </button>
            )}
          </div>
          {/* redirect signup */}
          <div className="max-w-md w-full">
            <div className="text-start flex gap-x-2 items-center">
              <span className="text-sm">Don&apos;t have an account?</span>
              <Link
                href={"/signup"}
                className="text-blue-500 text-xl border-b-2 hover:text-blue-800"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
