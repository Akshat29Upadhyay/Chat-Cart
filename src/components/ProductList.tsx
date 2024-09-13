import Link from "next/link"
import Image from "next/image"

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image
                src="https://images.pexels.com/photos/17719773/pexels-photo-17719773/free-photo-of-plant-in-flowerpot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
                src="https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
            />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">&#8377;49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white"> Add To Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image
                src="https://images.pexels.com/photos/17719773/pexels-photo-17719773/free-photo-of-plant-in-flowerpot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
                src="https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
            />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">&#8377;49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white"> Add To Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image
                src="https://images.pexels.com/photos/17719773/pexels-photo-17719773/free-photo-of-plant-in-flowerpot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
                src="https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
            />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">&#8377;49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white"> Add To Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
            <Image
                src="https://images.pexels.com/photos/17719773/pexels-photo-17719773/free-photo-of-plant-in-flowerpot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
                src="https://images.pexels.com/photos/27367865/pexels-photo-27367865/free-photo-of-mount-everest.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
            />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">&#8377;49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs w-max hover:bg-lama hover:text-white"> Add To Cart</button>
      </Link>
    </div>
  )
}

export default ProductList
