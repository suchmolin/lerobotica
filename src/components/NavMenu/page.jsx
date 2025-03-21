"use client"

import { useState, useEffect, useContext } from "react"
import { IoMdMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io"
import SubMenuNav from "../SubMenuNav/page"
import MenuResponsive from "../MenuResponsive/page"
import TeacherResourcesButton from "../TeacherResourcesButton/page"
import RequestMeetingButton from "../RequestMeetingButton/page"
import Link from "next/link"
import SvgLogoHorizontal from "../SvgLogoHorizontal/page"
import { OpenModalContext } from "@/context/openModal"
import ConteoRobots from "../ConteoRobots/page"
import ConteoRobotsFinal from "../ConteoRobotsFinal/page"

export default function NavMenu(props) {
  const { menuResp, setMenuResp } = useContext(OpenModalContext)
  const { openRobotsMsg, openRobotsMsgFinal } = useContext(OpenModalContext)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 44)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const firstSecElement = document.querySelector(".firstSec")
    if (isScrolled) {
      if (firstSecElement) {
        firstSecElement.classList.add("mt-[80px]")
      }
    } else {
      if (firstSecElement) {
        firstSecElement.classList.remove("mt-[80px]")
      }
    }
  }, [isScrolled])

  return (
    <>
      <nav
        translate="no"
        className={`w-full h-20 bg-[#f5f5f5] justify-center flex text-sm  z-40 dropShadow6 ${isScrolled ? "fixed top-0" : "relative"}`}
      >
        <div className="h-full w-10/12 flex justify-between z-40">
          <div className="flex flex-row items-center gap-6">
            <div className="hidden lg:flex">
              <SubMenuNav />
            </div>
          </div>

          <Link
            aria-label="Home LeRobotica"
            href="/"
            className="cursor-pointer h-fit hover:scale-105 transition-all duration-300"
          >
            <SvgLogoHorizontal />
          </Link>

          <ul className="flex gap-4 items-center">
            <li className="hidden sm:flex gap-2 hover:text-[#4f6cbd] cursor-pointer">
              <TeacherResourcesButton />
            </li>
            <li className="hidden sm:block">
              <RequestMeetingButton />
            </li>
            {/*<li className="text-2xl hover:text-[#4f6cbd] cursor-pointer">
            <RiSearchLine />
          </li>
          <li className="text-xl hover:text-[#4f6cbd] cursor-pointer">
            <BsCart3 />
          </li>*/}
            <li
              onClick={() => setMenuResp(!menuResp)}
              className="block lg:hidden text-2xl hover:text-[#4f6cbd] cursor-pointer"
            >
              {menuResp ? <IoMdClose /> : <IoMdMenu />}
            </li>
          </ul>
        </div>
        {menuResp && <MenuResponsive />}
      </nav>
      {openRobotsMsg && <ConteoRobots />}
      {openRobotsMsgFinal && <ConteoRobotsFinal />}
    </>
  )
}
