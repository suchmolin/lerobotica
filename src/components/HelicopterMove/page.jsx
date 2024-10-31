"use client"
import Image from "next/image"
import { useEffect } from "react"

export default function HelicopterMove() {
  useEffect(() => {
    let body = document.querySelector("body")
    let helicopter = document.querySelector(".helicopter")

    body.addEventListener("mousemove", (e) => {
      let x = 20 - e.clientX * 0.07
      let y = 20 - e.clientY * 0.07

      helicopter.style.transform = `translate(${x}px, ${y}px)`
    })
  }, [])

  return (
    <div className=" absolute top-5 left-20 lg:left-0 lg:-left-5">
      <div className="w-[350px] h-[250px] aspect-square relative  flex justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-full object-cover">
          <div className="helicopter w-[180px] sm:w-[300px] aspect-square relative">
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
