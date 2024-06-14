"use client";
import Image from "next/image";
import "./page.css";
import { Slide } from "react-awesome-reveal";
import RequestMeetingButton from "../RequestMeetingButton/page";
export default function HeaderHome(props) {
  const imagen = {
    src: "/img/header.png",
    alt: "header",
    width: 650,
    height: 650,
  };

  return (
    <div className="firstSec w-full h-full sm:h-[615px] flex flex-col sm:flex-row font-[cerapro]">
      <div className="w-full sm:w-6/12 h-full bg-[#FFD100] flex flex-col  justify-center px-10 lg:pl-40 py-5 items-center text-center">
        <Slide triggerOnce>
          <h1 className="flex flex-col text-5xl lg:text-6xl font-extrabold ">
            <span className="text-sm sm:text-2xl text-black">Instituto de</span>
            Robótica y Programación
          </h1>
          <p className="hidden sm:block mt-2 text-xs sm:text-sm pr-10">
            Un espacio para los exploradores de la tecnología
          </p>
          <div className="w-full sm:w-8/12 mt-2">
            <RequestMeetingButton />
          </div>
        </Slide>
      </div>

      <div className="hidden shapedividers_com-5952 h-full w-full sm:w-6/12 sm:flex items-center -ml-1">
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
