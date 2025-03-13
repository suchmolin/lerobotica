import Image from "next/legacy/image"
import { Slide } from "react-awesome-reveal"
import { IoClose } from "react-icons/io5"

export default function ModalSets({ set, setOpenModalSet }) {
  return (
    <div
      className={`fixed top-0 left-0 bg-black/40 w-full h-full flex items-center justify-center z-50`}
    >
      <div
        onClick={() => setOpenModalSet(false)}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="w-[360px] sm:w-[600px] lg:w-[1000px] xl:w-[1200px] overflow-hidden relative py-10 pr-5 sm:pr-10 bg-white rounded-t-[40px]">
        <div className="w-full flex justify-end">
          <button
            onClick={() => setOpenModalSet(false)}
            className="text-3xl text-gray-400 hover:scale-110 transition-all duration-300"
          >
            <IoClose />
          </button>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row justify-center">
          <div className="w-full flex justify-center lg:w-5/12 h-full relative">
            <div className="absolute bg-azulLR w-full h-[200px] sm:h-[240px] lg:h-[350px] rounded-tr-[100px]"></div>
            <Slide direction="left">
              <div className="relative -top-5 w-[250px] sm:w-[300px] lg:w-[450px] aspect-square">
                <Image
                  src={set.imgAlt}
                  objectFit="contain"
                  layout="fill"
                  alt={set.name}
                  priority
                />
              </div>
            </Slide>
          </div>
          <div className="lg:w-7/12 pl-10 sm:pl-20 xl:px-20">
            <h2 className="font-[baloo-bold] text-4xl sm:text-5xl lg:text-5xl text-azulLR mb-5">
              {set.name}
            </h2>
            <ul className="list-disc marker:text-azulLR">
              {set.caracteristicas.map((car) => (
                <li
                  key={car.titulo}
                  className="text-xl text-black lg:text-2xl mb-3"
                >
                  <span className="font-bold font-[baloo-bold] text-azulLR">
                    {car.titulo}{" "}
                  </span>
                  {car.subtitulo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
