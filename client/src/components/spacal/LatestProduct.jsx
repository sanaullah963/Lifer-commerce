import React from 'react'
import Container from '../Container'
import Headding from '../Headding'
import ProductCard from '../product/ProductCard'

function LatestProduct() {
  return (
    <main>
      <Container className={''}>
        <Headding Headding={'latest product'}/>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {/* image must be 1:1 */}
        <ProductCard deliveryFree={true}/>
        <ProductCard/>
        <ProductCard deliveryFree={true}/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
      </Container>
    </main>
  )
}

export default LatestProduct