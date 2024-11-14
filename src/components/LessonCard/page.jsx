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
                  <div className="w-full h-[250px] relative">
                    <Image
                      src="/img/lessonsImg/sinImagen.png"
                      alt="imagen"
                      obejectFit="cover"
                      layout="fill"
                    />
                  </div>
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
