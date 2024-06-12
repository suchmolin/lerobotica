import Image from "next/image";

const TeacherLeft = (props) => {
  const { left, imgUrl, resena, name } = props;
  return (
    <div
      className={`w-8/12 h-[200px] flex gap-5 mt-7 px-3 py-5 border-2 rounded-lg shadow-xl ${left ? "" : "flex-row-reverse"}`}
    >
      <div className="w-[200px] overflow-hidden rounded-full flex items-center border-2">
        <img
          className="h-full w-full"
          src={"/img/" + imgUrl}
          alt="teacher profile"
        />
      </div>
      <div className={`w-full ${left ? "" : "text-right"}`}>
        <p>{resena}</p>
        <p className="py-3 text-gray-500">{name}</p>
      </div>
    </div>
  );
};

export default TeacherLeft;
