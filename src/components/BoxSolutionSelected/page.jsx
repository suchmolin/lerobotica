import Image from "next/image"

export default function BoxSolutionSelected({ data }) {
  if (!data) return null
  return (
    <div
      style={{ backgroundColor: `${data.color}` }}
      className={`flex justify-end text-white py-10 `}
    >
      <div className="w-5/12 flex flex-col justify-center">
        <h2 className="text-5xl font-[baloo-bold]">{data.titulo}</h2>
        <p className="text-2xl font-bold mb-7">{data.etapa}</p>
        <ul className="list-disc pl-5 mb-5">
          {data.descripcion.map((parrafo, i) => (
            <li key={i} className="text-xl">
              {parrafo}
            </li>
          ))}
        </ul>
        <h2 className="text-5xl font-[baloo-bold] mb-5">
          Desarrollan habilidades como:
        </h2>
        {data.habilidades.map((habilidad, i) => (
          <div key={i} className="flex gap-4 items-center mb-2">
            <div className="w-[50px] aspect-square relative flex justify-center items-center">
              <Image
                src="/img/leguitoAmarillo.png"
                objectFit="contain"
                layout="fill"
                alt="leguito"
              />
              <p className="font-[baloo-bold] text-azulLR text-4xl z-0 mt-2">
                {i + 1}
              </p>
            </div>
            <p className="text-xl w-10/12">{habilidad}</p>
          </div>
        ))}
      </div>
      <div className="w-6/12 flex items-center justify-center">
        <div className="relative w-[500px] aspect-square">
          <Image
            src={data.img}
            objectFit="contain"
            layout="fill"
            alt={data.titulo}
            priority
          />
        </div>
      </div>
    </div>
  )
}
