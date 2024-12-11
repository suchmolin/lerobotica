"use client"
import Image from "next/image"
import { data } from "@/data/opinionesProfesores"
import { useEffect, useState } from "react"
import { FaPlay } from "react-icons/fa"

export default function OpinionesMestros() {
  const [vidSelected, setVidSelected] = useState(data[0].id)
  useEffect(() => {
    console.log(vidSelected.id)
  }, [vidSelected])
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10 sm:pb-20 overflow-hidden">
      <div className="relative w-[100px] sm:w-[180px] aspect-square block lg:hidden">
        <Image
          src="/img/legoRojo.png"
          layout="fill"
          objectFit="contain"
          alt="cubo de lego verde"
        />
      </div>
      <h2 className="text-4xl xs:text-5xl sm:text-6xl text-azulLR font-[baloo-bold] text-center pb-5 sm:py-10">
        Opiniones de los <br /> maestros
      </h2>
      <div className="w-[290px] xs:w-[370px] sm:w-[620px] md:w-[760px] lg:w-[1000px] flex gap-5 sm:gap-10 justify-center flex-wrap">
        {data.map((item) => {
          const sel = vidSelected === item.id
          return sel ? (
            <div className="w-full flex flex-col items-center">
              <div className="w-full px-10 sm:px-32 flex justify-between -mb-1">
                <div className="w-4/12 h-[35px] sm:h-[50px] bg-amarilloLR rounded-t-2xl"></div>
                <div className="w-4/12 h-[35px] sm:h-[50px] bg-amarilloLR rounded-t-2xl"></div>
              </div>
              <div className="w-11/12 justify-center items-center rounded-xl sm:rounded-2xl bg-amarilloLR p-3 sm:p-5">
                <video
                  key={item.id}
                  className={`rounded-lg sm:rounded-xl w-full`}
                  controls
                  src={item.src}
                  poster={item.poster}
                ></video>
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                setVidSelected(item.id)
                setTimeout(() => {
                  document.querySelector("video").play()
                }, 300)
              }}
              key={item.id}
              className={`relative rounded-2xl w-3/12 h-[100px] sm:h-[130px] lg:h-[170px] order-2 transition-all duration-700 cursor-pointer flex items-center justify-center overflow-hidden group`}
            >
              <Image
                src={item.poster}
                objectFit="cover"
                objectPosition="top"
                layout="fill"
                alt="item.id"
                className="blur-[2px] group-hover:blur-0 transition-all duration-300"
              />
              <FaPlay className="text-3xl sm:text-5xl opacity-20 text-white" />
            </button>
          )
        })}
      </div>
      <div className="absolute -top-10 left-0 hidden lg:block">
        <div className="relative w-[250px] aspect-square">
          <Image
            src="/img/legoRojo2.png"
            objectFit="contain"
            layout="fill"
            objectPosition="left"
            alt="cubo de lego rojo"
          />
        </div>
      </div>
      <div className="absolute -top-62 right-0 hidden lg:block">
        <div className="relative w-[150px] aspect-square">
          <Image
            src="/img/legoAzulBlur.png"
            objectFit="contain"
            layout="fill"
            objectPosition="right"
            alt="cubo de lego rojo"
          />
        </div>
      </div>
    </div>
  )
}
