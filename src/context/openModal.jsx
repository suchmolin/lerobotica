"use client"
import { createContext } from "react"
import { useState } from "react"

export const OpenModalContext = createContext()

export const OpenModalProvider = ({ children }) => {
  const [openModalContact, setOpenModalContact] = useState(false)
  const [robotsCount, setRobotsCount] = useState([])
  const [openRobotsMsg, setOpenRobotsMsg] = useState(false)
  const [openRobotsMsgFinal, setOpenRobotsMsgFinal] = useState(false)

  const checkRobotsCount = (idrobot) => {
    const array = [...robotsCount]
    if (array.includes(idrobot)) {
      return
    } else {
      array.push(idrobot)
      setRobotsCount(array)
    }
    if (array.length === 10) {
      setOpenRobotsMsg(false)
      setOpenRobotsMsgFinal(true)
    } else {
      setOpenRobotsMsg(true)
    }
    console.log(robotsCount)
  }

  return (
    <OpenModalContext.Provider
      value={{
        openModalContact,
        setOpenModalContact,
        robotsCount,
        setRobotsCount,
        checkRobotsCount,
        openRobotsMsg,
        setOpenRobotsMsg,
        openRobotsMsgFinal,
        setOpenRobotsMsgFinal,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  )
}
