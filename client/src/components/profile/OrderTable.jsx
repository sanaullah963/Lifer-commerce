import React, { useState } from "react";
import { MdOutlineCopyAll } from "react-icons/md";

import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table";
import {HoverCard,HoverCardContent,HoverCardTrigger,} from "@/components/ui/hover-card";

import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import OrderDetailModal from "./OrderDetailModal";

function OrderTable({ orderData, isAdimn }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  isAdimn?console.log('admin'):console.log('not')
  
  
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

  let lodder = true;
  if (orderData.length > 0) lodder = false;

  if (lodder) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
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
        {orderData.map((order) => (
          <TableRow
            className="text-[12px] leading-tight sm:text-sm"
            key={order._id}
          >
            <TableCell className="w-16 h-16">
              <Image
                src={order.productList[0].ProductDetail.imageUrl}
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
            <TableCell>
              <button className="p-1 bg-red-600 hover:bg-red-700 text-white rounded-md block my-auto mb-1"
              onClick={() => console.log('Cancel clicked')} >
                Cancel
              </button>
              <button className="p-1 px-2 bg-green-600 hover:bg-green-700 text-white block rounded-md"
              onClick={() => openModal(order)}>
                View
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
