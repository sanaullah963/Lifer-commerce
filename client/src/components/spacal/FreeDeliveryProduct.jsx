import React from "react";
import Container from "../Container";
import Headding from "../Headding";
import ProductCard from "../product/ProductCard";
import ProductContainer from "../product/ProductContainer";

function FreeDeliveryProduct() {
  return (
    <main>
      <Container>
        <Headding Headding={"free delivery for you"} />

        <ProductContainer>
          <ProductCard deliveryFree={true} />
          <ProductCard deliveryFree={true} />
          <ProductCard deliveryFree={true} />
        </ProductContainer>
      </Container>
    </main>
  );
}

export default FreeDeliveryProduct;
