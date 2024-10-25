import Image from "next/image"
import "./page.css"
import RequestMeetingButton from "../RequestMeetingButton/page"
import HelicopterMove from "../HelicopterMove/page"

export default function HeaderHome(props) {
  return (
    <div className="firstSec relative w-full h-[calc(100vh-125px)] flex justify-end overflow-hidden">
      <div className="relative w-5/12 flex flex-col justify-center pl-20">
        <h1 className="text-azulLR text-7xl font-[baloo-bold]">
          <span className="text-6xl block">Instituto de</span>
          Robótica y
          <br />
          Programacion
        </h1>
        <p className="text-3xl py-2">
          Un espacio para los exploradores <br /> de la tecnología.
        </p>
        <RequestMeetingButton size={"3xl"} />
      </div>
      <div className="relative w-6/12 h-full flex items-end justify-center pr-10 pl-32">
        <div className="flex flex-col items-center">
          <div className="relative w-[450px] aspect-square ml-10">
            <Image
              src="/img/ninoHero.png"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              alt="niño sonriendo mientras juega con legos"
            />
          </div>
          <div className="bg-amarilloLR text-azulLR px-5 flex justify-between items-center py-4 rounded-t-2xl">
            <div className="flex flex-col text-center">
              <p className="text-5xl font-[baloo-bold]">42</p>
              <p className="text-xl leading-none font-bold">
                Años de experiencia
              </p>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-5xl font-[baloo-bold]">42</p>
              <p className="text-xl leading-none font-bold">
                Años de experiencia
              </p>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-5xl font-[baloo-bold]">42</p>
              <p className="text-xl leading-none font-bold">
                Años de experiencia
              </p>
            </div>
            <div className="flex flex-col text-center">
              <p className="text-5xl font-[baloo-bold]">42</p>
              <p className="text-xl leading-none font-bold">
                Años de experiencia
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-16 left-[20%]">
        <div className="relative w-[200px] aspect-square">
          <Image
            src="/img/legoAmarillo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute -bottom-[10%] left-0">
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
      <HelicopterMove />
    </div>
  )
}
