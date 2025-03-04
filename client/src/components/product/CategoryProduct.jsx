"use client";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import Head from "next/head";
import Headding from "../Headding";

function CategoryProduct({ category }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    // get singel category product
    const getCategoryProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/singel-category/${category}`
        );
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryProduct();
  }, []);
  return (
    <div>
      <Container>
        <Headding Headding={category} />

        <ProductContainer>
          {product.map((item) => (
            <ProductCard
              key={item._id}
              _id={item._id}
              deliveryFree={item.deliveryFree}
              title={item.title}
              price={item.price}
              sellPrice={item.sellPrice}
              imageUrl={item.imageUrl}
              percentage={item.percentage}
            />
          ))}
        </ProductContainer>
      </Container>
    </div>
  );
}

export default CategoryProduct;
