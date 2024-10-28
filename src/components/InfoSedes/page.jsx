import Image from "next/image"
import { data } from "@/data/sedes.js"

export default function InfoSedes() {
  return (
    <div className="w-full flex flex-col items-center pb-20">
      {data.map((sede, i) => {
        const flip = i % 2 === 0

        return (
          <div
            key={sede.id}
            className={`w-[600px] md:w-[800px] xl:w-[1200px] h-[300px] flex ${flip ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}`}
          >
            <div
              className={`relative w-full md:w-5/12 ${flip ? "rounded-ss-[100px]" : "rounded-br-[100px]"} h-full  overflow-hidden`}
            >
              <Image
                src={sede.img}
                objectFit="cover"
                layout="fill"
                alt="sede caracas ccct"
              />
            </div>
            <div
              className={`w-full md:w-7/12 ${flip ? "rounded-br-[100px]" : "rounded-ss-[100px]"} h-full p-10 xl:p-16  text-white ${sede.colorTarjeta || "bg-violetaLR"}`}
            >
              <h2 className="text-4xl font-[baloo-bold]">{sede.name}</h2>
              <p className="text-2xl">
                Centro Ciudad Comercial Tamanaco, torre A, piso 3, local A302,
                Caracas 8050
              </p>
              {sede.phone && (
                <p className="text-2xl font-[baloo-bold]">Teléfonos:</p>
              )}
              {sede.phone?.map((tel) => (
                <p key={tel} className="text-2xl">
                  {tel}
                </p>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
