"use client"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"
export default function LessonCard(props) {
  const { count, data } = props

  return (
    <>
      {data.slice(0, count).map((item, index) => {
        let bgNivel
        if (item.level === "Principiante") {
          bgNivel = "bg-verdeLR"
        }
        if (item.level === "Intermedio") {
          bgNivel = "bg-amarilloLR"
        }
        if (item.level === "Avanzado") {
          bgNivel = "bg-naranjaLR"
        }
        let bgEtapa
        if (item.grade === "Preescolar 3 - 5") {
          bgEtapa = "bg-azulLR"
        }
        if (item.grade === "Primaria Baja 6 - 8") {
          bgEtapa = "bg-amarilloLR"
        }
        if (item.grade === "Primaria Alta 9 - 11") {
          bgEtapa = "bg-violetaLR"
        }

        return (
          <Fade
            key={index}
            triggerOnce
            className="dropShadow6 w-[350px] sm:w-[430px] my-4 rounded-3xl min-h-[610px] bg-gray-100 px-2 sm:px-5 py-7"
          >
            <a href={item.redir} className="relative ">
              <p className="w-full text-xs z-10 text-gray-600 mb-1">
                {item.catTitle}
              </p>
              <div className="relative flex flex-col items-center overflow-hidden">
                {/*}
              <img
                className="w-full max-h-[289px] rounded-t-sm"
                src={item.urlImg || "/img/lessonsImg/sinImagen.png"}
                alt="imagen"
              />*/}
                {item.urlImg ? (
                  <div className="w-full h-[250px] relative">
                    <Image
                      src={item.urlImg}
                      alt="imagen"
                      obejectFit="cover"
                      layout="fill"
                    />
                  </div>
                ) : (
                  <>
                    <svg
                      width="100"
                      height="197"
                      viewBox="0 0 265 397"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-6"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M158.583 110.644V99.1714H165.09C174.482 99.1714 182.167 91.4868 182.167 82.0943V36.2274C182.167 26.8349 174.482 19.1504 165.09 19.1504L158.583 19.1504V3.04128C158.583 1.45179 157.454 0.151489 156.074 0.151489L107.825 0.151489C106.445 0.151489 105.315 1.45179 105.315 3.04128V19.1504H98.8092C89.4167 19.1504 81.7322 26.835 81.7322 36.2274V82.0943C81.7322 91.4868 89.4168 99.1714 98.8092 99.1714H105.315V110.644H87.5985C81.8013 110.558 77.3323 113.946 76.0309 119.581L75.9807 120.027C59.0922 119.406 51.4979 131.878 45.5583 143.751L18.9358 212.408C17.2029 216.028 17.869 219.648 21.2404 220.817L23.2008 221.336L21.2668 228.438C9.25142 231.317 1.4432 241.244 0.326053 253.037C-1.00224 267.059 17.5912 287.094 21.8094 251.878C22.2859 247.899 24.8305 241.952 30.2196 242.819C43.8455 244.243 24.962 271.44 35.9226 275.212C49.4204 279.857 56.9457 260.721 56.1283 253.037C55.3211 245.449 52.0403 238.626 46.6491 233.961L48.2729 227.97L49.0418 228.174C52.092 228.952 54.1724 226.923 55.1809 223.771L70.39 169.618L61.5076 248.407L61.5076 396.389H128.754V310.951H137.338V396.389H204.584L204.584 248.407L196.253 174.515L210.087 223.772C211.096 226.924 213.176 228.953 216.226 228.174L216.995 227.971L218.619 233.961C213.228 238.627 209.947 245.449 209.14 253.037C208.322 260.721 215.847 279.857 229.345 275.212C240.306 271.44 221.422 244.244 235.048 242.82C240.437 241.953 242.982 247.899 243.459 251.878C247.677 287.094 266.27 267.059 264.942 253.037C263.825 241.245 256.017 231.317 244.001 228.438L242.067 221.336L244.028 220.817C247.399 219.648 248.065 216.028 246.332 212.409L219.71 143.751C213.789 131.916 206.871 119.484 190.11 120.021L190.06 119.582C188.759 113.946 184.29 110.558 178.493 110.644L158.583 110.644Z"
                        fill="#FFED00"
                      />
                    </svg>
                    <Image
                      width={150}
                      height={100}
                      src="/img/Logo-Lerobotica-horizontal-RGB.png"
                      alt="logo lerobotica"
                      className="-mt-4"
                    />
                  </>
                )}
              </div>
              <div className="relative h-[350px] pt-6 pb-2 px-3 flex flex-col  justify-between">
                <div>
                  <h2 className="font-bold text-2xl text-azulLR">
                    {item.title}
                  </h2>
                  <p className="text-lg mt-1">{item.subtitle}</p>
                  <p className="text-base mt-5 font-light">
                    {item.description}
                  </p>
                </div>
                <div className="">
                  <p className="text-sm text-gray-600 mb-5 sm:mb-10">
                    {item.categories}
                  </p>
                  <div className="flex flex-row flex-wrap gap-2 mt-3 text-md text-white ">
                    <p className="bg-azulLR py-1 px-2 rounded-md">
                      {item.duration}
                    </p>
                    <p className={`${bgNivel} px-2 py-1 rounded-md`}>
                      {item.level}
                    </p>
                    <p className={`${bgEtapa} px-2 py-1 rounded-md`}>
                      {item.grade}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </Fade>
        )
      })}
    </>
  )
}
