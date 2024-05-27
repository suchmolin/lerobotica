import { HiOutlineLightBulb } from "react-icons/hi";

const TeacherResourcesCards = () => {
  return (
    <>
      <div className="w-full lg:w-11/12 mt-20 px-4 flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="w-full md:w-4/12 flex-col shadow-xl gap-5 rounded-xl overflow-hidden">
          <a href="/TeacherResources/ExploreLessons">
            <div className="w-full">
              <img
                src="/img/le_bricq_motion_essential_lifestyle_1hy21_45401_09_cropped.webp"
                alt="Explore Lessons"
                className="w-full h-full"
              />
            </div>
            <div className="w-full p-4">
              <HiOutlineLightBulb className="text-4xl text-yellow-500 mb-3" />
              <h3 className="text-2xl font-bold text-gray-800 font-[cerapro]">
                Explore Lessons
              </h3>
              <p className="text-gray-600 font-[cerapro] mb-10">
                Ready to use materials for your classroom.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default TeacherResourcesCards;
