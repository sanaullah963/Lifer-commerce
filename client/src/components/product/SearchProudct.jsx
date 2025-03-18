"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  
  return <div>SearchProudct</div>;
}

export default SearchProudct;
