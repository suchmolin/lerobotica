import Image from "next/image"
import CardCursos from "../CardCursos/page"
import { data } from "@/data/cursos"

export default function NuestrosCursosHome() {
  return (
    <>
      <div className="relative w-full flex justify-center">
        <div className="w-5/12 flex justify-center items-end">
          <div className="w-3/6 h-20 bg-azulLR rounded-t-[40px]"></div>
        </div>
        <div className="w-5/12 flex justify-center items-end">
          <div className="w-3/6 h-20 bg-azulLR rounded-t-[40px]"></div>
        </div>
        <div className="absolute top-10 left-0">
          <div className="relative w-[130px] aspect-square">
            <Image
              src="/img/legoVerde.png"
              layout="fill"
              objectFit="contain"
              alt="cubo de lego verde"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0">
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
      <div className="w-full flex justify-center">
        <div className="w-11/12 rounded-t-[40px] bg-azulLR text-white px-10 pb-20">
          <h2 className="text-6xl py-10 font-[baloo-bold] text-center">
            Nuestros cursos
          </h2>
          <div className="w-full flex gap-10 justify-center">
            {data.map((curso) => (
              <CardCursos key={curso.id} data={curso} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
