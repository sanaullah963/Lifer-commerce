import React from "react";
import { MdOutlineCopyAll } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "../ui/button";

function OrderTable({ orderData }) {
  let lodder1 = true;
  console.log(orderData);
  if (orderData.length > 0) {
    lodder1 = false;
  }

  if (lodder1) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    // <Accordion type="single" collapsible>
    //   <Table>
    //     <TableHeader>
    //       <TableRow>
    //         <TableHead>Order ID</TableHead>
    //         <TableHead>Products</TableHead>
    //         <TableHead>Price</TableHead>
    //         <TableHead>Status</TableHead>
    //       </TableRow>
    //     </TableHeader>
    //     <TableBody>
    //       {orderData.map((order) => (
    //         <AccordionItem key={order._id} value={order._id}>
    //           {/* Row acts as the clickable trigger */}
    //           {/* <AccordionTrigger asChild> */}
    //             {/* <div> */}
    //             <TableRow className="cursor-pointer">
    //               <TableCell>{order._id}</TableCell>
    //               <TableCell>{order.productList.length}</TableCell>
    //               <TableCell>৳ {order.totalPrice}</TableCell>
    //               <TableCell>{order.status}</TableCell>
    //             </TableRow>
    //             {/* </div> */}
    //            {/* </AccordionTrigger> */}

    //           {/* Expanded Content */}
    //           <AccordionContent>
    //             <TableRow>
    //               <TableCell colSpan={4}>
    //                 <div className="p-3 bg-gray-100 rounded-md">
    //                   <p>
    //                     <strong>Order Date:</strong>{" "}
    //                     {new Date(order.createdAt).toLocaleString()}
    //                   </p>
    //                   <p>
    //                     <strong>Shipping Address:</strong>{" "}
    //                     {order?.userAddress?.street}, {order?.userAddress?.city}
    //                   </p>
    //                   <p>
    //                     <strong>Payment Method:</strong> {order?.paymentMethod}
    //                   </p>
    //                   <p>
    //                     <strong>Products:</strong>
    //                   </p>
    //                   <ul className="list-disc pl-5">
    //                     {order.productList.map((product, index) => (
    //                       <li key={index}>
    //                         {product.name} - ৳{product.price} x{" "}
    //                         {product.quantity}
    //                       </li>
    //                     ))}

    //                   </ul>
    //                 </div>
    //               </TableCell>
    //             </TableRow>
    //           </AccordionContent>
    //         </AccordionItem>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </Accordion>

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
            <TableCell className=" border-x w-40">
              {order.productList[0].ProductDetail.title}
            </TableCell>

            <TableCell>
              <span className="flex flex-col gap-y-2 items-center justify-start">
                {order._id.slice(-12)}
                <button className="text-lg ps-2">
                  <MdOutlineCopyAll />
                </button>
              </span>
            </TableCell>
            <TableCell className="  border-x">
              {order.productList.length}
            </TableCell>
            <TableCell>৳ {order.totalPrice}</TableCell>
            <TableCell className="border-x">{order.status}</TableCell>
            <TableCell>
              <button className="p-1 bg-red-600 text-white rounded-md">
                Cancel
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrderTable;
