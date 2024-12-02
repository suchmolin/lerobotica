"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"

export default function HeaderEtapa({ data }) {
  return (
    <div className="firstSec relative w-full flex flex-col justify-center items-center pb-10 sm:pb-0 overflow-hidden">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
        <Slide
          triggerOnce
          direction="left"
          className="sm:w-9/12 xl:w-8/12 xxl:w-7/12 flex justify-center lg:justify-end items-center"
        >
          <div className="relative w-full flex flex-col justify-center  lg:pl-32 xxl:pl-60 mt-5 mb-5 sm:mb-20 z-10">
            <h1 className="text-azulLR text-4xl xs:text-5xl sm:text-6xl xl:text-7xl font-[baloo-bold] px-3 xs:px-8 sm:px-0 text-center sm:text-start">
              {data.title}
              <br />
              {data.edad}
            </h1>
            <div className="hidden lg:block">
              {data.descripcion.map((item) => (
                <p
                  key={item.id}
                  className="text-xl py-2 lg:pr-10 xl:pr-32 px-3 xs:px-8 sm:px-0 mb-3"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Slide>

        <div className="relative w-full lg:w-6/12 h-[300px] xs:h-[350px] sm:h-[600px] lg:h-[500px] xl:h-[600px]">
          <Slide
            triggerOnce
            direction="right"
            className="absolute top-0 right-0"
          >
            <div className="relative w-[260px] xs:w-[320px] sm:w-[580px] lg:w-[450px] xl:w-[550px] aspect-square">
              <Image
                src={data.imgAlt}
                layout="fill"
                objectFit="contain"
                objectPosition="right"
                alt="cuadro Azul"
                priority
              />
            </div>
          </Slide>
          <Slide
            triggerOnce
            direction="right"
            delay={100}
            className="absolute -top-2 right-0"
          >
            <div className="relative w-[290px] xs:w-[350px] sm:w-[650px] lg:w-[500px] xl:w-[600px] aspect-square">
              <Image
                src={data.img}
                layout="fill"
                objectPosition="right"
                objectFit="contain"
                alt="cuadro verde"
                priority
              />
            </div>
          </Slide>
        </div>
        <div className="block lg:hidden sm:px-5 text-center">
          {data.descripcion.map((item) => (
            <p
              key={`parrafo${item.id}`}
              className="text-xl py-2 lg:pr-10 xl:pr-32 px-3 xs:px-8 sm:px-0 mb-3"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute top-20 -left-10 lg:right-10 hidden lg:block">
        <div className="relative w-[100px] sm:w-[130px] aspect-square scale-x-[-1] ">
          <Image
            src="/img/legoRojo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute bottom-52 sm:bottom-10 xl:bottom-20 left-0 xl:left-3 xxl:left-10 hidden lg:block">
        <div className="relative w-[100px] sm:w-[130px] aspect-square">
          <Image
            src="/img/legoAmarillo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute -top-9 -right-40 sm:-right-20 lg:left-[45%] hidden xs:block">
        <div className="relative w-[230px] aspect-square">
          <Image
            src="/img/legoVerdeGrande.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
    </div>
  )
}
