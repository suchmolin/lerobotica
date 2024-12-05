"use client"
import CountUp from "react-countup"

export default function CounterHeader() {
  return (
    <div className="w-11/12 sm:w-fit bg-amarilloLR text-azulLR sm:px-28 flex flex-col sm:flex-row justify-between items-center py-4 rounded-t-2xl gap-6 xl:gap-10 dropShadow5 mb-10">
      <div className=" flex gap-6 xl:gap-10">
        <div className="flex flex-col text-center">
          <CountUp
            className="text-5xl font-[baloo-bold]"
            end={3}
            duration={4}
          />
          <p className="text-xl leading-none font-bold">
            Sedes a nivel <br /> nacional
          </p>
        </div>
        <div className="flex flex-col text-center">
          <CountUp
            className="text-5xl font-[baloo-bold]"
            end={26}
            duration={4}
          />
          <p className="text-xl leading-none font-bold">
            Años de <br /> experiencia
          </p>
        </div>
      </div>
      <div className=" flex gap-6 xl:gap-10">
        <div className="flex flex-col text-center">
          <CountUp
            className="text-5xl font-[baloo-bold]"
            end={1772}
            duration={4}
            separator=""
          />
          <p className="text-xl leading-none font-bold">
            Alumnos <br /> alcanzados
          </p>
        </div>
      </div>
    </div>
  )
}
