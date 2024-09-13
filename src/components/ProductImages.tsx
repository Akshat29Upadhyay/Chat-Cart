"use client"
import Image from "next/image"
import { useState } from "react"

const images = [
    {
        id:1,
        url:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id:2,
        url:"https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id:3,
        url:"https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id:4,
        url:"https://images.pexels.com/photos/163535/run-fitness-workout-train-163535.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
]

const ProductImages = () => {
    
    const [index, setIndex] = useState(0);

  return (
    <div>
        <div className="h-[500px] relative">
            <Image src={images[index].url}
                alt="" 
                fill 
                sizes="50vw" 
                className="object-cover rounded-md" 
            />
        </div>
        <div className="flex justify-between gap-4 mt-8">
            {images.map((img,i)=>(
                <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id}>
                    <Image 
                        src={img.url}
                        alt="" 
                        fill 
                        sizes="30vw" 
                        className="object-cover rounded-md" 
                        onClick={()=> setIndex(i)}
                    />
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default ProductImages
