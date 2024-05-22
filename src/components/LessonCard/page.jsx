"use client";

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
              src={
                item.urlImg ||
                "https://assets.education.lego.com/v3/assets/blt293eea581807678a/blt940bfebf6c4aa22d/62b05ea5e75cbf5ab676b1b1/45345_Science_U3_L2_Web_thumbnail.png?locale=en-us&auto=webp&format=jpeg&width=1800&quality=90&fit=bounds"
              }
              alt="imagen"
            />
          </div>
          <div className="relative h-[350px] py-2 px-3 flex flex-col ">
            <div>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-md mt-1">{item.subtitle}</p>
            </div>
            <p className="text-md mt-5 font-light">{item.description}</p>
            <div className="absolute bottom-10">
              <p className="text-sm mt-20">{item.categories}</p>
              <div className="flex flex-row gap-7 font-light mt-3 text-md">
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
