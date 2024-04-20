'use client'
import React, { useEffect, useState } from "react";
import ProductContainer from "../product/ProductContainer";
import ProductCard from "../product/ProductCard";
import Container from "../Container";
import Headding from "../Headding";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";

function DiscountUpTo() {
  let discount = 40
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/discount-upto`
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
      
      <Container>
        <Headding Headding={`discount up to ${discount}%`} />
        {product.length <= 0 ? (
          // lodding spinner
          <div className="flex justify-start">
            <LoadingSpinner />
          </div>
        ) : (
          <ProductContainer>
            {product.map((i) => (
              <ProductCard
                key={i._id}
                deliveryFree={i.deliveryFree}
                title={i.title}
                price={i.price}
                sellPrice={i.sellPrice}
                imageUrl={i.imageUrl}
                percentage={i.percentage}
              />
            ))}
          </ProductContainer>
        )}
      </Container>
    </main>
  );
}

export default DiscountUpTo;
