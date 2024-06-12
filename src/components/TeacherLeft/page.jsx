import Image from "next/image";

const TeacherLeft = (props) => {
  const { left, imgUrl, resena, name } = props;
  return (
    <div
      className={`w-11/12 lg:w-8/12 min-h-[200px] flex flex-col md:flex-row items-center gap-5 mt-7 px-3 py-5 border-2 rounded-lg shadow-xl ${left ? "" : "flex-row-reverse"}`}
    >
      <div className="w-[200px] overflow-hidden rounded-full flex items-center border-2">
        <img
          className="h-full w-full"
          src={"/img/" + imgUrl}
          alt="teacher profile"
        />
      </div>
      <div className={`w-full px-3 ${left ? "" : "text-left md:text-right"}`}>
        <p>{resena}</p>
        <p className="py-3 text-gray-500">{name}</p>
      </div>
    </div>
  );
};

export default TeacherLeft;
