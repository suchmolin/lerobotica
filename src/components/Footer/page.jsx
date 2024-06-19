import React from "react";
import RequestMeetingButton from "../RequestMeetingButton/page";
import Image from "next/image";

const Footer = () => {
  const imgFooter = [
    {
      img: "robotfoot1.webp",
      width: 100,
      height: 60,
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "robotfoot2.webp",
      width: 140,
      height: 80,
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "robotfoot3.webp",
      width: 130,
      height: 100,
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "robotfoot4.webp",
      width: 110,
      height: 100,
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "robotfoot5.webp",
      width: 110,
      height: 100,
      alt: "footerimage",
    },
    {
      img: "robotfoot6.webp",
      width: 110,
      height: 100,
      alt: "footerimage",
    },
    {
      img: "robotfoot7.webp",
      width: 90,
      height: 100,
      alt: "footerimage",
    },
  ];
  return (
    <footer className="w-full mt-24">
      <div className="flex justify-center w-full z-10 mb-10">
        {imgFooter.map((img, index) => {
          return (
            <img
              key={index}
              width={img.width}
              height={img.height}
              src={`/img/${img.img}`}
              alt={img.alt}
              className={img.hideOnResponsive ? "hidden md:block" : "block"}
            />
          );
        })}
      </div>
      <div className="w-full border-t-2 border-t-gray-100 flex justify-center items-center flex-col">
        <div className="w-full md:w-9/12 flex gap-4 items-center justify-center px-10 md:px-0 py-5 bg-[#FFD100] rounded-sm md:rounded-lg -mt-9">
          <h2 className="text-lg md:text-2xl font-[cerapro] font-bold text-gray-700">
            Trae a Lerobotica a tu escula o distrito
          </h2>
          <RequestMeetingButton />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center font-[cerapro] md:py-10">
          <div className="px-4 mt-5 md:mt-0 flex flex-col justify-center md:justify-start text-center md:text-start">
            <p className="text-gray-700 py-1">
              Mantente al día con todas las iniciativas y actividades de
              Lerobótica
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center">
            <div className="flex gap-3">
              <div className="px-7 flex flex-col items-center text-center">
                <p className="font-bold py-2 text-gray-700">Conócenos</p>
                <a href="/QuienesSomos" className="text-gray-700 py-1">
                  ¿Quiénes somos?
                </a>
                <a href="/Soluciones" className="text-gray-700 py-1">
                  Soluciones
                </a>
                <a href="/Contacto" className="text-gray-700 py-1">
                  Contáctanos
                </a>
              </div>
              <div className="px-7 flex flex-col items-center text-center">
                <p className="font-bold py-2 text-gray-700">Servicios</p>
                <a href="/PoliticasdePrivacidad" className="text-gray-700 py-1">
                  Privacidad
                </a>
                <a href="/TerminosyCondiciones" className="text-gray-700 py-1">
                  Términos y condiciones
                </a>
                <a href="/PreguntasFrecuentes" className="text-gray-700 py-1">
                  Preguntas frecuentes
                </a>
              </div>
            </div>
            <div className="px-7 flex flex-col items-center text-center">
              <p className="font-bold py-2 text-gray-700">Créditos</p>
              <a
                target="_blank"
                href="https://lerobotica.com"
                className="text-gray-700 py-1"
              >
                Desarrollado por Lerobotica
              </a>
              <a
                target="_blank"
                href="https://lerobotica.com"
                className="text-gray-700 py-1"
              >
                Creado por Lerobotica
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
