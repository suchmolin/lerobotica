import { OpenModalContext } from "@/context/openModal"
import { useContext } from "react"
import { Fade } from "react-awesome-reveal"
import { FaCheckCircle } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

export default function ConteoRobots() {
  const { robotsCount, setOpenRobotsMsg } = useContext(OpenModalContext)
  return (
    <div className="fixed w-full bottom-20 sm:bottom-10 left-0 h-[80px] flex justify-center items-center z-50">
      <Fade direction="up" triggerOnce>
        <div className="dropShadow3 relative flex flex-col px-10 py-4 bg-gray-50 rounded-xl  items-center">
          <div className="flex gap-3 items-center">
            <FaCheckCircle className="text-[#cdea80] text-base sm:text-xl" />
            <p className="text-base sm:text-xl">
              Has conseguido {robotsCount.length} robots de 10
            </p>
          </div>
          <p className="text-base sm:text-xl">
            Consiguelos todos para obtener un premio
          </p>
          <button onClick={() => setOpenRobotsMsg(false)}>
            <IoClose className="text-2xl absolute top-1 right-1 hover:scale-105" />
          </button>
        </div>
      </Fade>
    </div>
  )
}
