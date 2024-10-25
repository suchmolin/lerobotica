"use client"
import { Slide } from "react-awesome-reveal"
import FAQBox from "../FAQBox/page"
import { data } from "@/data/faq"
import Image from "next/image"

export default function FAQ() {
  return (
    <div className="relative w-full flex flex-col justify-center">
      <h2 className="text-6xl text-azulLR font-[baloo-bold] text-center py-10">
        Preguntas Frecuentes
      </h2>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-6/12 flex justify-end items-center">
          <FAQBox data={data} />
        </div>

        <div className="relative w-6/12 h-[600px]">
          <Slide
            triggerOnce
            direction="right"
            className="absolute top-0 right-0"
          >
            <div className="relative w-[550px] aspect-square">
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
            className="absolute -top-2 right-10"
          >
            <div className="relative w-[600px] aspect-square">
              <Image
                src="/img/legoEscalera.png"
                layout="fill"
                objectFit="contain"
                alt="cuadro verde"
              />
            </div>
          </Slide>
        </div>
      </div>
      <div className="absolute top-0 left-0">
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
      <div className="absolute top-0 right-0">
        <div className="relative aspect-square w-[175px]">
          <Image
            src="/img/legoRojo3.png"
            layout="fill"
            objectFit="contain"
            alt="logo de lego"
          />
        </div>
      </div>
      <div className="absolute -bottom-20 right-0">
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
