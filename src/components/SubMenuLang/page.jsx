import Image from "next/image";
const SubMenuLang = () => {
  return (
    <ul className="flex gap-3 lg:gap-7 h-fit lg:h-full w-10/12 text-sm flex-col lg:flex-row lg:items-center lg:justify-end mt-3 lg:mt-0">
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
  );
};

export default SubMenuLang;
