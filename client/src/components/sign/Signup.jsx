import Link from "next/link";
import React from "react";

function Signup() {
  return (
    <div className="px-3">
      <div className="bg-gray-200 shadow-lg shadow-gray-500 max-w-screen-sm mx-auto rounded-lg my-20 py-10 px-4 sm:px-16">
        <h1 className="text-center text-2xl">Create LifeR account</h1>
        {/* form section */}
        <div className=" flex flex-col items-center gap-y-3 my-5">
          {/* name */}
          <input
            type="text"
            placeholder="Name"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
          />
          {/* email or number */}
          <input
            type="text"
            placeholder="Email or Number"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
          />
          {/* password */}
          <input
            type="password"
            placeholder="Password"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
          />
          {/*confirm password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
          />
         
          {/* signup button */}
          <div className="max-w-md w-full">
            <button className="w-full bg-primary text-white h-10 text-xl rounded-md hover:bg-[#e13614]">
              Signup
            </button>
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
    </div>
  );
}

export default Signup;
