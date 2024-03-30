import React from 'react'

function BorderContainer({children,className}) {
  return (
    <div className="p-2 sm:p-3">
      <div className={` ${className} border-[4px] max-w-md  sm:max-w-[650px] md:max-w-[820px] lg:max-w-[1000px] mx-auto rounded-md p-1 sm:p-2 md:py-5 shadow-lg shadow-gray-400 my-10`}>{children}</div>
    </div>
  )
}

export default BorderContainer