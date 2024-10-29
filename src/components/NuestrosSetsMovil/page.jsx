import Image from "next/image"

export default function NuestrosSetsMovil({ data }) {
  return (
    <div className="w-full block lg:hidden">
      <div className="relative w-full py-7 rounded-t-2xl bg-gray-100 px-0">
        <div className="mx-auto">
          {data?.map((item, index) => (
            <div
              key={item.id}
              className={`py-5  bg-${item.color || "azulClaroLR"} rounded-t-3xl -mt-10`}
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
                  <div className="w-[450px] aspect-square relative">
                    <Image
                      src={item.img}
                      objectFit="contain"
                      layout="fill"
                      alt={item.titulo}
                    />
                  </div>
                  <h2 className="text-3xl font-[baloo-bold]">{item.titulo}</h2>
                  <p className="text-lg mb-5">{item.etapa}</p>
                  {item.descripcion.map((parrafo, i) => (
                    <p key={i} className="text-lg pb-10">
                      {parrafo}
                    </p>
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
