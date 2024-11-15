"use client"
import Link from "next/link"
const SubMenuLang = ({ setMenuResp }) => {
  return (
    <ul className="flex gap-3 lg:gap-7 h-fit lg:h-full w-10/12 text-lg flex-col lg:flex-row lg:items-center lg:justify-end mt-3 lg:mt-0 ">
      <li className="hover:scale-105 cursor-pointer transition-all duration-300 ">
        <Link onClick={() => setMenuResp(false)} href="/quienes-somos">
          ¿Quiénes Somos?
        </Link>
      </li>
      <li className="hover:scale-105 cursor-pointer transition-all duration-300 ">
        <Link onClick={() => setMenuResp(false)} href="/soluciones">
          Soluciones
        </Link>
      </li>
      <li className="hover:scale-105 cursor-pointer transition-all duration-300 ">
        <Link onClick={() => setMenuResp(false)} href="/contactanos">
          Contáctanos
        </Link>
      </li>
      <li className="hover:scale-105 cursor-pointer transition-all duration-300 ">
        <Link onClick={() => setMenuResp(false)} href="/blog">
          Blog
        </Link>
      </li>
      {/*
      <li className="text-xl hover:scale-105 cursor-pointer">
        <Image width={22} height={22} src="/img/profile.svg" alt="Usa Flag" />
      </li>
      <li className="cursor-pointer">
        <Image width={22} height={22} src="/img/usaFlag.png" alt="Usa Flag" />
      </li>
      */}
    </ul>
  )
}

export default SubMenuLang
