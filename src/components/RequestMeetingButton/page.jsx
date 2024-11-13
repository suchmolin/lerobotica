"use client"
import { OpenModalContext } from "@/context/openModal"
import { useContext } from "react"

const RequestMeetingButton = ({ size }) => {
  const { setOpenModalContact } = useContext(OpenModalContext)

  return (
    <>
      <button
        onClick={() => setOpenModalContact(true)}
        className={`flex w-fit bg-azulLR text-${size} font-[baloo-bold] text-white  px-3 py-1 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer flex-nowrap`}
      >
        Contáctanos
      </button>
    </>
  )
}

export default RequestMeetingButton
