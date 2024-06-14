"use client";
import FAQBox from "../FAQBox/page";
import { Slide } from "react-awesome-reveal";
export default function PreguntasFrecuentes() {
  return (
    <Slide
      triggerOnce
      direction="up"
      className="w-full flex flex-col items-center justify-center mt-10 lg:mt-6 mb-10 font-[cerapro]"
    >
      <div className="w-full mt-0 lg:mt-10 flex flex-col lg:flex-row justify-center ">
        <div className=" lg:w-[330px] h-[330px] overflow-hidden rounded-full mx-2 mt-0 lg:mt-10">
          <video
            className="h-[590px] -mt-24"
            autoPlay
            muted
            loop
            src="/img/helicopter.mp4"
          >
            <track label="cap" kind="caption" />
          </video>
        </div>
        <div className="w-11/12 lg:w-7/12 mt-3 lg:mt-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Preguntas Frecuentes
          </h2>
          <FAQBox />
        </div>
      </div>
    </Slide>
  );
}
