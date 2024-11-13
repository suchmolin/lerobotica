"use client"
import { IoClose } from "react-icons/io5"

import FormContact from "../FormContact/page"
import Image from "next/image"

export default function ModalContacto({
  openModalContact,
  setOpenModalContact,
}) {
  return (
    <div
      className={`${openModalContact ? "block" : "hidden"} fixed top-0 left-0 bg-black/40 w-full h-full flex items-center justify-center`}
    >
      <div
        onClick={() => setOpenModalContact(false)}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div className="overflow-hidden relative p-10 bg-white rounded-t-[40px]">
        <div className="w-full flex justify-end">
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