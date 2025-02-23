'use client'
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductContainer from '../product/ProductContainer'
import Cookies from "js-cookie";
import LoadingSpinner from '../LoadingSpinner'
import axios from 'axios'
import ProductCard from '../product/ProductCard'
import { useRouter } from "next/navigation";
function All_Product() {
  const [allProduct, setProduct] = useState([]);
  const router = useRouter();
  useEffect(() => {
     const token = Cookies.get("clientToken");
        if (!token) return router.push("/");
    const fatchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/product/admin/allProduct`,{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProduct(res.data);
        console.log(res);
      } catch (err) {
        console.log("internal server error");
      }
    };
    fatchData();
    
  }, []);
  console.log(allProduct);

  return (
    <main>
      <Container className={""}>
        {/* image must be 1:1 */}
        {allProduct.length <= 0 ? (
          // lodding spinner
          <div className="flex justify-start">
            <LoadingSpinner />
            <p>empty list</p>
          </div>
        ) : (
          <ProductContainer>

            {allProduct.length > 0 && allProduct.map((i) => (
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