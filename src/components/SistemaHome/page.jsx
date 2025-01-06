"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"
import RobotsEscondidos from "../RobotsEscondidos/page"

export default function SistemaHome() {
  return (
    <>
      <div className="relative w-full flex flex-col lg:flex-row -mt-20 overflow-hidden pt-20 lg:pt-0">
        <div className="absolute hidden md:block top-5 xxl:top-10 right-0 xl:right-32">
          <div className="relative aspect-square w-[100px] xl:w-[150px]">
            <Image
              src="/img/legoAzul.png"
              layout="fill"
              objectFit="contain"
              alt="logo de lego"
            />
          </div>
        </div>
        <div className="w-full flex lg:hidden justify-center">
          <h2 className="block lg:hidden w-[360px] sm:w-[750px] lg:w-fit text-azulLR text-3xl xs:text-4xl sm:text-6xl font-[baloo-bold] text-center">
            Descubre el Sistema de Aprendizaje LEGO
          </h2>
        </div>
        <div className="relative w-[290px] xs:w-[360px] sm:w-[600px] xl:w-[700px] xxl:w-[970px] aspect-square">
          <Slide
            triggerOnce
            direction="left"
            className="absolute w-9/12 top-0 left-0"
          >
            <div className="relative w-full aspect-square">
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
            className="absolute w-11/12 -top-2 left-10"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="/img/legoCruznueva.png"
                layout="fill"
                objectFit="contain"
                alt="cuadro verde"
              />
            </div>
          </Slide>
        </div>
        <div className="w-full sm:w-fit flex justify-center">
          <Slide
            triggerOnce
            direction="right"
            className="w-[360px] sm:w-[660px] lg:w-[500px] xl:w-[600px] xxl:w-[700px]  lg:-ml-10 -mt-20 sm:-mt-32 pb-10 lg:pb-0"
          >
            <div className="w-full h-full relative flex items-center justify-center lg:justify-normal">
              <div className="flex flex-col justify-center xxl:pr-20 sm:pl-7 xl:pl-5">
                <h2 className="hidden lg:block w-full lg:w-fit text-azulLR text-4xl sm:text-5xl xl:text-6xl font-[baloo-bold] text-center lg:text-start">
                  Descubre el Sistema de Aprendizaje LEGO
                </h2>
                <p className="text-xl xs:text-2xl xl:text-2xl py-2 text-center lg:text-start pb-10 xs:pb-0">
                  Estimula la creatividad y el pensamiento crítico de tu hijo,
                  gracias a su enfoque lúdico e inclusivo con diseño práctico e
                  intuitivo.
                </p>
              </div>

              <div className="absolute hidden lg:block bottom-10 xxl:bottom-32 right-52">
                <div className="relative aspect-square w-[180px] xxl:w-[230px]">
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
        <div className="hidden sm:block">
          <RobotsEscondidos
            position="bottom-[40%] md:bottom-0 xl:bottom-32 right-0"
            idRobot="sistemahomerobot"
            click={true}
          />
        </div>
        <div className="sm:hidden">
          <RobotsEscondidos idRobot="sistemahomerobot" size="sm" />
        </div>
      </div>
    </>
  )
}
