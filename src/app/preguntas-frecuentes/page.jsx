import FAQBox from "@/components/FAQBox/page"
import HeaderPreguntasFrecuentes from "@/components/HeaderPreguntasFrecuentes/page"
import Image from "next/image"
import { data1, data2, data3 } from "@/data/faq"

export default function PreguntasFrecuentes() {
  return (
    <>
      <HeaderPreguntasFrecuentes />
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:pb-32">
        <div className="w-full lg:w-5/12 relative flex justify-center">
          <div className="lg:absolute -top-20 xl:-top-28 left-0">
            <div className="w-[280px] xs:w-[360px] sm:w-[400px] xl:w-[500px] aspect-square relative">
              <Image
                src="/img/robotParaguas.png"
                layout="fill"
                objectFit="contain"
                alt="robot pregunta frecuentes"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 xl:w-6/12 flex items-center justify-center px-3 md:px-0">
          <FAQBox data={data1} fondo="bg-azulLR" texto="text-white" />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center lg:pb-32">
        <div className="w-full lg:w-7/12 xl:w-6/12 flex items-center justify-center px-3 md:px-0">
          <FAQBox data={data2} fondo="bg-violetaLR" texto="text-white" />
        </div>
        <div className="w-full lg:w-5/12 relative  flex justify-center">
          <div className="lg:absolute -top-20 xl:-top-28 right-0">
            <div className="w-[280px] xs:w-[360px] sm:w-[400px] xl:w-[500px] aspect-square relative">
              <Image
                src="/img/robotSorprendido.png"
                layout="fill"
                objectFit="contain"
                alt="robot pregunta frecuentes"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center">
        <div className="w-full lg:w-5/12 relative flex justify-center">
          <div className="lg:absolute -top-20 xl:-top-28 left-0">
            <div className="w-[280px] xs:w-[360px] sm:w-[400px] xl:w-[500px] aspect-square relative">
              <Image
                src="/img/robotPerro.png"
                layout="fill"
                objectFit="contain"
                alt="robot pregunta frecuentes"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 xl:w-6/12 flex items-center justify-center px-3 md:px-0">
          <FAQBox data={data3} fondo="bg-verdeLR" texto="text-white" />
        </div>
      </div>
    </>
  )
}
