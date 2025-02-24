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
  const [allProduct, setAllProduct] = useState([]);
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
        setAllProduct(res.data);
      } catch (err) {
        console.log("internal server error");
      }
    };
    fatchData();
    
  }, []);

  // allProduct?.user && Cookies.set("numOrEmail", allProduct.user.numberORemail);
  
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

            {allProduct.allProduct.length > 0 && allProduct.allProduct.map((i) => (
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