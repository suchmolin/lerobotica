import Image from "next/image"
import { useState } from "react"

export default function NuestrosSetsMovil({ data }) {
  const [opened, setOpened] = useState([])

  const handleOpened = (id) => {
    if (opened.includes(id)) {
      setOpened(opened.filter((item) => item !== id))
    } else {
      setOpened([...opened, id])
    }
  }
  return (
    <div className="w-full block lg:hidden">
      <div className="relative w-full py-7 rounded-t-2xl bg-gray-100 px-0">
        <div className="mx-auto">
          {data?.map((item, index) => {
            const isIn = opened.includes(item.id)
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: `${isIn ? "#F9F8F8" : item.color}`,
                  border: `${isIn ? `1px solid ${item.color}` : "none"}`,
                }}
                className={`py-10 rounded-t-3xl -mt-10 `}
              >
                <details
                  onClick={() => handleOpened(item.id)}
                  className="group"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span
                      style={{
                        color: `${isIn ? `${item.color}` : "white"}`,
                      }}
                      className={`w-full text-xl font-[baloo-bold] text-center pb-8`}
                    >
                      {item.titulo} <br />
                      {item.etapa}
                    </span>
                  </summary>
                  <div className="w-full flex flex-col px-5 items-center">
                    <div className="w-[360px] sm:w-[450px] aspect-square relative">
                      <Image
                        src={item.img}
                        objectFit="contain"
                        layout="fill"
                        alt={item.titulo}
                      />
                    </div>
                    <h2 className="text-5xl font-[baloo-bold] text-azulLR">
                      {item.titulo}
                    </h2>
                    <ul className="list-disc pl-5 mb-5">
                      {item.descripcion.map((parrafo, i) => (
                        <li key={i} className="text-xl">
                          {parrafo}
                        </li>
                      ))}
                    </ul>
                    <h2 className="text-3xl font-[baloo-bold] mb-5 text-center text-azulLR">
                      Desarrollan habilidades como:
                    </h2>
                    {item.habilidades.map((habilidad, i) => (
                      <div
                        key={i}
                        className="flex flex-col lg:flex-row gap-4 items-center mb-2"
                      >
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
                              fill={item.color}
                            />
                          </svg>

                          <p className="font-[baloo-bold] text-white text-4xl z-0 mt-2">
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
            )
          })}
        </div>
      </div>
    </div>
  )
}
