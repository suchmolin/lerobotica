"use client"
import Image from "next/image"
import SliderHome from "../SliderHome/page"
import { Fade } from "react-awesome-reveal"

const SectionOneHome = () => {
  return (
    <section className="firstSec w-full lg:w-10/12 font-sans flex flex-col justify-center items-center">
      <div className="w-full text-center overflow-hidden transition-all duration-[1500ms] h-[515px] bg-[#ffd500] flex flex-col flex-wrap items-center  lg:justify-center pt-28 lg:pt-0">
        <div className="w-12/12 md:w-10/12 lg:w-8/12">
          <h1 className="flex flex-col text-4xl md:text-5xl lg:text-6xl font-bold">
            Lerobotica{" "}
            <span className="text-2xl sm:text-3xl">
              inspira un aprendizaje sobre el que puedes construir
            </span>
          </h1>
          <p className="mt-2 text-xs sm:text-base">
            Soluciones de aprendizaje diseñadas para capacitar a estudiantes y
            profesores, generar una comprensión y un compromiso más profundos y
            encender un amor por el aprendizaje para toda la vida.
          </p>
          <p className="mt-2 text-xs sm:text-base"></p>
        </div>
      </div>

      <Fade
        className="w-full -mt-36 lg:-mt-36 px-3"
        direction="up"
        triggerOnce
        duration={1000}
      >
        <SliderHome />
      </Fade>
    </section>
  )
}

export default SectionOneHome
