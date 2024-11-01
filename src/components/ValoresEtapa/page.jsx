"use client"
import Image from "next/image"
import { useState } from "react"
import { Slide } from "react-awesome-reveal"

export default function ValoresEtapa({ data }) {
  const { valores } = data
  const colores = ["#AF1685", "#309B42", "#005EB8", "#2DADBE"]
  const [selected, setSelected] = useState()
  return (
    <div className="relative w-full h-[440px] xs:h-[900px] sm:h-[1000px] md:h-[1000px] xl:h-[600px] flex flex-col lg:flex-row pt-10">
      <div className="relative w-6/12 xl:w-6/12 h-[700px]">
        <Slide triggerOnce direction="left" className="absolute top-0 left-0">
          <div className="relative w-[205px] xs:w-[280px] sm:w-[535px] md:w-[500px] lg:w-[400px] xl:w-[500px] aspect-square">
            <Image
              src={valores.imgAlt}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="cuadro verde"
            />
          </div>
        </Slide>
        <Slide
          triggerOnce
          direction="left"
          delay={100}
          className="absolute -top-2 left-10"
        >
          <div className="relative w-[250px] xs:w-[330px] sm:w-[590px] md:w-[600px] lg:w-[500px] xl:w-[600px] aspect-square">
            <Image
              src={valores.img}
              layout="fill"
              objectFit="contain"
              alt="cuadro verde"
            />
          </div>
        </Slide>
      </div>
      <Slide
        triggerOnce
        direction="right"
        className="w-full lg:w-6/12 xl:w-5/12 h-fit lg:h-full flex items-center px-3 xl:px-0"
      >
        <div className="w-full flex flex-col ">
          <div className="text-center">
            <h2 className="text-6xl font-[baloo-bold] text-azulLR mb-12 text center">
              Conoce nuestras características
            </h2>
          </div>
          {valores.items.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(item.id)}
              style={{ backgroundColor: `${colores[i]}` }}
              className={`w-full rounded-t-[40px] px-3 sm:px-5 pt-5 ${selected === item.id ? "pb-16" : "pb-12"}  text-white -mt-10 transition-all duration-500 `}
            >
              <div className="flex items-center">
                <div
                  className={`w-[90px] ${selected === item.id ? "text-6xl" : "text-5xl"} font-[baloo-bold] text-center flex items-center justify-center`}
                >
                  {i + 1}
                </div>
                <div
                  className={`w-10/12 text-start text-xl transition-all duration-500`}
                >
                  {selected === item.id ? item.descripcion2 : item.descripcion}
                </div>
              </div>
            </button>
          ))}
        </div>
      </Slide>
    </div>
  )
}
