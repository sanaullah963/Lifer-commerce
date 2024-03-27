import React from "react";
import ProductContainer from "../product/ProductContainer";
import ProductCard from "../product/ProductCard";
import Container from "../Container";
import Headding from "../Headding";

function DiscountUpTo() {
  let discount = 60
  return (
    <main>
      
      <Container>
        <Headding Headding={`discount up to ${discount}%`} />
        <ProductContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductContainer>
      </Container>
    </main>
  );
}

export default DiscountUpTo;
