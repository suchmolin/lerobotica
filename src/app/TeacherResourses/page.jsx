import LessonCard from "@/components/LessonCard/page";
import NavLang from "@/components/NavLang/page";
import NavMenu from "@/components/NavMenu/page";

export default function TeacherResourses(props) {
    return (
    <>
        <NavLang/>
        <NavMenu/>
        <div className="m-3">
            <LessonCard/>
        </div>
    </>
    )
}