import Image from "next/image"
import { data } from "@/data/opinionesProfesores"

export default function OpinionesMestros() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10 pb-20">
      <h2 className="text-6xl text-azulLR font-[baloo-bold] text-center py-10">
        Opiniones de los <br /> maestros
      </h2>
      <div className="w-10/12 flex gap-10 justify-center">
        {data.map((item) => (
          <video
            key={item.id}
            className="rounded-2xl w-[330px] aspect-video"
            controls
            src={item.src}
          ></video>
        ))}
      </div>
      <div className="absolute -top-10 left-0">
        <div className="relative w-[250px] aspect-square">
          <Image
            src="/img/legoRojo2.png"
            objectFit="contain"
            layout="fill"
            objectPosition="left"
            alt="cubo de lego rojo"
          />
        </div>
      </div>
      <div className="absolute -top-62 right-0">
        <div className="relative w-[150px] aspect-square">
          <Image
            src="/img/legoAzulBlur.png"
            objectFit="contain"
            layout="fill"
            objectPosition="right"
            alt="cubo de lego rojo"
          />
        </div>
      </div>
    </div>
  )
}
