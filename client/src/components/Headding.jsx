import React from 'react'

function Headding({Headding,className}) {
  return (
    <h1 className={` ${className} text-green-500 text-xl sm:text-2xl text-start pb-1 border-b-2 border-b-green-400 inline-block pe-5 mb-3 md:mb-6 capitalize font-semibold`}>{Headding}</h1>
  )
}

export default Headding