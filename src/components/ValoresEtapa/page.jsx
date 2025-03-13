"use client"
import Image from "next/legacy/image"
import { useState } from "react"
import { Slide } from "react-awesome-reveal"

export default function ValoresEtapa({ data }) {
  const { valores } = data
  const colores = ["#AF1685", "#309B42", "#005EB8", "#2DADBE"]
  const [selected, setSelected] = useState()
  return (
    <>
      <div className="text-center py-10 flex justify-center">
        <div className="hidden sm:block relative w-[130px] aspect-square rotate-180">
          <Image
            src="/img/legoAmarillo.png"
            objectFit="contain"
            layout="fill"
            alt="lego amarillo"
          />
        </div>
        <h2 className="w-[600px] text-4xl xs:text-4xl sm:text-6xl font-[baloo-bold] text-azulLR text center">
          Conoce nuestras características
        </h2>
        <div className="hidden sm:block relative w-[130px] aspect-square">
          <Image
            src="/img/legoVerde.png"
            objectFit="contain"
            layout="fill"
            alt="lego amarillo"
          />
        </div>
      </div>
      <div className="relative w-full xl:h-[600px] flex flex-col lg:flex-row pb-20">
        <div className="relative w-6/12 xl:w-6/12">
          <Slide
            triggerOnce
            direction="left"
            className="lg:absolute top-0 left-0 pb-10 lg:pb-0"
          >
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
          className="w-full lg:w-6/12 xl:w-5/12 h-fit lg:h-full flex items-center px-3 xl:px-0 mt-10 lg:mt-0 justify-center"
        >
          <div className="w-11/12 sm:w-8/12 lg:w-full flex flex-col items-center">
            {valores.items.map((item, i) => (
              <div
                key={item.id}
                className="flex w-full mb-5 items-center flex-col sm:flex-row justify-center"
              >
                <div className="w-[70px] relative aspect-square mb-5 sm:mb-0">
                  <Image
                    src={item.icon}
                    layout="fill"
                    objectFit="contain"
                    alt={item.titulo}
                  />
                </div>
                <p className="sm:w-10/12 text-lg sm:text-xl sm:ml-5 text-center sm:text-start">
                  {item.titulo && (
                    <span className="font-bold">{item.titulo} </span>
                  )}
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </Slide>
      </div>
    </>
  )
}
