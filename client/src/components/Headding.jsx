import React from 'react'

function Headding({Headding,className}) {
  return (
    <h1 className={` ${className} text-3xl text-center sm:text-start mb-6 capitalize font-semibold`}>{Headding}</h1>
  )
}

export default Headding