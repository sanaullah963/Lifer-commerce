"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Headding from "../Headding";
import ProductContainer from "./ProductContainer";
import ProductCard from "./ProductCard";
import LatestProduct from "../spacal/LatestProduct";

function SearchProudct({ keyword }) {
  const [product,setProduct]=useState([])
  const orKeyword = decodeURIComponent(keyword);
  console.log(orKeyword);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/searchList?query=${orKeyword}`
        );
        // setSuggestion(res.data);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log("search error", error);
      }
    };
    getData();
  }, []);
  console.log(product);
  
  return <div>
  <Container>
    <Headding Headding={orKeyword} />
    <ProductContainer>
      { product.length > 0 ? (product.map((item) => (
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
      ))) : (
        <p className="text-red-500">Product not fuond</p>
      ) 
      }
    </ProductContainer>
  </Container>
    <LatestProduct/>
</div>;
}

export default SearchProudct;
