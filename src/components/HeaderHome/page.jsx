import Image from "next/image"
import "./page.css"
import RequestMeetingButton from "../RequestMeetingButton/page"
import HelicopterMove from "../HelicopterMove/page"

export default function HeaderHome(props) {
  return (
    <div className="firstSec relative w-full lg:h-[calc(100vh-125px)] flex flex-col lg:flex-row justify-end overflow-hidden mb-10">
      <div className="relative w-full lg:w-5/12 flex flex-col justify-center sm:pl-10 lg:pl-20 mt-5 mb-5 sm:mb-20 z-10">
        <h1 className="text-azulLR text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-[baloo-bold] px-3 xs:px-8 sm:px-0">
          <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl block">
            Instituto de
          </span>
          Robótica y
          <br />
          Programacion
        </h1>
        <p className=" text-xl xs:text-2xl sm:text-3xl py-2 lg:pr-10 xl:pr-32 px-3 xs:px-8 sm:px-0">
          Un espacio para los exploradores de la tecnología.
        </p>
        <div className="px-3 xs:px-8 lg:px-0">
          <RequestMeetingButton size={"3xl"} />
        </div>
      </div>
      <div className="relative w-full lg:w-7/12 xl:w-6/12 h-full flex items-end justify-center lg:pr-10 pt-24 lg:pt-0">
        <div className="flex flex-col items-center">
          <div className="relative w-[280px] xs:w-[360px] sm:w-[450px] aspect-square ml-10">
            <Image
              src="/img/ninoHero.png"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              alt="niño sonriendo mientras juega con legos"
            />
          </div>
          <div className="w-11/12 sm:w-fit bg-amarilloLR text-azulLR sm:px-16 flex flex-col sm:flex-row justify-between items-center py-4 rounded-t-2xl gap-6 xl:gap-10">
            <div className=" flex gap-6 xl:gap-10">
              <div className="flex flex-col text-center">
                <p className="text-5xl font-[baloo-bold]">42</p>
                <p className="text-xl leading-none font-bold">
                  Años de <br /> experiencia
                </p>
              </div>
              <div className="flex flex-col text-center">
                <p className="text-5xl font-[baloo-bold]">66</p>
                <p className="text-xl leading-none font-bold">
                  Paises <br /> alcanzados
                </p>
              </div>
            </div>
            <div className=" flex gap-6 xl:gap-10">
              <div className="flex flex-col text-center">
                <p className="text-5xl font-[baloo-bold]">65</p>
                <p className="text-xl leading-none font-bold">
                  Millones de <br /> usuarios
                </p>
              </div>
              <div className="flex flex-col text-center">
                <p className="text-5xl font-[baloo-bold]">22</p>
                <p className="text-xl leading-none font-bold">
                  Soluciones <br /> creadas
                </p>
              </div>
            </div>
          </div>
        </div>
        <HelicopterMove />
      </div>
      <div className="absolute top-60 sm:top-72 lg:-top-16 right-1 sm:right-10 lg:left-[20%]">
        <div className="relative w-[100px] sm:w-[200px] aspect-square">
          <Image
            src="/img/legoAmarillo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute hidden lg:block -bottom-[10%] left-0">
        <div className="relative w-[230px] aspect-square">
          <Image
            src="/img/legoVerdeBlur.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
    </div>
  )
}
