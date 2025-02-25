import React, { useState } from "react";
import { MdOutlineCopyAll } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderDetailModal from "./OrderDetailModal";
import { adminArray } from "@/constant/data";
import Cookies from "js-cookie";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";

function OrderTable({ orderData }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const isAdmin = adminArray.includes(Cookies.get("numberORemail"));
  const [orderDeletLoading, setOrderDeletLoading] = useState(false);
  const [orderProcessingLoading, setOrderProcessingLoading] = useState(false);

      const token = Cookies.get("clientToken");
  // open order detail modal
  const openModal = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };
  // close order detail modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };
  // lodder
  let lodder = true;
  if (orderData.length > 0) lodder = false;
  if (lodder) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  // order delete handel
  const orderDeleteOrder = async(id,index) => {
    setOrderDeletLoading(true);
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API}/product/order/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
    });
    console.log("order delete success",res.data);
    toast.success(res.data?.data || "Order Deleted");
    orderData.splice(index,1);
    setOrderDeletLoading(false);
    } catch (error) {
      console.log("order delete error",error);
    }
  };
  // processing order handel
  const orderProcessing = async(_id) => {
    // send product id to server
    setOrderProcessingLoading(true);
    try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/product/order/processing`,{_id},{ headers: {
            Authorization: `Bearer ${token}`, // for auth
          },});
        console.log("order ",res.data);
    } catch (error) {
      console.log("order processing error",error);
    }
    setOrderProcessingLoading(false);
  };
  return (
    <Table>
      {/* table heading */}
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead className="  border-x">Name</TableHead>
          <TableHead>Order ID</TableHead>
          <TableHead className="  border-x">Products</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className=" border-x">Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      {/* teble body row */}
      <TableBody>
        {orderData.map((order,index) => (
          <TableRow
            className="text-[12px] leading-tight sm:text-sm"
            key={order._id}
          >
            <TableCell className="w-16 h-16">
              <Image
                src={order.productList[0].ProductDetail?.imageUrl }
                width={100}
                height={100}
                alt="product"
                className="w-10 h-10 sm:w-16 sm:h-16"
              />
            </TableCell>
            {/* title */}
            <TableCell className=" border-x w-40">
              {order?.productList[0].ProductDetail?.title}
            </TableCell>
            {/* order id row */}
            <TableCell>
              <span className="flex flex-col gap-y-2 items-center justify-start">
                {order._id.slice(-12)}
                <HoverCard>
                  <HoverCardTrigger>
                    <button
                      onClick={() => (
                        navigator.clipboard.writeText(order._id),
                        toast.success("Order ID Copied")
                      )}
                      className="text-lg ps-2"
                    >
                      <MdOutlineCopyAll />
                    </button>
                  </HoverCardTrigger>
                  <HoverCardContent>Click to copy Order ID</HoverCardContent>
                </HoverCard>
              </span>
            </TableCell>
            <TableCell className="  border-x">
              {order?.productList.length}
            </TableCell>
            <TableCell>৳ {order?.totalPrice}</TableCell>
            <TableCell className="border-x">{order?.status}</TableCell>
            {/* action button */}
            <TableCell className="flex flex-col ">
              {/* cancel button */}
              {
                order?.status == 'pending' ? (<button
                  className="py-2 px-2 bg-red-600 hover:bg-red-700 text-white rounded block my-auto mb-1"
                  onClick={() => orderDeleteOrder(order._id,index)}
                >
                  {orderDeletLoading ? (<LoadingSpinner/>):"Cancel"}
                </button>):isAdmin && (<button
                className="py-2 px-2 bg-red-600 hover:bg-red-700 text-white rounded block my-auto mb-1"
                onClick={() => orderDeleteOrder(order._id,index)}
              >
                {orderDeletLoading ? (<LoadingSpinner/>):"Cancel"}
              </button>)
              }

              {/* procesing button */}
              {
               order?.status == 'pending' && isAdmin && (
                  <button
                    className="py-2 px-2 bg-yellow-500 hover:bg-yellow-700 text-white rounded block my-auto mb-1"
                    onClick={() => orderProcessing(order._id)}
                  >
                    {orderProcessingLoading ? (<LoadingSpinner/>):"Processing"}
                  </button>
                )
              }
              {/* details button */}
              <button
                className="p-1 px-2 bg-green-600 hover:bg-green-700 text-white block rounded"
                onClick={() => openModal(order)}
              >
                Details
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <ToastContainer />
      {showModal && (
        <OrderDetailModal order={selectedOrder} onClose={closeModal} />
      )}
      
    </Table>
  );
}

export default OrderTable;
