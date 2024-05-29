import { RequestCookiesAdapter } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import React from "react";
import RequestMeetingButton from "../RequestMeetingButton/page";

const Footer = () => {
  return (
    <footer className="w-full py-10">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full sm:w-8/12 lg:w-4/12 overflow-hidden">
          <video
            className="w-full scale-105"
            autoPlay
            muted
            loop
            src="/vid/Page_14-Anim.mp4"
          ></video>
        </div>

        <div className="w-full lg:w-10/12 h-[400px] sm:h-[300px] bg-[#ffd500] text-center text-black lg:rounded-t-xl flex flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-4xl font-bold w-10/12 md:w-6/12 py-2">
            Trae a Lerobotica a tu escuela o distrito
          </h2>
          <p className="text-lg">
            Nuestro equipo de expertos está aquí para ayudarte a encontrar la
            solución que se adapte a las necesidades de tus estudiantes.
          </p>
          <div className="py-2 mt-4">
            <RequestMeetingButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
