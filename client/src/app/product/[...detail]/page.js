import PopulerProduct from '@/components/product/PopulerProduct'
import ProductDetail from '@/components/product/ProductDetail'
import LatestProduct from '@/components/spacal/LatestProduct'

import React from 'react'

function page({ params }) {
  return (
    <main >
      <ProductDetail params={params}/>
      <LatestProduct />
    </main>
  )
}

export default page