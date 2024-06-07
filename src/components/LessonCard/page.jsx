"use client";
import Link from "next/link";
export default function LessonCard(props) {
  const { count, data } = props;

  return (
    <>
      {data.slice(0, count).map((item, index) => (
        <a
          key={index}
          href={item.redir}
          className="relative customShadow w-full h-full sm:w-5/12 lg:w-3/12 my-4 rounded-sm min-h-[610px]"
        >
          <div className="relative">
            <h4 className="absolute  rounded-t-sm p-2 w-full bg-white/[0.6] text-xs">
              {item.catTitle}
            </h4>
            <img
              className="w-full max-h-[289px] rounded-t-sm"
              src={item.urlImg || "/img/lessonsImg/sinImagen.png"}
              alt="imagen"
            />
          </div>
          <div className="relative h-[350px] pt-6 pb-2 px-3 flex flex-col ">
            <div>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-md mt-1">{item.subtitle}</p>
            </div>
            <p className="text-sm mt-5 font-light">{item.description}</p>
            <div className="absolute bottom-10">
              <p className="text-sm mt-20">{item.categories}</p>
              <div className="flex flex-row gap-2 font-light mt-3 text-sm">
                <p>{item.duration}</p>
                <p>{item.level}</p>
                <p>{item.grade}</p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
}
