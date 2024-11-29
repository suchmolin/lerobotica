import Image from "next/image"

import CounterHeader from "../CounterHeader/page"

export default function HeaderQuienesSomos() {
  return (
    <div className="firstSec relative w-full lg:h-[700px] flex flex-col lg:flex-row justify-end overflow-hidden mb-20">
      <div className="relative sm:w-8/12 lg:w-5/12 flex flex-col justify-center sm:pl-10 lg:pl-10 mt-5 z-10">
        <h1 className="text-azulLR text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-[baloo-bold] px-8 sm:px-0 mb-3">
          ¿Qué es <br /> LeRobotica?
        </h1>
        <div className="text-lg sm:text-2xl flex flex-col gap-3 xl:pr-20 mx-8 sm:mx-0">
          <p>
            Somos un instituto de Robótica y Programación fundamentado en el
            Sistema de Aprendizaje LEGO para niños de preescolar a secundaria.
          </p>
          <p className="">
            Nuestras construcciones estimulan la creatividad de tu hijo,
            permitiéndole explorar ideas y desarrollar su pensamiento lógico.
          </p>
        </div>
      </div>
      <div className="relative w-full lg:w-7/12 xl:w-6/12 h-full flex items-end justify-center lg:pr-10 lg:pt-0">
        <div className="flex flex-col items-center">
          <div className="relative w-[280px] xs:w-[360px] sm:w-[500px] aspect-square ml-10">
            <Image
              src="/img/robotQuienesSomos.png"
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              alt="niño sonriendo mientras juega con legos"
            />
          </div>
          <CounterHeader />
        </div>
      </div>
      <div className="absolute top-[420px] xs:top-96 right-1 sm:right-1 lg:right-10">
        <div className="relative w-[100px] sm:w-[130px] aspect-square scale-x-[-1] ">
          <Image
            src="/img/legoRojo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute -top-3 right-1 sm:right-10 lg:right-[25%]">
        <div className="relative w-[100px] sm:w-[130px] aspect-square scale-x-[-1] ">
          <Image
            src="/img/legoAmarillo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute hidden lg:block bottom-0 left-0">
        <div className="relative w-[150px] aspect-square">
          <Image
            src="/img/legoAzulBlur2.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute hidden lg:block -top-24 left-[33%]">
        <div className="relative w-[230px] aspect-square">
          <Image
            src="/img/legoVerdeGrande.png"
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
