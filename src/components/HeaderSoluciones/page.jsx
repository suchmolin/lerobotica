import Image from "next/image"

export default function HeaderSoluciones() {
  return (
    <div className="firstSec relative w-full flex flex-col-reverse lg:flex-row items-center  lg:justify-end">
      <div className="w-11/12 sm:w-8/12 md:w-7/12 lg:w-3/12 flex flex-col justify-center text-azulLR  mb-10 xs:mb-20 lg:mb-0 text-center lg:text-start">
        <h1 className="text-5xl xs:text-5xl sm:text-5xl font-[baloo-bold]">
          Aprenden, construyen y programan
        </h1>
        <p className="text-2xl xs:text-2xl">
          Los niños aprenden a programar de forma divertida mientras construyen
          robots y resuelven desafíos
        </p>
      </div>
      <div className="w-full lg:w-7/12 flex justify-center items-center">
        <div className="w-[370px] sm:w-[950px] h-[200px] sm:h-[400px] lg:h-[500px] relative">
          <Image
            src="/img/headerSolucionesnueva.png"
            objectFit="contain"
            layout="fill"
            alt="soluciones header"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 -left-10 scale-x-[-1]">
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
      <div className="hidden lg:block absolute -top-10 -left-20">
        <div className="relative w-[230px] aspect-square">
          <Image
            src="/img/legoVerdeGrande.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute -top-7 left-[30%]">
        <div className="relative w-[130px] aspect-square rotate-12">
          <Image
            src="/img/legoRojo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
    </div>
  )
}
