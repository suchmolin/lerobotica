import Image from "next/legacy/image"

export default function BoxSolutionSelected({ data }) {
  if (!data) return null
  return (
    <div className={`flex justify-end py-10 bg-[#F9F8F8] text-gray-800`}>
      <div className="w-5/12 flex flex-col justify-center">
        <h2 className="text-5xl font-[baloo-bold] text-azulLR">
          {data.titulo}
        </h2>
        <p className="text-2xl font-bold mb-7 text-azulLR">{data.etapa}</p>
        <ul className="list-disc pl-5 mb-5">
          {data.descripcion.map((parrafo, i) => (
            <li key={i} className="text-xl">
              {parrafo}
            </li>
          ))}
        </ul>
        <h2 className="text-5xl font-[baloo-bold] mb-5 text-azulLR">
          Tu hijo desarrolla habilidades como:
        </h2>
        {data.habilidades.map((habilidad, i) => (
          <div key={i} className="flex gap-4 items-center mb-2">
            <div className="w-[50px] aspect-square relative flex justify-center items-center p-2">
              <svg
                className="absolute"
                width="50"
                height="66"
                viewBox="0 0 68 66"
                fill="none"
              >
                <path
                  d="M62.0177 8.58439H58.2419V4.53957C58.2419 2.03109 56.2108 0 53.7023 0H42.4619C39.9534 0 37.9223 2.03109 37.9223 4.53957V8.58439H29.798V4.53957C29.798 2.03109 27.7669 0 25.2584 0H14.018C11.5095 0 9.47842 2.03109 9.47842 4.53957V8.58439H5.70267C2.55188 8.58439 0 11.1363 0 14.2871V63.0592C0 64.5435 1.2065 65.75 2.69076 65.75H65.0122C66.4965 65.75 67.703 64.5435 67.703 63.0592V14.2871C67.703 11.1363 65.1511 8.58439 62.0003 8.58439H62.0177Z"
                  fill={data.color}
                />
              </svg>

              <p className="font-[baloo-bold] text-white text-4xl z-0 mt-2">
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
