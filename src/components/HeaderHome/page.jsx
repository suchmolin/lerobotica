"use client";
import Image from "next/image";
import "./page.css";
import { Slide } from "react-awesome-reveal";
export default function HeaderHome(props) {
  const imagen = {
    src: "/img/header.png",
    alt: "header",
    width: 650,
    height: 650,
  };

  return (
    <div className="firstSec w-full h-full sm:h-[615px] flex flex-col sm:flex-row font-[cerapro]">
      <div className="w-full sm:w-6/12 h-full bg-[#FFD100] flex flex-col  justify-center px-10 sm:pl-40 py-5 items-center text-center">
        <Slide triggerOnce>
          <h1 className="flex flex-col text-5xl lg:text-6xl font-bold">
            Lerobotica{" "}
            <span className="text-sm sm:text-xl">
              Inspira un aprendizaje sobre el que puedes construir
            </span>
          </h1>
          <p className="hidden sm:block mt-2 text-xs sm:text-sm pr-10">
            Soluciones de aprendizaje diseñadas para capacitar a estudiantes y
            profesores, generar una comprensión y un compromiso más profundos y
            encender un amor por el aprendizaje para toda la vida.
          </p>
          <div className="w-full sm:w-8/12 mt-2">
            <button className="bg-[#006cb7] py-2 px-2 text-white">
              Contactanos
            </button>
          </div>
        </Slide>
      </div>

      <div className="hidden shapedividers_com-5952 h-full w-full sm:w-6/12 sm:flex items-center">
        <Slide direction="right" triggerOnce>
          <Image
            width={imagen.width}
            height={imagen.height}
            className="z-20"
            src={imagen.src}
            alt={imagen.alt}
          />
        </Slide>
      </div>
      <div className=" shapedividers_com-1214 h-full w-full sm:w-6/12 flex sm:hidden items-center -mt-1">
        <Slide direction="right" triggerOnce>
          <Image
            width={imagen.width}
            height={imagen.height}
            className="z-20"
            src={imagen.src}
            alt={imagen.alt}
          />
        </Slide>
      </div>
    </div>
  );
}
