import Image from "next/image"
import { data } from "@/data/cursos"

export default function CardCursos({ data }) {
  const { titulo, subtitulo, icon, img } = data
  return (
    <div className="w-[330px] rounded-t-[40px] overflow-hidden">
      <div className="relative w-full h-[320px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt="carta curso preescolar"
        />
      </div>
      <div className="w-full p-5 bg-grisClaroLR flex gap-3 -mt-1">
        <div className="w-[50px] aspect-square relative">
          <Image
            src={icon}
            layout="fill"
            objectFit="contain"
            alt="icono robot preescolar"
          />
        </div>
        <div className="w-9/12 flex flex-col text-black">
          <h3 className="text-3xl font-[baloo-bold]">{titulo}</h3>
          <p className="text-xl">{subtitulo}</p>
        </div>
      </div>
    </div>
  )
}
