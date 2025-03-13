import Image from "next/legacy/image"
import RobotsEscondidos from "../RobotsEscondidos/page"

export default function HeaderBlog() {
  return (
    <div className="firstSec relative w-full flex flex-col-reverse lg:flex-row items-center  lg:justify-end">
      <div className="w-10/12 md:w-8/12 lg:w-5/12 flex flex-col justify-center text-azulLR mb-10 xs:mb-20 lg:mb-0">
        <h1 className="text-4xl ml-5 sm:text-6xl xl:text-7xl font-[baloo-bold]">
          La Robótica y la Programación presentes en el día a día
        </h1>
      </div>
      <div className="w-full lg:w-6/12 flex justify-center items-center">
        <div className="w-[370px] sm:w-[950px] h-[200px] sm:h-[400px] lg:h-[500px] relative">
          <Image
            src="/img/robotParaguas.png"
            objectFit="contain"
            layout="fill"
            alt="soluciones header"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute top-0 -left-10">
        <div className="relative w-[100px] sm:w-[200px] aspect-square">
          <Image
            src="/img/legoAzulGrande.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-1 left-[40%] xl:left-[50%]">
        <div className="relative w-[150px] aspect-square">
          <Image
            src="/img/legoVerde.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <RobotsEscondidos idRobot="blogrobot" size="sm" />
    </div>
  )
}
