"use client";
import TeacherLeft from "../TeacherLeft/page";
import { Slide } from "react-awesome-reveal";
const TeacherOpinions = () => {
  return (
    <Slide triggerOnce direction="left">
      <div className="w-full flex flex-col items-center mt-16 lg:mt-28 mb-10 font-[cerapro]">
        <h2 className="text-2xl md:text-5xl font-bold">
          Opiniones de los maestros
        </h2>
        <TeacherLeft
          left={true}
          imgUrl="perfil1.jpg"
          resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, assumenda aliquam illum porro, eveniet veniam? Eius dicta est doloremque dolores quidem debitis facere similique. Perspiciatis iusto mollitia eos ipsum impedit, architecto blanditiis!"
          name="Lorem ipsum, dolor sit amet consectetur adipisicing."
        />
        <TeacherLeft
          left={false}
          imgUrl="perfil2.jpg"
          resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, "
          name="Lorem ipsum, dolor sit amet consectetur adipisicing."
        />
      </div>
    </Slide>
  );
};

export default TeacherOpinions;
