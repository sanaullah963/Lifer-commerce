import PopulerProduct from '@/components/product/PopulerProduct'
import ProductDetail from '@/components/product/ProductDetail'

import React from 'react'

function page({ params }) {
  return (
    <main >
      <ProductDetail params={params}/>
      <PopulerProduct/>
    </main>
  )
}

export default page