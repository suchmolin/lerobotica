"use client";
import { useEffect, useRef, useState } from "react";
import TeacherLeft from "../TeacherLeft/page";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

export default function SliderTeacher(props) {
  const listRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const listNode = listRef.current;
    const divNode = listNode.querySelectorAll(".sliderItem")[currentSlide];

    if (divNode) {
      intoView(divNode);
    }
  }, [currentSlide]);

  const intoView = (nodo) => {
    if (!firstRender) {
      nodo.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    setFirstRender(false);
  };

  const scrollToSlider = (direction) => {
    if (direction === "prev") {
      setCurrentSlide((prev) => (currentSlide === 0 ? 2 : prev - 1));
    } else {
      setCurrentSlide((prev) => (currentSlide === 2 ? 0 : prev + 1));
    }
  };
  return (
    <Slide triggerOnce direction="left">
      <h2 className="text-2xl md:text-5xl font-bold text-center">
        Opiniones de los maestros
      </h2>
      <div className="w-full flex justify-center ">
        <div
          ref={listRef}
          className="w-10/12 relative h-full flex overflow-hidden"
        >
          <div className="sliderItem min-w-full flex flex-col items-center">
            <TeacherLeft
              left={true}
              imgUrl="perfil4.png"
              resena="2Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, assumenda aliquam illum porro, eveniet veniam? Eius dicta est doloremque dolores quidem debitis facere similique. Perspiciatis iusto mollitia eos ipsum impedit"
            />
            <TeacherLeft
              left={false}
              imgUrl="perfil6.png"
              resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, "
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
          </div>
          <div className=" sliderItem min-w-full flex flex-col items-center">
            <TeacherLeft
              left={true}
              imgUrl="perfil1.png"
              resena="0Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, assumenda aliquam illum porro, eveniet veniam? Eius dicta est doloremque dolores quidem debitis facere similique. Perspiciatis iusto mollitia eos ipsum impedit"
            />
            <TeacherLeft
              left={false}
              imgUrl="perfil5.png"
              resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, "
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
          </div>
          <div className=" sliderItem min-w-full flex flex-col items-center">
            <TeacherLeft
              left={true}
              imgUrl="perfil3.png"
              resena="1Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, assumenda aliquam illum porro, eveniet veniam? Eius dicta est doloremque dolores quidem debitis facere similique. Perspiciatis iusto mollitia eos ipsum impedit"
            />
            <TeacherLeft
              left={false}
              imgUrl="perfil2.png"
              resena="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nemo odit, facere numquam id officiis commodi deleniti dolores. Tempora explicabo modi corporis sit nulla ut laboriosam fuga, "
              name="Lorem ipsum, dolor sit amet consectetur adipisicing."
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-10 mt-3">
        <button
          aria-label="prev slider"
          onClick={() => scrollToSlider("prev")}
          className="p-3 rounded-full shadow-xl flex items-center hover:bg-gray-100 transition-all duration-300"
        >
          <IoIosArrowBack />
        </button>
        <button
          aria-label="next slider"
          onClick={() => scrollToSlider("next")}
          className="p-3 rounded-full shadow-xl flex items-center hover:bg-gray-100 transition-all duration-300"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </Slide>
  );
}
