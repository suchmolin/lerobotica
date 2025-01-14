"use client"

import { useState } from "react"
import SendedMsg from "../SendedMsg/page"

export default function FormNewsLetter() {
  const [sendedfoot, setSendedfoot] = useState(false)

  const handleSuscribe = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    data.name = data.email.slice(0, data.email.indexOf("@"))
    document.getElementById("BtnEnviar2").disabled = true

    const resp = await fetch("/api/fetchOdoonl", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    document.getElementById("myForm2").reset()

    setSendedfoot(true)
    document.getElementById("BtnEnviar2").disabled = false

    setTimeout(() => {
      setSendedfoot(false)
    }, 5000)
  }
  return (
    <form
      id="myForm2"
      onSubmit={(e) => handleSuscribe(e)}
      className="flex items-center"
    >
      <input
        required
        name="email"
        className="w-64 xs:w-80 sm:w-96 h-8 px-3"
        placeholder="Correo Electrónico"
        type="email"
      />
      <input type="hidden" value="LeRobotica" name="mailing_list" />
      <button
        id="BtnEnviar2"
        type="submit"
        className="-ml-7 hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-wait"
      >
        <img className="w-[19px] aspect-square" src="/img/sendIcon.png" />
      </button>
      {sendedfoot && <SendedMsg msg="¡Gracias por suscribirte!" />}
    </form>
  )
}
