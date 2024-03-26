import React from 'react'

function Headding({Headding,className}) {
  return (
    <h1 className={` ${className} text-center text-3xl mt-16`}>{Headding}</h1>
  )
}

export default Headding