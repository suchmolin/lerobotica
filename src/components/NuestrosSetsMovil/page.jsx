import Image from "next/image"

export default function NuestrosSetsMovil({ data }) {
  return (
    <div className="w-full block lg:hidden">
      <div className="relative w-full py-7 rounded-t-2xl bg-gray-100 px-0">
        <div className="mx-auto">
          {data?.map((item, index) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.color }}
              className={`py-10 rounded-t-3xl -mt-10`}
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span
                    className={`w-full text-xl text-white font-[baloo-bold] text-center pb-8`}
                  >
                    {item.titulo} <br />
                    {item.etapa}
                  </span>
                </summary>
                <div className="w-full flex flex-col text-white px-5 items-center">
                  <div className="w-[360px] sm:w-[450px] aspect-square relative">
                    <Image
                      src={item.img}
                      objectFit="contain"
                      layout="fill"
                      alt={item.titulo}
                    />
                  </div>
                  <h2 className="text-5xl font-[baloo-bold]">{item.titulo}</h2>
                  <ul className="list-disc pl-5 mb-5">
                    {item.descripcion.map((parrafo, i) => (
                      <li key={i} className="text-xl">
                        {parrafo}
                      </li>
                    ))}
                  </ul>
                  <h2 className="text-3xl font-[baloo-bold] mb-5 text-center">
                    Desarrollan habilidades como:
                  </h2>
                  {item.habilidades.map((habilidad, i) => (
                    <div
                      key={i}
                      className="flex flex-col lg:flex-row gap-4 items-center mb-2"
                    >
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
                      <p className="text-xl w-10/12 text-center lg:text-normal">
                        {habilidad}
                      </p>
                    </div>
                  ))}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
