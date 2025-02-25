"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import product from "../../image/proudct/p3.jpg";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
import BorderContainer from "../BorderContainer";
import OrderTable from "../profile/OrderTable";

const AllOrder = () => {
  const [orderData, setOrderData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("clientToken");
    if (!token) return router.push("/");
    // get indivisul order data
    const fatchOrder = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/order/all-order`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrderData(res.data);
      } catch (err) {
        console.log("order fatching error", err);
      }
    };
    fatchOrder();
  }, []);

  return (
    <Container>
      {/* <div className="">{show && <Modal closeModal={closeModal} />}</div> */}
       {/* All order */}
       <BorderContainer className={"my-5"}>
          <h2 className="capitalize font-semibold text-xl">All order</h2>
          <OrderTable orderData={orderData}/>
        </BorderContainer>
    </Container>
  );
};

export default AllOrder;
