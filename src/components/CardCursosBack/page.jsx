import Image from "next/legacy/image"
import Link from "next/link"

export default function CardCursosBack({ data }) {
  const { icon, descripcion } = data.cursoTarjeta
  return (
    <div className="cardFace rounded-t-[40px] overflow-hidden back p-7 bg-gray-100  text-black">
      <div className="w-full flex gap-3">
        <div className="p-2 flex justify-center items-center rounded-full border border-azulClaroLR">
          <div className=" relative w-[40px] xs:w-[50px] h-[50px] p-2">
            <Image
              src={icon}
              layout="fill"
              objectFit="contain"
              alt="icono de curso"
            />
          </div>
        </div>
        <div className="w-10/12 flex flex-col">
          <h2 className="font-[baloo-bold] text-xl xs:text-2xl">
            {data.title}
          </h2>
          <p className="text-2xl">{data.edad}</p>
        </div>
      </div>
      <p className="text-xl py-2">{descripcion}</p>
      <div className="absolute bottom-0 w-10/12 pb-7 flex justify-center">
        <Link
          className="text-lg font-[baloo-bold] py-1 px-3 bg-azulLR text-white"
          href={`/etapa/${data.id}`}
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}
