"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"

export default function SistemaHome() {
  return (
    <div className="relative w-full h-[600px] flex justify-center">
      <div className="relative w-6/12">
        <Slide triggerOnce direction="left" className="absolute top-0 left-0">
          <div className="relative w-[600px] aspect-square">
            <Image
              src="/img/cuadroVerde.png"
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
          <div className="relative w-[700px] aspect-square">
            <Image
              src="/img/legoCruz.png"
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
        className="w-6/12 h-full flex items-center"
      >
        <div className="w-full h-full relative flex items-center">
          <div className="flex flex-col justify-center pr-20 pl-5">
            <h2 className="text-azulLR text-7xl font-[baloo-bold]">
              Sistema de <br /> Aprendizaje LEGO.
            </h2>
            <p className="text-3xl py-2">
              Práctico, intuitivo, inclusivo, lúdico y adaptable preparando al
              estudiante con habilidades y conocimientos STEAM.
            </p>
          </div>
          <div className="absolute top-10 right-32">
            <div className="relative aspect-square w-[130px]">
              <Image
                src="/img/legoAzul.png"
                layout="fill"
                objectFit="contain"
                alt="logo de lego"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-52">
            <div className="relative aspect-square w-[175px]">
              <Image
                src="/img/legorojo.png"
                layout="fill"
                objectFit="contain"
                alt="logo de lego"
              />
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}
