import Image from "next/image";
import SubMenuLang from "../SubMenuLang/page";
import SubMenuNav from "../SubMenuNav/page";
const MenuResponsive = () => {
  return (
    <div className="fixed lg:hidden top-0 left-0 w-full h-screen bg-[#f5f5f5] pt-[80px] z-30">
      <SubMenuNav />
      <SubMenuLang />
    </div>
  );
};

export default MenuResponsive;
