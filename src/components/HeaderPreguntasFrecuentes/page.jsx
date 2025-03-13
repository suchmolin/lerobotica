"use client"
import Image from "next/legacy/image"
import { Slide } from "react-awesome-reveal"

export default function HeaderPreguntasFrecuentes() {
  return (
    <div className="firstSec relative w-full flex flex-col-reverse lg:flex-row justify-end">
      <div className="w-full lg:w-6/12 xl:w-4/12 flex justify-center items-center">
        <h1 className="text-5xl xs:text-6xl sm:text-8xl font-[baloo-bold] text-azulLR text-center lg:text-start pt-4 pb-7 lg:py-0 leading-none">
          Preguntas <br />
          frecuentes
        </h1>
      </div>
      <div className="relative w-full lg:w-7/12 h-[360px] sm:h-[600px] lg:h-[600px]">
        <Slide triggerOnce direction="right" className="absolute top-0 right-0">
          <div className="relative w-[260px] xs:w-[320px] sm:w-[550px] aspect-square">
            <Image
              src="/img/cuadroAmarillo.png"
              layout="fill"
              objectFit="contain"
              objectPosition="right"
              alt="cuadro verde"
            />
          </div>
        </Slide>
        <Slide
          triggerOnce
          direction="right"
          delay={100}
          className="absolute -top-2 right-0"
        >
          <div className="relative w-[290px] xs:w-[360px] sm:w-[600px] aspect-square">
            <Image
              src="/img/legoEscalera.png"
              layout="fill"
              objectPosition="right"
              objectFit="contain"
              alt="cuadro verde"
            />
          </div>
        </Slide>
      </div>
      <div className="absolute -top-10 left-[30%] hidden md:block">
        <div className="relative aspect-square w-[130px] scale-x-[-1]">
          <Image
            src="/img/legoAzul.png"
            layout="fill"
            objectFit="contain"
            alt="logo de lego"
          />
        </div>
      </div>
      <div className="absolute bottom-0 -left-10 hidden md:block">
        <div className="relative aspect-square w-[200px]">
          <Image
            src="/img/legoRojo4.png"
            layout="fill"
            objectFit="contain"
            alt="logo de lego"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-[40%] hidden lg:block">
        <div className="relative aspect-square w-[200px]">
          <Image
            src="/img/legoRojo.png"
            layout="fill"
            objectFit="contain"
            alt="logo de lego"
          />
        </div>
      </div>
    </div>
  )
}
