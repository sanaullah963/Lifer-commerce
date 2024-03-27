import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="px-3">
      <div className="bg-gray-200 shadow-lg shadow-gray-500 max-w-screen-sm mx-auto rounded-lg my-20 py-10 px-4 sm:px-16">
        <h1 className="text-center text-2xl">Login to your account</h1>
        {/* form section */}
        <div className=" flex flex-col items-center gap-y-3 my-5">
          <input
            type="text"
            placeholder="Email or Number"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
          />
          <input
            type="password"
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
            <button className="w-full bg-primary text-white h-10 text-xl rounded-md hover:bg-[#e13614]">
              Login
            </button>
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
    </div>
  );
}

export default Login;
