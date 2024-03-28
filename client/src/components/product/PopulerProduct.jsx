
import React from 'react'
import Container from '../Container'
import ProductContainer from './ProductContainer'
import Headding from '../Headding'
import ProductCard from './ProductCard'

function PopulerProduct() {
  return (
    <main>
      <Container>
        <Headding Headding={'populer product'}/>
        <ProductContainer>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </ProductContainer>
      </Container>
    </main>
  )
}

export default PopulerProduct