"use client"
import { IoClose } from "react-icons/io5"

import FormContact from "../FormContact/page"
import Image from "next/legacy/image"
import { useContext } from "react"
import { OpenModalContext } from "@/context/openModal"

export default function ModalContacto() {
  const { openModalContact, setOpenModalContact } = useContext(OpenModalContext)
  return (
    <div
      className={`${openModalContact ? "block" : "hidden"} fixed top-0 left-0 bg-black/40 w-full h-full flex items-center justify-center z-50`}
    >
      <div
        onClick={() => setOpenModalContact(false)}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="overflow-hidden relative p-10 bg-white rounded-t-[40px]">
        <div className="w-full flex justify-between pl-10 sm:pl-20 pb-7 xl:pb-0">
          <div className="relative w-[200px] h-[50px]">
            <Image
              src="/img/Logo-Lerobotica-horizontal-RGB.png"
              objectFit="contain"
              layout="fill"
              alt="Logo LeRobotica"
            />
          </div>
          <button
            onClick={() => setOpenModalContact(false)}
            className="text-3xl text-gray-400 hover:scale-110 transition-all duration-300"
          >
            <IoClose />
          </button>
        </div>
        <FormContact inModal={true} />
        <div className="absolute -bottom-10 -right-10">
          <div className="relative w-[130px] aspect-square">
            <Image
              src="/img/legoVerde.png"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              alt="logo de lego amarillo"
            />
          </div>
        </div>
        <div className="absolute -top-10 -left-5">
          <div className="relative w-[230px] aspect-square">
            <Image
              src="/img/legoAzulGrande2.png"
              layout="fill"
              objectFit="contain"
              objectPosition="Left"
              alt="logo de lego amarillo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
