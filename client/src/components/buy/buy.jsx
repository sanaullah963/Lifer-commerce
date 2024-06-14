"use client";
import Link from "next/link";
import BorderContainer from "../BorderContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import BuyProductList from "./BuyProductList";
function Odder({ params }) {
 // access token
  const token = Cookies.get("clientToken");
  const [productLIst, setProductLIst] = useState({});
  // fatch data
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/buy-product`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              ids: params.product_id,
            },
          }
        );
       setProductLIst(res.data);
      } catch (err) {
        console.log("server error", err);
      }
    };
    fatchData();
  }, []);

  // distrucer response
  const { user, productArr, priceDetail } = productLIst;
  return (
    <main>
      <div className="">
        {/* first box || address box */}
        <BorderContainer>
          <div className="flex w-full justify-between">
            {/* left side */}
            <div className=" text-sm sm:text-lg flex-1 ">
              {/* name */}
              <div>
                <span className="font-[500]">Name&nbsp;:</span>
                <span className="text-gray-600">&nbsp;intisar sanaullah</span>
              </div>
              {/* number */}
              <div>
                <span className="font-[500]">Number&nbsp;:</span>
                <span className="text-gray-600">&nbsp;01245685475</span>
              </div>
              {/* address */}
              <div className="leading-4">
                <span className="font-[500]">Address&nbsp;:</span>
                <span className="text-gray-600">
                  &nbsp;barishal,barishal sador,kawniya branch road,munshi vila
                </span>
              </div>
            </div>
            {/* edit button */}
            <div className=" relative">
              <Link
                href={"/profile"}
                className="underline text-blue-600 absolute right-0 top-0  px-3 "
              >
                Edit
              </Link>
            </div>
          </div>
        </BorderContainer>
        {/* product & total price */}
          <BuyProductList productArr={productArr} priceDetail={priceDetail}/>
        
      </div>
    </main>
  );
}

export default Odder;
