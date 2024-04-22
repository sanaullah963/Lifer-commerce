import Buy from '@/components/buy/buy'
import React from 'react'

function page({params}) {
  return (
    <main>
      <Buy params={params}/>
    </main>
  )
}

export default page