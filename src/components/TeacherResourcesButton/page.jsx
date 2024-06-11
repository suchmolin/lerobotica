import { RiGraduationCapLine } from "react-icons/ri";
import Link from "next/link";
const TeacherResourcesButton = ({ setMenuResp }) => {
  const handleClick = (e) => {
    setMenuResp(false);
  };

  return (
    <div className="flex gap-1 flex-wrap">
      <span className="mt-1">
        <RiGraduationCapLine />
      </span>
      <Link onClick={(e) => handleClick(e)} href="/TeacherResources">
        Recursos de Maestros
      </Link>
    </div>
  );
};

export default TeacherResourcesButton;
