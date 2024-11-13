"use client"
import { Slide } from "react-awesome-reveal"
import FAQBox from "../FAQBox/page"
import { data } from "@/data/faq"
import Image from "next/image"

export default function FAQ() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center pb-20 sm:pb-0  overflow-hidden">
      <div className="sm:absolute -top-36 lg:-top-5 xl:top-0 right-0">
        <div className="relative aspect-square w-[175px]">
          <Image
            src="/img/legoRojo3.png"
            layout="fill"
            objectFit="contain"
            alt="logo de lego"
          />
        </div>
      </div>
      <h2 className="text-5xl xs:text-6xl text-azulLR font-[baloo-bold] text-center py-2 sm:py-10">
        Preguntas Frecuentes
      </h2>
      <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-center items-center">
        <Slide
          triggerOnce
          direction="left"
          className="w-11/12 lg:w-11/12 xl:w-7/12 flex justify-center lg:justify-end items-center"
        >
          <FAQBox data={data} />
        </Slide>

        <div className="relative w-full lg:w-6/12 h-[360px] sm:h-[600px] lg:h-[500px] xl:h-[600px]">
          <Slide
            triggerOnce
            direction="right"
            className="absolute top-0 right-0"
          >
            <div className="relative w-[260px] xs:w-[320px] sm:w-[550px] lg:w-[350px] xl:w-[550px] aspect-square">
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
            <div className="relative w-[290px] xs:w-[360px] sm:w-[600px] lg:w-[400px] xl:w-[600px] aspect-square">
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
      </div>
      <div className="absolute top-20 lg:top-0 left-0 hidden sm:block">
        <div className="relative aspect-square w-[175px]">
          <Image
            src="/img/legoAzulBlur2.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="logo de lego"
          />
        </div>
      </div>

      <div className="absolute bottom-0 right-0">
        <div className="relative aspect-square w-[175px]">
          <Image
            src="/img/legoAmarillo2.png"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
            alt="logo de lego"
          />
        </div>
      </div>
    </div>
  )
}
