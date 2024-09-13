import Image from "next/image"
import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*CAMPAIGN*/}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 p-4 flex flex-col items-center justify-between gap-8">
          <h1 className="text-4xl mt-6 font-semibold leading:[48px] text-gray-700">Grab upto 50% off on <br/>Selected Products</h1>
          <button className="rounded-3xl bg-lama text-white px-5 py-3 text-sm mb-9">Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain"/>
        </div>
      </div>
      {/*Filter*/}
      <Filter />
      {/*Products*/}
      <h1 className="mt-12 text-xl font-semibold">ProductCategory for you</h1>
      <ProductList />
    </div> 
  )
}

export default ListPage
