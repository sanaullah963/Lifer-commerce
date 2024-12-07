'use client'
import React from "react";
import Container from "../Container";
import { useRouter } from "next/navigation";


function Home() {
  const router = useRouter()
  return (
    <Container>
      <div className="grid bg-slate-200 content-center gap-10 items-center grid-flow-row grid-cols-2 md:grid-cols-3">
        {/* total product */}
        <div onClick={()=>router.push('google.com')} className="bg-green-400 h-40 flex flex-col capitalize font-semibold rounded-md justify-center items-center">
          <p>total product</p>
          <p>500</p>
        </div>
        {/* total castomer */}
        <div onClick={()=>router.push('google.com')} className="bg-green-400 h-40  flex flex-col capitalize font-semibold rounded-md justify-center items-center">
          <p>total product</p>
          <p>500</p>
        </div>
        {/* total sell */}
        <div onClick={()=>router.push('google.com')} className="bg-green-400 h-40  flex flex-col capitalize font-semibold rounded-md justify-center items-center">
          <p>total sell</p>
          <p>500</p>
        </div>
      </div>
    </Container>
  );
}

export default Home;
