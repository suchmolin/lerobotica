import Image from "next/legacy/image"

export default function HabilidadesEtapa({ data }) {
  const { habilidades } = data
  return (
    <div className="relative w-full flex flex-col items-center lg:flex-row justify-center pt-20 overflow-hidden">
      <div className="lg:w-6/12 xl:w-5/12 flex flex-col">
        <h2 className="lg:ml-20 text-azulLR text-5xl sm:text-6xl font-[baloo-bold] text-center lg:text-start">
          Habilidades <br /> que obtendrá <br /> tu hijo
        </h2>
        <div className="w-[360px] sm:w-[600px] h-[250px] sm:h-[300px] aspect-square relative">
          <Image
            src="/img/habilidades.png"
            alt="Habilidades que obtendra"
            objectFit="cover"
            fill="layout"
          />
        </div>
      </div>
      <div className="lg:w-6/12 xl:w-5/12 grid grid-cols-2 justify-center gap-5">
        {habilidades.map((habilidad) => (
          <div
            key={habilidad.titulo}
            className="w-[150px] sm:w-[200px] flex flex-col items-center text-center"
          >
            <div className="w-[100px] aspect-square relative">
              <Image
                src={habilidad.img}
                alt={habilidad.titulo}
                objectFit="contain"
                fill="layout"
              />
            </div>
            <h3 className="text-azulLR text-lg sm:text-2xl font-bold">
              {habilidad.titulo}
            </h3>
          </div>
        ))}
      </div>
      <div className="absolute -top-3 sm:-top-16 -left-10 sm:-left-28">
        <div className="relative w-[100px] sm:w-[230px] aspect-square">
          <Image
            src="/img/legoVerdeGrande.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
      <div className="absolute -top-7 -right-10">
        <div className="relative w-[80px] sm:w-[130px] aspect-square scale-x-[-1]">
          <Image
            src="/img/legoAmarillo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="top"
            alt="logo de lego amarillo"
          />
        </div>
      </div>
    </div>
  )
}
