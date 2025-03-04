"use client";
import React from 'react'
import CategoryProduct from '@/components/product/CategoryProduct';
function page({params}) {

  const category = params?.catagory[0] ? decodeURIComponent(params.catagory[0]) : "";
  
  return (
    <div>
      <CategoryProduct category={category}/>
    </div>
  )
}

export default page