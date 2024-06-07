"use client";
import Image from "next/image";

import { RiSearchLine } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import SubMenuNav from "../SubMenuNav/page";
import MenuResponsive from "../MenuResponsive/page";
import TeacherResourcesButton from "../TeacherResourcesButton/page";
import RequestMeetingButton from "../RequestMeetingButton/page";
import Link from "next/link";

export default function NavMenu(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuResp, setMenuResp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 44);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      translate="no"
      className={`w-full h-20 bg-[#f5f5f5] justify-center flex text-sm font-[cerapro] z-50 ${isScrolled ? "fixed top-0" : "relative"}`}
    >
      <div className="h-full w-10/12 flex justify-between z-40">
        <div className="flex flex-row items-center gap-6">
          <Link
            onClick={() => setMenuResp(false)}
            href="/"
            className="cursor-pointer"
          >
            <Image
              src="/img/Logo-Lerobotica-horizontal-RGB.png"
              width={100}
              height={27}
              alt="Lego education Logo"
            />
          </Link>
          <div className="hidden lg:flex">
            <SubMenuNav />
          </div>
        </div>
        <ul className="flex gap-4 items-center">
          <li className="hidden sm:flex gap-2 hover:text-[#4f6cbd] cursor-pointer">
            <TeacherResourcesButton setMenuResp={setMenuResp} />
          </li>
          <li className="hidden sm:block">
            <RequestMeetingButton />
          </li>
          <li className="text-2xl hover:text-[#4f6cbd] cursor-pointer">
            <RiSearchLine />
          </li>
          <li className="text-xl hover:text-[#4f6cbd] cursor-pointer">
            <BsCart3 />
          </li>
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
  );
}
