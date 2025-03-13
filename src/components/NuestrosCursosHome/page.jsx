import Image from "next/legacy/image"
import CardCursos from "../CardCursos/page"
import { data } from "@/data/etapas"
import CardCursosBack from "../CardCursosBack/page"
import RobotsEscondidos from "../RobotsEscondidos/page"

export default function NuestrosCursosHome() {
  return (
    <>
      <div className="relative w-full flex flex-col items-center">
        <div className="md:absolute md:top-10 md:left-0 z-20">
          <div className="relative w-[130px] aspect-square">
            <Image
              src="/img/legoVerde.png"
              layout="fill"
              objectFit="contain"
              alt="cubo de lego verde"
            />
          </div>
        </div>
        <div className="w-full flex justify-between sm:justify-center px-5 sm:px-20">
          <div className="w-6/12 flex md:justify-center items-center">
            <div className="w-5/6 sm:w-4/6 h-16 sm:h-24 bg-azulLR rounded-t-[10px]"></div>
          </div>
          <div className="w-6/12 flex justify-end md:justify-center items-end">
            <div className="w-5/6 sm:w-4/6 h-16 sm:h-24 bg-azulLR rounded-t-[10px]"></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden md:block z-20">
          <div className="relative w-[180px] aspect-square">
            <Image
              src="/img/legoAmarillo.png"
              layout="fill"
              objectFit="contain"
              alt="cubo de lego verde"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center -mt-1">
        <div className="relative w-full xl:w-11/12 sm:rounded-t-[10px] bg-azulLR text-white xs:px-10 pb-20">
          <h2 className="text-6xl py-10 font-[baloo-bold] text-center">
            Nuestros cursos
          </h2>
          <div className="w-full flex gap-10 justify-center flex-wrap">
            {data.map((curso) => (
              <div
                key={curso.id}
                className="card w-[270px] xs:w-[330px]  h-[420px] "
              >
                <CardCursos data={curso} />
                <CardCursosBack data={curso} />
              </div>
            ))}
          </div>
          <RobotsEscondidos
            idRobot="cursoshomerobot"
            mirror={true}
            size="sm"
            position={"bottom-0 left-0"}
          />
        </div>
      </div>
    </>
  )
}
