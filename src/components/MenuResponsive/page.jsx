import Image from "next/legacy/image"
import SubMenuLang from "../SubMenuLang/page"
import SubMenuNav from "../SubMenuNav/page"
import TeacherResourcesButton from "../TeacherResourcesButton/page"
import RequestMeetingButton from "../RequestMeetingButton/page"
const MenuResponsive = (props) => {
  return (
    <div className="pl-8 fixed lg:hidden top-0 left-0 w-full pb-8 bg-[#f5f5f5] pt-[80px] z-30">
      <SubMenuNav />
      <SubMenuLang />
      <div className="flex flex-col gap-2 sm:hidden mt-3">
        <TeacherResourcesButton />
        <RequestMeetingButton />
      </div>
    </div>
  )
}

export default MenuResponsive
