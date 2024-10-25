import React from "react"
import RequestMeetingButton from "../RequestMeetingButton/page"
import Image from "next/image"

const Footer = () => {
  const imgFooter = [
    {
      img: "/img/robotfoot1.png",
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "/img/robotfoot2.png",
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "/img/robotfoot3.png",
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "/img/robotfoot4.png",
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "/img/robotfoot5.png",
      alt: "footerimage",
    },
    {
      img: "/img/robotfoot6.png",
      alt: "footerimage",
    },
    {
      img: "/img/robotfoot7.png",
      alt: "footerimage",
    },
  ]
  return (
    <footer className="w-full mt-24">
      <div className="flex gap-5 justify-center w-full z-10 mb-10">
        {imgFooter.map((img) => {
          return (
            <div key={img.alt} className="w-[100px] aspect-square relative">
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
        <div className="w-full md:w-7/12 flex gap-4 items-center justify-center px-10 md:px-0 py-5 bg-[#FFD100] -mt-9">
          <h2 className="text-lg md:text-2xl  font-[baloo-bold] ">
            Trae a Lerobotica a tu escula o distrito
          </h2>
          <RequestMeetingButton />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center py-10 text-xl">
          <div className="w-[150px] -mt-10 mr-5 h-[200px] relative">
            <Image
              src="/img/Logo-Lerobotica-RGB.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="px-4 mt-5 md:mt-0 flex flex-col justify-center md:justify-start text-center md:text-start ">
            <p className="w-8/12 mb-4 py-1">
              Mantente al día con todas las iniciativas y actividades de
              Lerobótica
            </p>
            <div className="flex items-center">
              <input
                className="w-96 h-8 px-3"
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
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="px-7 flex flex-col ">
              <a
                href="/QuienesSomos"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Pre-escolar
              </a>
              <a
                href="/Soluciones"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Primaria Baja
              </a>
              <a
                href="/Contacto"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Primaria Alta
              </a>
              <a
                href="/Contacto"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Recursos de Maestros
              </a>
            </div>
            <div className="px-7 flex flex-col ">
              <a
                href="/QuienesSomos"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                ¿Quiénes somos?
              </a>
              <a
                href="/Soluciones"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Soluciones
              </a>
              <a
                href="/blog"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Blog
              </a>
              <a
                href="/Contacto"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
