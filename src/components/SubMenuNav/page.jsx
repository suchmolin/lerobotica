"use client"
import Link from "next/link"

const SubMenuNav = ({ setMenuResp }) => {
  return (
    <ul className="h-fit lg:h-full flex gap-3 lg:gap-6 items-start lg:items-center flex-col lg:flex-row  text-lg">
      <li className="hover:text-[#4f6cbd] cursor-pointer">
        <Link onClick={() => setMenuResp(false)} href="/etapa/pre-escolar">
          {" "}
          Pre-escolar
        </Link>
      </li>
      <li className="hover:text-[#4f6cbd] cursor-pointer">
        <Link onClick={() => setMenuResp(false)} href="/etapa/primaria-baja">
          Primaria Baja
        </Link>
      </li>
      <li className="hover:text-[#4f6cbd] cursor-pointer">
        <Link onClick={() => setMenuResp(false)} href="/etapa/primaria-alta">
          Primaria Alta
        </Link>
      </li>
    </ul>
  )
}

export default SubMenuNav
