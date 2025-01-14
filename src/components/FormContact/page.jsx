"use client"
import Image from "next/image"
import { useState } from "react"
import SendedMsg from "../SendedMsg/page"

export default function FormContact({ inModal }) {
  const [sended, setSended] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    document.getElementById("BtnEnviar").disabled = true

    const resp = await fetch("/api/fetchOdoo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    document.getElementById("myForm").reset()

    document.getElementById("BtnEnviar").disabled = false
    setSended(true)

    setTimeout(() => {
      setSended(false)
    }, 5000)
  }

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center">
      <form
        id="myForm"
        onSubmit={(e) => handleSubmit(e)}
        className={`dropShadow2 ${inModal ? "w-[280px]" : "w-[360px]"} sm:w-[500px] lg:w-[400px] xl:w-[500px] py-5 px-7 rounded-t-[40px] bg-azulClaroLR`}
      >
        <h2
          className={`${inModal ? "text-3xl lg:text-5xl " : "text-5xl"} font-[baloo-bold] py-7 text-white`}
        >
          Contáctanos
        </h2>
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          required
          className="w-full ring-0 border-none pl-5 mb-4"
        />
        <input
          name="email"
          type="email"
          placeholder="Correo Electrónico"
          required
          className="w-full ring-0 border-none pl-5 mb-4"
        />
        <select
          name="sede"
          required
          className="w-full ring-0 border-none pl-5 mb-4 text-gray-600"
        >
          <option value="">Selecciona la sede de tu interés</option>
          <option value="LEROBOTICA CCCT">Caracas - CCCT</option>
          <option value="LEROBOTICA PRADOS DEL ESTE">
            Caracas - Prados del Este
          </option>
          <option value="LEROBOTICA PZO">Puerto Ordaz</option>
        </select>
        <input
          name="phone"
          type="number"
          placeholder="Teléfono"
          required
          className="w-full ring-0 border-none pl-5 mb-4"
        />
        <textarea
          name="description"
          placeholder="Mensaje"
          className="w-full ring-0 border-none pl-5 mb-4"
          rows={4}
        />
        <input
          type="hidden"
          value="Página Web LeRobotica"
          name="social_media"
        />
        <input type="hidden" value="LEROBOTICA" name="from" />
        <div className="w-full flex justify-end">
          <input
            id="BtnEnviar"
            type="submit"
            className="bg-azulLR text-white py-2 px-4 font-[baloo-bold] text-xl cursor-pointer disabled:opacity-50 disabled:cursor-wait"
            value="Enviar"
          />
        </div>
      </form>
      {sended && <SendedMsg msg="¡Su mensaje ha sido enviado con exito!" />}
      <div
        className={`w-[500px] xl:w-[600px] aspect-square flex relative items-center ${inModal ? "hidden lg:block" : ""}`}
      >
        <div className="absolute bottom-0 lg:top-0 lef-0 w-full h-[300px] lg:h-full">
          <div className="relative w-full h-full lg:scale-x-[-1] rotate-90 lg:rotate-0">
            <Image
              src="/img/headerPrimariaBajaAlt.png"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="header"
            />
          </div>
        </div>
        <div className="absolute top-0 left-36 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/img/contactonueva.png"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="header"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
