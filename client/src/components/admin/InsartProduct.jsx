"use client";
import { productCategoriesArray, productWeight } from "@/constant/data";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircleLoader from "react-spinners/ClipLoader";

function InsartProduct() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [imageLoadding, setImageLoadding] = useState(false);
  const [formSubmitLodder, setFormSubmitLodder] = useState(false);

  // handel change
  const handelChange = (e) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };
  // handel image lodder showing
  const imageUpLoadding = () => {
    setImageLoadding(true);
  };
  // handel image change
  const handelImage = (e) => {
    setImage(e.target.files[0]);
    setImageLoadding(false);
  };
  // submit handel
  const { title, detail, price, sellPrice, brand, stock, categories, weight } =
    product;
  const handelSubmit = async () => {
    if (
      !title ||
      !detail ||
      !sellPrice ||
      !price ||
      !brand ||
      !stock ||
      !categories ||
      !weight ||
      !image
    ) {
      toast.error("Requier field are empty");
    } else if (product?.title?.length > 150) {
      toast.error("Title shuld be under 150 text");
    } else if (product?.detail?.length > 500) {
      toast.error("Detail shuld be under 500 text");
    } else {
      setFormSubmitLodder(true);
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API}/product/insartProduct`,
          { product, image },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (res?.status===200){
          setFormSubmitLodder(false);
          toast.success("Product Add Successfull");
          console.log(res);
        } 
        else return toast.error('Unknown error');
      } catch (error) {
        console.log("product submit axios error in client",error);
      }
    }
  };

  return (
    <div className="md:max-w-[900px] lg:max-w-[1100px]  mx-auto flex flex-col gap-y-10 my-5">
      {/* --------------1 */}

      <div className="px-3  flex-1">
        <div className="bg-gray-200 shadow-lg shadow-gray-500  mx-auto rounded-lg py-5">
          <h1 className="text-center text-2xl">Insart new product</h1>
          {/* form section */}
          <div className=" flex flex-col items-center gap-y-3 px-1 my-5 max-w-md mx-auto">
            {/* tltle */}
            <div
              className={`flex justify-end w-full pe-4 mb-[-10px]  ${
                product?.title?.length < 151 ? "text-green-600" : "text-red-600"
              }`}
            >
              <span className="">{product?.title?.length}</span>
            </div>
            <textarea
              placeholder="Product Title (150)*"
              className=" px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400 h-20"
              onChange={handelChange}
              value={product.title}
              name="title"
            />
            {/* brand */}
            <input
              type="text"
              name="brand"
              placeholder="Brand*"
              className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
              onChange={handelChange}
              value={product.brand}
            />
            {/* price */}
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
              onChange={handelChange}
              value={product.price}
            />
            {/*sell price */}
            <input
              type="number"
              name="sellPrice"
              placeholder="Sell price*"
              className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
              onChange={handelChange}
              value={product.sellPrice}
            />
            {/*stock */}
            <input
              type="Number"
              name="stock"
              placeholder="stock*"
              className="h-10 px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400"
              onChange={handelChange}
              value={product.stock}
            />
            {/* details */}
            <div
              className={`flex justify-end w-full pe-4 mb-[-10px] ${
                product?.detail?.length < 501
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              <span className="">{product?.detail?.length}</span>
            </div>
            <textarea
              name="detail"
              placeholder="Details (500)"
              className=" px-3 max-w-md w-full rounded-md hover:outline-green-400 outline-green-400 h-28"
              onChange={handelChange}
              value={product.detail}
            />
            {/*upload image */}

            <p className="mb-[-10px]">Upload image</p>

            <div className="w-full h-full">
              {imageLoadding ? (
                <CircleLoader color="#36d7b7" size={20} />
              ) : (
                <p>{image?.name}</p>
              )}
              <div className="relative border-2 border-green-400 w-full rounded bg-green-100 h-20 ">
                <label
                  htmlFor="image"
                  className="w-full h-full text-5xl flex items-center justify-center text-green-800 cursor-pointer"
                >
                  <FaCloudUploadAlt />
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  hidden
                  onChange={handelImage}
                  onClick={imageUpLoadding}
                />
              </div>
            </div>
            {/* select categories */}
            <select
              name="categories"
              id=""
              onChange={handelChange}
              value={product.categories}
              className="w-full py-2 rounded-md hover:outline-green-400 outline-green-400 ps-1"
            >
              <option selected>select catagory</option>
              {productCategoriesArray.map((i, index) => (
                <option key={index} value={i}>
                  {i}
                </option>
              ))}
            </select>
            {/* select weight */}
            <select
              name="weight"
              id=""
              onChange={handelChange}
              value={product.weight}
              className="w-full py-2 rounded-md hover:outline-green-400 outline-green-400 ps-1"
            >
              <option selected>select weight</option>
              {productWeight.map((i, index) => (
                <option key={index} value={i.weight}>
                  {i.weight}
                </option>
              ))}
            </select>
            {/* signup button */}
            <div className="max-w-md w-full">
              {
                formSubmitLodder ? (<button
                  className="w-full text-white h-10 text-xl rounded-md bg-gray-400" disabled
                  >
                    <CircleLoader color="#ffff" size={20} />
                  </button>
                ) : (
                  <button
                  className="w-full bg-[#e13614] text-white h-10 text-xl rounded-md hover:bg-primary"
                  onClick={handelSubmit}>add</button>
              )
              }
              
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default InsartProduct;
