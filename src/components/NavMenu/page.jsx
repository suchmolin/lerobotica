import Image from "next/image";
import { RiGraduationCapLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";

export default function NavMenu(props) {
  return (
    <nav className="w-full h-20 bg-[#f5f5f5] justify-center flex text-sm">
      <div className="h-full w-10/12 flex justify-between">
        <ul className="h-full flex gap-9 justify-center items-center ">
          <li className="cursor-pointer">
            <Image
              src="/img/legoEducation.svg"
              width={110}
              height={27}
              alt="Lego education Logo"
            />
          </li>
          <li className="hover:text-[#4f6cbd] cursor-pointer">
            Pre-K & Kindergarten
          </li>
          <li className="hover:text-[#4f6cbd] cursor-pointer">Elementary</li>
          <li className="hover:text-[#4f6cbd] cursor-pointer">Middle</li>
        </ul>
        <ul className="flex gap-5 items-center">
          <li className="flex gap-2 hover:text-[#4f6cbd] cursor-pointer">
            <span className="mt-1">
              <RiGraduationCapLine />
            </span>
            Teacher Resources
          </li>
          <li className="bg-[#006cb7] text-xs font-bold text-white py-2 px-4 hover:bg-[#00528c] cursor-pointer">
            REQUEST A MEETING
          </li>
          <li className="text-2xl hover:text-[#4f6cbd] cursor-pointer">
            <RiSearchLine />
          </li>
          <li className="text-xl hover:text-[#4f6cbd] cursor-pointer">
            <BsCart3 />
          </li>
        </ul>
      </div>
    </nav>
  );
}
