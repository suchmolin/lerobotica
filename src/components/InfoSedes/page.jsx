import Image from "next/image"
import { data } from "@/data/sedes.js"
import RobotsEscondidos from "../RobotsEscondidos/page"

export default function InfoSedes() {
  return (
    <div className="w-full flex flex-col items-center gap-7 xs:gap-10 md:gap-0 pb-20">
      {data.map((sede, i) => {
        const flip = i % 2 === 0

        return (
          <div
            key={sede.id}
            className={`w-[280px] xs:w-[350px] sm:w-[600px] md:w-[800px] xl:w-[1200px] h-[500px] xs:h-[600px] md:h-[300px] flex ${flip ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}`}
          >
            <div
              className={`relative w-full md:w-5/12  ${flip ? "rounded-ss-[100px]" : "rounded-ss-[100px] md:rounded-ss-none md:rounded-br-[100px]"} h-full overflow-hidden`}
            >
              <Image
                src={sede.img}
                objectFit="cover"
                layout="fill"
                alt="sede caracas ccct"
              />
            </div>
            <div
              className={`relative w-full md:w-7/12  ${flip ? "rounded-br-[100px]" : "rounded-br-[100px] md:rounded-br-none md:rounded-ss-[100px]"} h-full p-4 xs:p-10 xl:p-16  text-white ${sede.colorTarjeta || "bg-violetaLR"}`}
            >
              <h2 className="text-3xl md:text-4xl font-[baloo-bold]">
                {sede.name}
              </h2>
              <p className="text-xl md:text-2xl">
                Centro Ciudad Comercial Tamanaco, torre A, piso 3, local A302,
                Caracas 8050
              </p>
              {sede.phone && (
                <p className="text-xl md:text-2xl font-[baloo-bold]">
                  Teléfonos:
                </p>
              )}
              {sede.phone?.map((tel) => (
                <p key={tel} className="text-xl md:text-2xl">
                  {tel}
                </p>
              ))}
              {i === 1 && (
                <RobotsEscondidos
                  idRobot="contactanosrobot"
                  size="sm"
                  position={"bottom-20 md:bottom-0 right-0"}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
