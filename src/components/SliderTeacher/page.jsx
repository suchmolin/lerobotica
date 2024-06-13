"use client";
import { useEffect, useRef, useState } from "react";
import TeacherLeft from "../TeacherLeft/page";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function SliderTeacher(props) {
  const listRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const divNode = listNode.querySelectorAll(".sliderItem")[currentSlide];

    if (divNode) {
      divNode.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentSlide]);

  const scrollToSlider = (direction) => {
    if (direction === "prev") {
      setCurrentSlide((prev) => (currentSlide === 0 ? 3 : prev - 1));
    } else {
      setCurrentSlide((prev) => (currentSlide === 3 ? 0 : prev + 1));
    }
  };
  return (
    <>
      <div className="w-full flex justify-center ">
        <div
          ref={listRef}
          className="w-10/12 relative h-full flex overflow-hidden"
        >
          <div className=" sliderItem min-w-full flex flex-col items-center">
            <TeacherLeft
              left={true}
              imgUrl="perfil1.jpg"
              resena="0Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, assumenda aliquam illum porro, eveniet veniam? Eius dicta est doloremque dolores quidem debitis facere similique. Perspiciatis iusto mollitia eos ipsum impedit, architecto blanditiis!"
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
            <TeacherLeft
              left={false}
              imgUrl="perfil2.jpg"
              resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, "
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
          </div>
          <div className=" sliderItem min-w-full flex flex-col items-center">
            <TeacherLeft
              left={true}
              imgUrl="perfil1.jpg"
              resena="1Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, assumenda aliquam illum porro, eveniet veniam? Eius dicta est doloremque dolores quidem debitis facere similique. Perspiciatis iusto mollitia eos ipsum impedit, architecto blanditiis!"
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
            <TeacherLeft
              left={false}
              imgUrl="perfil2.jpg"
              resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, "
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
          </div>
          <div className="sliderItem min-w-full flex flex-col items-center">
            <TeacherLeft
              left={true}
              imgUrl="perfil1.jpg"
              resena="2Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, assumenda aliquam illum porro, eveniet veniam? Eius dicta est doloremque dolores quidem debitis facere similique. Perspiciatis iusto mollitia eos ipsum impedit, architecto blanditiis!"
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
            <TeacherLeft
              left={false}
              imgUrl="perfil2.jpg"
              resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, "
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
          </div>
          <div className="sliderItem min-w-full flex flex-col items-center">
            <TeacherLeft
              left={true}
              imgUrl="perfil1.jpg"
              resena="3Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, assumenda aliquam illum porro, eveniet veniam? Eius dicta est doloremque dolores quidem debitis facere similique. Perspiciatis iusto mollitia eos ipsum impedit, architecto blanditiis!"
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
            <TeacherLeft
              left={false}
              imgUrl="perfil2.jpg"
              resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, "
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-10 mt-3">
        <button
          onClick={() => scrollToSlider("prev")}
          className="p-3 rounded-full shadow-xl flex items-center hover:bg-gray-100 transition-all duration-300"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => scrollToSlider("next")}
          className="p-3 rounded-full shadow-xl flex items-center hover:bg-gray-100 transition-all duration-300"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
}
