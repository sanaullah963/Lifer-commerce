"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Headding from "../Headding";
import ProductCard from "../product/ProductCard";
import ProductContainer from "../product/ProductContainer";
import axios from "axios";

function LatestProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/latest-product`
        );
        setProduct(res.data);
      } catch (err) {
        console.log("internal server error");
      }
    };
    fatchData();
  }, []);

  return (
    <main>
      <Container className={""}>
        <Headding Headding={"latest product"} />

        {/* image must be 1:1 */}
        <ProductContainer>
          {product.map((i) => (
            <ProductCard
              key={i._id}
              deliveryFree={i.deliveryFree}
              title={i.title}
              price={i.price}
              sellPrice={i.sellPrice}
              imageUrl={i.imageUrl}
            />
          ))}
        </ProductContainer>
      </Container>
    </main>
  );
}

export default LatestProduct;
