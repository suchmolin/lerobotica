"use client"
import { OpenModalContext } from "@/context/openModal"
import Image from "next/image"
import { useContext } from "react"

export default function RobotsEscondidos({
  idRobot,
  mirror,
  size,
  position,
  click,
}) {
  const { robotsCount, checkRobotsCount } = useContext(OpenModalContext)
  const sizeRobot = size === "sm" ? "w-10 h-24" : "w-20 h-52"

  return (
    <button
      onClick={() => checkRobotsCount(idRobot)}
      className={`group absolute bottom-0 z-20 ${position || "bottom-0 right-0"}`}
    >
      <div className={`${sizeRobot} relative`}>
        <Image
          id={idRobot}
          src={
            robotsCount.includes(idRobot)
              ? "/img/toyPressed.png"
              : "/img/toy.png"
          }
          objectFit="contain"
          layout="fill"
          objectPosition={mirror ? "left" : "right"}
          alt="robot escondido"
          className={`group-hover:drop-shadow-lg transtion-all duration-300 ${mirror ? "transform scale-x-[-1]" : ""}`}
        />
      </div>
    </button>
  )
}
