"use client"
import Image from "next/image"

export default function HelicopterMove() {
  return (
    <div className=" absolute top-0 left-[50%]">
      <div className="w-[350px] h-[250px] aspect-square relative overflow-hidden flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full object-cover">
          <div className="helicopter w-[300px] aspect-square relative">
            <Image
              src="/img/helicoptero.png"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              alt="helicoptero volando"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
