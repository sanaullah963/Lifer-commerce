import React from "react";
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

function OrderTable({ orderData }) {
  console.log(orderData);

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
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Products</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead> {/* For the expand/collapse button */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orderData.map((order) => (
          <TableRow key={order._id}>
            <TableCell>{order._id}</TableCell>
            <TableCell>{order.productList.length}</TableCell>
            <TableCell>৳ {order.totalPrice}</TableCell>
            <TableCell>{order.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default OrderTable;
