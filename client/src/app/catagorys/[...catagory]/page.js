"use client";
import React from 'react'
import CategoryProduct from '@/components/product/CategoryProduct';
import LatestProduct from '@/components/spacal/LatestProduct';
function page({params}) {

  const category = params?.catagory[0] ? decodeURIComponent(params.catagory[0]) : "";
  
  return (
    <div>
      <CategoryProduct category={category}/>
      <LatestProduct/>
    </div>
  )
}

export default page