"use client"
import { createContext } from "react"
import { useState, useEffect } from "react"

export const OpenModalContext = createContext()

export const OpenModalProvider = ({ children }) => {
  const [openModalContact, setOpenModalContact] = useState(false)

  return (
    <OpenModalContext.Provider
      value={{
        openModalContact,
        setOpenModalContact,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  )
}
