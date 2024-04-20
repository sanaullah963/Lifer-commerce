'use client'
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Headding from "../Headding";
import ProductCard from "../product/ProductCard";
import ProductContainer from "../product/ProductContainer";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner";

function FreeDeliveryProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/delivery-free`
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
        <Headding Headding={"free delivery for you"} />


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
                _id={i._id}
              />
            ))}
          </ProductContainer>
        )}
      </Container>
    </main>
  );
}

export default FreeDeliveryProduct;
