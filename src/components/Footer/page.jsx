import React from "react"
import RequestMeetingButton from "../RequestMeetingButton/page"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const imgFooter = [
    {
      img: "/img/robotfoot1.png",
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "/img/robotfoot2.png",
      alt: "footerimage2",
      hideOnResponsive: true,
    },
    {
      img: "/img/robotfoot3.png",
      alt: "footerimage3",
      hideOnResponsive: true,
      onmobile: true,
    },
    {
      img: "/img/robotfoot4.png",
      alt: "footerimage4",
      hideOnResponsive: true,
      onmobile: true,
    },
    {
      img: "/img/robotfoot5.png",
      alt: "footerimage5",
      onmobile: true,
    },
    {
      img: "/img/robotfoot6.png",
      alt: "footerimage6",
    },
    {
      img: "/img/robotfoot7.png",
      alt: "footerimage7",
    },
  ]
  return (
    <footer className="w-full mt-24">
      <div className="flex gap-5 justify-center w-full z-10 mb-10 ">
        {imgFooter.map((img) => {
          return (
            <div
              key={img.alt}
              className={`w-[100px] aspect-square relative ${img.onmobile ? "block" : "hidden"} sm:block`}
            >
              <Image
                src={img.img}
                layout="fill"
                objectFit="contain"
                alt={img.alt}
              />
            </div>
          )
        })}
      </div>
      <div className="w-full border-t-2 border-t-gray-100 flex justify-center items-center flex-col bg-gray-100">
        <div className="w-10/12 lg:w-7/12 flex flex-col sm:flex-row gap-4 items-center justify-center px-10 md:px-0 py-5 bg-[#FFD100] -mt-9">
          <h2 className="text-lg md:text-2xl  font-[baloo-bold] text-center sm:text-start">
            Trae a Lerobotica a tu escula o distrito
          </h2>
          <RequestMeetingButton />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-col lg:flex-row items-center lg:items-start justify-center py-10 text-xl">
          <div className="flex w-full sm:w-10/12 lg:w-6/12 xl:w-6/12 py-5 justify-center">
            <div className="hidden sm:block w-[150px] -mt-10 mr-5 h-[200px] relative">
              <Image
                src="/img/Logo-Lerobotica-RGB.png"
                layout="fill"
                objectFit="contain"
                alt="logo de lerobotica"
              />
            </div>
            <div className="w-11/12 sm:w-9/12 px-4 mt-5 md:mt-0 flex flex-col items-center justify-center md:justify-start md:text-start  text-center sm:text-start">
              <p className="w-64 xs:w-80 sm:w-8/12 mb-4 py-1">
                Mantente al día con todas las iniciativas y actividades de
                Lerobótica
              </p>
              <div className="flex items-center">
                <input
                  className="w-64 xs:w-80 sm:w-96 h-8 px-3"
                  placeholder="Correo Electrónico"
                  type="email"
                />
                <button className="-ml-7 hover:scale-110 transition-all duration-300">
                  <img
                    className="w-[19px] aspect-square"
                    src="/img/sendIcon.png"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center text-center sm:text-start">
            <div className="px-7 flex flex-col ">
              <Link
                href="/QuienesSomos"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Pre-escolar
              </Link>
              <Link
                href="/Soluciones"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Primaria Baja
              </Link>
              <Link
                href="/Contacto"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Primaria Alta
              </Link>
              <Link
                href="/Contacto"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Recursos de Maestros
              </Link>
            </div>
            <div className="hidden sm:flex px-7 flex-col ">
              <Link
                href="/quienes-somos"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                ¿Quiénes somos?
              </Link>
              <Link
                href="/soluciones"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Soluciones
              </Link>
              <Link
                href="/blog"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Blog
              </Link>
              <Link
                href="/contactanos"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Contáctanos
              </Link>
              <Link
                href="/preguntas-frecuentes"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Preguntas Frecuentes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
