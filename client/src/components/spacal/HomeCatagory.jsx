import React from 'react'
import Container from '../Container'
import Headding from '../Headding'

function HomeCatagory() {
  return (
    <div>
      <Container>
        <Headding Headding="Catagory" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
          <p className='bg-gray-100'>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </Container>
    </div>
  )
}

export default HomeCatagory