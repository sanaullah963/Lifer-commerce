'use client'
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductContainer from '../product/ProductContainer'
import Headding from '../Headding'
import LoadingSpinner from '../LoadingSpinner'
import axios from 'axios'
import ProductCard from '../product/ProductCard'

function All_Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/latest-product`
        );
        setProduct(res.data);
        console.log(res);
      } catch (err) {
        console.log("internal server error");
      }
    };
    fatchData();
  }, []);


  return (
    <main>
      <Container className={""}>
        {/* image must be 1:1 */}
        {product.length <= 0 ? (
          // lodding spinner
          <div className="flex justify-start">
            <LoadingSpinner />
            {
              
            }
            <p>empty list</p>
          </div>
        ) : (
          <ProductContainer>
            {product.map((i) => (
              <ProductCard
                key={i._id}
                deliveryFree={i.deliveryFree}
                title={i.title}
                price={i.price}
                sellPrice={i.sellPrice}
                imageUrl={i.imageUrl}
                percentage={i.percentage}
                _id={i._id}
              />
            ))}
          </ProductContainer>
          
        )}
      </Container>
    </main>
  )
}

export default All_Product