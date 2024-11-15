"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"
import RequestMeetingButton from "../RequestMeetingButton/page"
import Link from "next/link"

const WelcomeTeacherResources = () => {
  return (
    <div className="firstSec relative w-full flex flex-col justify-center items-center pb-20 sm:pb-0 overflow-hidden">
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center">
        <Slide
          triggerOnce
          direction="left"
          className="sm:w-9/12 xl:w-8/12 xxl:w-7/12 flex justify-center lg:justify-end items-center"
        >
          <div className="relative w-full flex flex-col justify-center  lg:pl-32 xxl:pl-60 mt-5 mb-5 sm:mb-20 z-10 text-center">
            <h1 className="text-azulLR text-4xl xs:text-4xl sm:text-6xl xl:text-7xl font-[baloo-bold] px-3 xs:px-8 sm:px-0">
              Bienvenido a los <br /> recursos para <br /> maestros
            </h1>
            <div className="hidden lg:block">
              <p className=" text-xl xs:text-xl sm:text-3xl py-2 lg:pr-10 xl:pr-32 px-3 xs:px-8 sm:px-0">
                Explora nuestros recursos para profesores, profundiza en
                nuestras más de 400 lecciones, conoce nuestras construcciones y
                descubre todo lo que puedes aprender con cada una de ellas
              </p>
              <div className="pl-8 sm:pl-0 mt-10">
                <Link
                  href="/TeacherResources/ExploreLessons"
                  className="py-2 px-4 bg-azulLR text-white text-3xl font-[baloo-bold]"
                >
                  Explorar recursos
                </Link>
              </div>
            </div>
          </div>
        </Slide>

        <div className="relative w-full lg:w-6/12 h-[250px] sm:h-[600px] lg:h-[500px] xl:h-[600px]">
          <Slide
            triggerOnce
            direction="right"
            className="absolute top-10 sm:top-20 right-0"
          >
            <div className="relative w-[260px] xs:w-[320px] sm:w-[580px] lg:w-[450px] xl:w-[550px] h-[200px] sm:h-[350px] lg:h-[300px] xl:h-[400px] aspect-square bg-violetaLR rounded-tl-[100px]"></div>
          </Slide>
          <Slide
            triggerOnce
            direction="right"
            delay={100}
            className="absolute -top-2 right-0"
          >
            <div className="relative w-[290px] xs:w-[350px] sm:w-[650px] lg:w-[500px] xl:w-[700px] aspect-square">
              <Image
                src="/img/headerrpm.png"
                layout="fill"
                objectPosition="right"
                objectFit="contain"
                alt="cuadro verde"
              />
            </div>
          </Slide>
        </div>
        <div className="lg:hidden text-center pt-10">
          <p className=" text-xl xs:text-xl sm:text-3xl py-2 lg:pr-10 xl:pr-32 px-3 xs:px-8 sm:px-0">
            Explora nuestros recursos para profesores, profundiza en nuestras
            más de 400 lecciones, conoce nuestras construcciones y descubre todo
            lo que puedes aprender con cada una de ellas
          </p>
          <div className="pl-8 sm:pl-0 mt-10">
            <Link
              href="/TeacherResources/ExploreLessons"
              className="py-2 px-4 bg-azulLR text-white text-3xl font-[baloo-bold]"
            >
              Explorar recursos
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-20 -left-10 lg:right-10 hidden lg:block">
        <div className="relative w-[100px] sm:w-[200px] aspect-square ">
          <Image
            src="/img/legoRojo4.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="hidden sm:block absolute w-fit bottom-52 sm:bottom-10 xl:bottom-20 left-[45%]">
        <div className="relative w-[150px] sm:w-[150px] aspect-square">
          <Image
            src="/img/legoAzulCompleto.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute -top-9 -right-40 sm:-right-20 lg:left-[50%] lg:right-10 hidden sm:block">
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

export default WelcomeTeacherResources
