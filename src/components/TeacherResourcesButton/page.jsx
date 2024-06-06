import { RiGraduationCapLine } from "react-icons/ri";
import Link from "next/link";
const TeacherResourcesButton = () => {
  return (
    <div className="flex gap-1 flex-wrap">
      <span className="mt-1">
        <RiGraduationCapLine />
      </span>
      <Link href="/TeacherResources">Recursos de Maestros</Link>
    </div>
  );
};

export default TeacherResourcesButton;
