import Image from "next/image";

export default function NavLang(props) {
  return (
    <div className="bg-[#efefef] h-11 flex justify-center w-full">
      <ul className="flex gap-7 h-full w-10/12 text-sm  items-center justify-end">
        <li className="hover:text-[#4f6cbd] cursor-pointer">Our Story</li>
        <li className="hover:text-[#4f6cbd] cursor-pointer">Blog</li>
        <li className="hover:text-[#4f6cbd] cursor-pointer">Support</li>
        <li className="text-xl hover:text-[#4f6cbd] cursor-pointer">
          <Image width={22} height={22} src="/img/profile.svg" alt="Usa Flag" />
        </li>
        <li className="cursor-pointer">
          <Image width={22} height={22} src="/img/usaFlag.png" alt="Usa Flag" />
        </li>
      </ul>
    </div>
  );
}
