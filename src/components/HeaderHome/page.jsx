import Image from "next/image"
import "./page.css"
import RequestMeetingButton from "../RequestMeetingButton/page"
import HelicopterMove from "../HelicopterMove/page"
import CounterHeader from "../CounterHeader/page"

export default function HeaderHome(props) {
  return (
    <div className="firstSec motionWrapper relative w-full lg:h-[700px] flex flex-col lg:flex-row justify-end overflow-hidden mb-10">
      <div className="relative w-full lg:w-5/12 flex flex-col justify-center sm:pl-10 lg:pl-20 mt-5 mb-5 sm:mb-20 z-10">
        <h1 className="text-azulLR text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-[baloo-bold] px-3 xs:px-8 sm:px-0">
          Robótica y
          <br />
          Programación
          <br />
          para niños
        </h1>
        <p className=" text-xl xs:text-2xl sm:text-3xl py-2 lg:pr-10 xl:pr-32 px-3 xs:px-8 sm:px-0">
          Un espacio creativo donde tu hijo innova, aprende y se divierte.
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
          <CounterHeader />
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
