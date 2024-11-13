import Image from "next/image"
import { data } from "@/data/opinionesProfesores"

export default function OpinionesMestros() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-10 sm:pb-20">
      <div className="relative w-[180px] aspect-square block lg:hidden">
        <Image
          src="/img/legoRojo.png"
          layout="fill"
          objectFit="contain"
          alt="cubo de lego verde"
        />
      </div>
      <h2 className="text-5xl sm:text-6xl text-azulLR font-[baloo-bold] text-center py-10">
        Opiniones de los <br /> maestros
      </h2>
      <div className="w-10/12 flex gap-10 justify-center flex-wrap">
        {data.map((item) => (
          <video
            key={item.id}
            className="rounded-2xl w-[330px] aspect-video"
            controls
            src={item.src}
          ></video>
        ))}
      </div>
      <div className="helicopter absolute -top-10 left-0 hidden md:block">
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
      <div className="helicopter absolute -top-62 right-0 hidden sm:block">
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
