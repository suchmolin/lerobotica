"use client"
import { data } from "@/data/soluciones"
import NuestrosSetsDesk from "../NuestrosSetsDesk/page"
import NuestrosSetsMovil from "../NuestrosSetsMovil/page"
import RobotsEscondidos from "../RobotsEscondidos/page"

export default function NuestrosSets() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <h2 className="text-center text-4xl xs:text-5xl font-[baloo-bold] text-azulLR mb-7 -botto">
        Conoce nuestros sets
      </h2>
      <NuestrosSetsDesk data={data} />
      <NuestrosSetsMovil data={data} />
      <RobotsEscondidos
        idRobot="solucionesrobot"
        position={"-bottom-32 right-0"}
      />
    </div>
  )
}
