import React from 'react'

function ProductDetailHeadding({headding}) {
  return (
    <div>
        <h1 className="font-semibold text-xl capitalize">{headding}</h1>
        <div className="w-[60%] text-start">
          <hr className="bg-gray-400 h-[2px] mb-3" />
        </div>
      </div>
  )
}

export default ProductDetailHeadding