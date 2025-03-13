import Image from "next/legacy/image"
import RobotsEscondidos from "../RobotsEscondidos/page"

export default function MisionQuienesSomos() {
  return (
    <div className="relative w-full flex justify-center">
      <div className="w-full sm:w-11/12 flex flex-col lg:flex-row justify-center gap-10 px-3 sm:px-0">
        <div className="w-full lg:w-6/12 flex flex-col">
          <div className="w-full flex justify-between sm:justify-center px-5 sm:px-10">
            <div className="w-6/12 flex md:justify-center items-center">
              <div className="w-5/6 sm:w-4/6 h-10 sm:h-14 bg-azulClaroLR rounded-t-[10px]"></div>
            </div>
            <div className="w-6/12 flex justify-end md:justify-center items-end">
              <div className="w-5/6 sm:w-4/6 h-10 sm:h-14 bg-azulClaroLR rounded-t-[10px]"></div>
            </div>
          </div>
          <div className="w-full p-7 xs:p-10 sm:p-16 bg-azulClaroLR text-white rounded-t-[10px] -mt-1">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl mb-3 font-[baloo-bold] text-center">
              Misión
            </h2>
            <p className="text-lg xs:text-xl sm:text-2xl text-justify">
              Nuestro propósito es ser un aliado en la educación, con el fin de
              maximizar el potencial de nuestros estudiantes a través de un
              aprendizaje intuitivo adaptable, lúdico e incluyente.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col">
          <div className="w-full flex justify-between sm:justify-center px-5 sm:px-10">
            <div className="w-6/12 flex md:justify-center items-center">
              <div className="w-5/6 sm:w-4/6 h-10 sm:h-14 bg-verdeLR rounded-t-[10px]"></div>
            </div>
            <div className="w-6/12 flex justify-end md:justify-center items-end">
              <div className="w-5/6 sm:w-4/6 h-10 sm:h-14 bg-verdeLR rounded-t-[10px]"></div>
            </div>
          </div>
          <div className="relative w-full p-7 xs:p-10 sm:p-16 bg-verdeLR text-white rounded-t-[10px] -mt-1">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl mb-3 font-[baloo-bold] text-center">
              Basados en:
            </h2>
            <p className="text-lg xs:text-xl sm:text-2xl text-justify">
              El sistema de aprendizaje LEGO que a través de soluciones brinda
              experiencias de aprendizaje STEAM,  de forma práctica, intuitiva y
              adaptable para estudiantes de preescolar a secundaria.
            </p>
            <div className="hidden sm:block">
              <RobotsEscondidos
                idRobot="quienessomosrobot"
                mirror={true}
                size="sm"
                position={"bottom-0 left-0"}
              />
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <RobotsEscondidos
            idRobot="quienessomosrobot"
            mirror={true}
            size="sm"
            position={"-bottom-28 left-0"}
          />
        </div>
      </div>
      <div className="absolute -bottom-20 sm:-bottom-40 right-0 ">
        <div className="relative w-[160px] sm:w-[250px] aspect-square scale-x-[-1]">
          <Image
            src="/img/legoRojo2.png"
            objectFit="contain"
            layout="fill"
            objectPosition="left"
            alt="cubo de lego rojo"
          />
        </div>
      </div>
    </div>
  )
}
