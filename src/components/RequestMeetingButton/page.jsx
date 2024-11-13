"use client"
import Link from "next/link"
import ModalContacto from "../ModalContacto/page"
import { useState } from "react"
import { Button } from "flowbite-react"

const RequestMeetingButton = ({ size }) => {
  const [openModalContact, setOpenModalContact] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpenModalContact(true)}
        className={`flex w-fit bg-azulLR text-${size} font-[baloo-bold] text-white  px-3 py-1 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer flex-nowrap`}
      >
        Contáctanos
      </button>
      <ModalContacto
        openModalContact={openModalContact}
        setOpenModalContact={setOpenModalContact}
      />
    </>
  )
}

export default RequestMeetingButton
