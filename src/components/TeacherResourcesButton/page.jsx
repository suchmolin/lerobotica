import { RiGraduationCapLine } from "react-icons/ri";
const TeacherResourcesButton = () => {
  return (
    <div className="flex gap-1 flex-wrap">
      <span className="mt-1">
        <RiGraduationCapLine />
      </span>
      <a href="/TeacherResources">Teacher Resources</a>
    </div>
  );
};

export default TeacherResourcesButton;
