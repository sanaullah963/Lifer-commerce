import SearchProudct from '@/components/product/SearchProudct'
function page({ params }) {
  return (
    <div>
      <SearchProudct keyword={params.keyword[0]}/>
    </div>
  )
}

export default page