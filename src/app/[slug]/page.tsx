// import Image from "next/image"
import ProductImages from "@/components/ProductImages"
import CustomizeProducts from "@/components/CustomizeProducts"
import Add from "@/components/Add"
const SinglePage = () => {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex col lg:flex-row gap-16">
      {/*IMAGE*/}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/*TEXT*/}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className=" text-4xl font-semibold">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum 
          commodi asperiores cupiditate natus. Sunt libero ab odit autem accusamus 
          consectetur sequi id. Provident voluptas fugiat odio aliquam ratione 
          repudiandae.
        </p>
        <div className="h-[2px] bg-gray-100" />
          <div className="flex item-center gap-4">
            <h3 className="text-xl text-gray-500 line-through mt-0.5">&#8377;6000</h3>
            <h2 className="font-medium text-2xl">&#8377;4500</h2>
          </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
            consequatur aliquam, omnis inventore cumque suscipit beatae voluptatem, ea 
            esse tenetur facilis dignissimos molestias quas autem minus nam quibusdam 
            ut? Reprehenderit.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
            consequatur aliquam, omnis inventore cumque suscipit beatae voluptatem, ea 
            esse tenetur facilis dignissimos molestias quas autem minus nam quibusdam 
            ut? Reprehenderit.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
            consequatur aliquam, omnis inventore cumque suscipit beatae voluptatem, ea 
            esse tenetur facilis dignissimos molestias quas autem minus nam quibusdam 
            ut? Reprehenderit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
