import Image from "next/image"
const SubMenuLang = () => {
  return (
    <ul className="flex gap-3 lg:gap-7 h-fit lg:h-full w-10/12 text-sm flex-col lg:flex-row lg:items-center lg:justify-end mt-3 lg:mt-0 ">
      <li className="hover:scale-105 cursor-pointer transition-all duration-300 ">
        ¿Quiénes Somos?
      </li>
      <li className="hover:scale-105 cursor-pointer transition-all duration-300 ">
        Soluciones
      </li>
      <li className="hover:scale-105 cursor-pointer transition-all duration-300 ">
        Blog
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
