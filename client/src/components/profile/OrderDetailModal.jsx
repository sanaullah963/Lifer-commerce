import React from "react";
import Image from "next/image";
// const date = new Date(1666632563517);
// console.log(date.toLocaleDateString('en-US'));
function OrderDetailModal({ order, onClose }) {
  if (!order) return null; // Prevent errors if order is undefined

  return (

      <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div className="bg-white w-full max-w-2xl mx-4 sm:mx-auto p-6 rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
            onClick={onClose}
          >
            ×
          </button>

          {/* Modal Header */}
          <h2 className="text-xl font-semibold text-center mb-4">
            Order Details
          </h2>

          {/* Order Info */}
          <div className="mb-4 border-b pb-4">
            <p className="text-gray-700">
              <span className="font-semibold">Order ID:</span> {order._id}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Status:</span> {order.status}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Total Price:</span> ৳{" "}
              {order.totalPrice}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">order Date:</span> {" "}
              {`${new Date(order.createdAt).toLocaleDateString("en-US")}`}
            </p>
          </div>

          {/* User Address */}
          <div className="mb-4 border-b pb-4 ">
            <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span>{" "}
              {order?.userAddress?.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span>{" "}
              {order?.userAddress?.number}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">District:</span>{" "}
              {order.userAddress.district}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Upazila:</span>{" "}
              {order?.userAddress?.upazila}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Address:</span>{" "}
              {order?.userAddress?.address}
            </p>
          </div>

          {/* Product List */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Products</h3>
            <div className=" max-h-80 overflow-y-auto">
              {/* order multiple product */}
              {order?.productList.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 border rounded-md mb-2"
                >
                  <Image
                    src={product?.ProductDetail?.imageUrl}
                    alt={product?.ProductDetail?.title}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold">
                      {product?.ProductDetail?.title || "product deleted by admin"}
                    </p>
                    <p className="text-gray-600">
                      ৳ {`${product?.ProductDetail?.sellPrice} x ${product?.quantity} = ৳ ${product?.ProductDetail?.sellPrice * product?.quantity}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <div className="text-center mt-4">
            <button
              className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>

  );
}

export default OrderDetailModal;
