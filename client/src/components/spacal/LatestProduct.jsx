import React from "react";
import Container from "../Container";
import Headding from "../Headding";
import ProductCard from "../product/ProductCard";
import ProductContainer from "../product/ProductContainer";

function LatestProduct() {
  return (
    <main>
      <Container className={""}>
        <Headding Headding={"latest product"} />

        {/* image must be 1:1 */}
        <ProductContainer>
          <ProductCard deliveryFree={true} />
          <ProductCard />
          <ProductCard deliveryFree={true} />
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

export default LatestProduct;
