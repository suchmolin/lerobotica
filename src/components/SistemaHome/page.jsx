"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"

export default function SistemaHome() {
  return (
    <>
      <div className="relative w-full h-[440px] xs:h-[510px] sm:h-[730px] md:h-[800px] lg:h-[600px] flex flex-col-reverse lg:flex-row justify-end lg:justify-center">
        <div className="relative w-7/12 xxl:w-6/12">
          <Slide triggerOnce direction="left" className="absolute top-0 left-0">
            <div className="relative w-[205px] xs:w-[280px] sm:w-[535px] md:w-[600px] lg:w-[500px] xl:w-[600px] aspect-square">
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
            <div className="relative w-[250px] xs:w-[330px] sm:w-[590px] md:w-[700px] lg:w-[600px] xl:w-[700px] aspect-square">
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
          className="lg:w-5/12 xxl:w-6/12 h-fit lg:h-full flex items-center"
        >
          <div className="w-full h-full relative flex items-center pt-20 sm:pt-32 lg:pt-0 justify-center lg:justify-normal">
            <div className="flex flex-col justify-center xxl:pr-20 sm:pl-7 xl:pl-5">
              <h2 className="text-azulLR text-5xl sm:text-6xl xl:text-7xl font-[baloo-bold] text-center lg:text-start">
                Sistema de <br /> Aprendizaje LEGO.
              </h2>
              <p className="text-2xl xl:text-3xl py-2 hidden lg:block">
                Práctico, intuitivo, inclusivo, lúdico y adaptable preparando al
                estudiante con habilidades y conocimientos STEAM.
              </p>
            </div>
            <div className="absolute -top-10 sm:top-0 xxl:top-10 right-[30%] sm:right-[40%] lg:right-32">
              <div className="relative aspect-square w-[130px]">
                <Image
                  src="/img/legoAzul.png"
                  layout="fill"
                  objectFit="contain"
                  alt="logo de lego"
                />
              </div>
            </div>
            <div className="absolute hidden lg:block -bottom-10 xxl:bottom-0 right-52">
              <div className="relative aspect-square w-[175px]">
                <Image
                  src="/img/legoRojo.png"
                  layout="fill"
                  objectFit="contain"
                  alt="logo de lego"
                />
              </div>
            </div>
          </div>
        </Slide>
      </div>
      <p className="text-2xl xl:text-3xl py-2 lg:hidden px-2 xs:px-5 text-center relative pb-10 flex flex-col items-center">
        Práctico, intuitivo, inclusivo, lúdico y adaptable preparando al
        estudiante con habilidades y conocimientos STEAM.
        <div className="lg:hidden ">
          <div className="relative aspect-square w-[175px]">
            <Image
              src="/img/legoRojo.png"
              layout="fill"
              objectFit="contain"
              alt="logo de lego"
            />
          </div>
        </div>
      </p>
    </>
  )
}
