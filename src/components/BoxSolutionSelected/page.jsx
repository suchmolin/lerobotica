import Image from "next/image"

export default function BoxSolutionSelected({ data }) {
  if (!data) return null
  return (
    <div
      className={`flex justify-end text-white bg-${data.color || "azulClaroLR"} py-10 -mt-1`}
    >
      <div className="w-5/12 flex flex-col justify-center">
        <h2 className="text-5xl font-[baloo-bold]">{data.titulo}</h2>
        <p className="text-2xl font-bold mb-7">{data.etapa}</p>
        {data.descripcion.map((parrafo, i) => (
          <p className="text-xl">{parrafo}</p>
        ))}
      </div>
      <div className="w-6/12 flex items-center justify-center">
        <div className="relative w-[500px] aspect-square">
          <Image
            src={data.img}
            objectFit="contain"
            layout="fill"
            alt={data.titulo}
          />
        </div>
      </div>
    </div>
  )
}
