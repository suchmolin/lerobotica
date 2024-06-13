import { RequestCookiesAdapter } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import React from "react";
import RequestMeetingButton from "../RequestMeetingButton/page";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mt-24">
      <div className="flex justify-center w-full h-[60px] md:h-[100px] z-10 mb-12">
        <div className="relative w-[280px] md:w-[680px]">
          <Image
            objectFit="cover"
            src="/img/footerRobots.jpg"
            alt="footerimage"
            fill
            className=" object-cover z-0"
          />
        </div>
      </div>
      <div className="w-full border-t-2 border-t-gray-100 flex justify-center items-center flex-col">
        <div className="w-full md:w-9/12 flex gap-4 items-center justify-center px-10 md:px-0 py-5 bg-[#FFD100] rounded-sm md:rounded-lg -mt-9">
          <h2 className="text-lg md:text-2xl font-[cerapro] font-bold text-gray-700">
            Trae a Lerobotica a tu escula o distrito
          </h2>
          <RequestMeetingButton />
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 justify-center font-[cerapro] md:py-10">
          <div className="px-4 mt-5 md:mt-0 flex flex-col justify-center md:justify-start text-center md:text-start">
            <p className="text-gray-700 py-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p className="text-gray-700 py-1">Lorem ipsum dolor sit.</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className="flex gap-3">
              <div className="px-7 flex flex-col items-center">
                <p className="font-bold py-2 text-gray-700">Conocenos</p>
                <a href="/" className="text-gray-700 py-1">
                  About uS
                </a>
                <a href="/" className="text-gray-700 py-1">
                  Corporate Sale
                </a>
                <a href="/" className="text-gray-700 py-1">
                  Terms & Services
                </a>
              </div>
              <div className="px-7 flex flex-col items-center">
                <p className="font-bold py-2 text-gray-700">Support</p>
                <a href="/" className="text-gray-700 py-1">
                  About uS
                </a>
                <a href="/" className="text-gray-700 py-1">
                  Corporate Sale
                </a>
                <a href="/" className="text-gray-700 py-1">
                  Terms & Services
                </a>
              </div>
            </div>
            <div className="px-7 flex flex-col items-center">
              <p className="font-bold py-2 text-gray-700">Contact</p>
              <a href="/" className="text-gray-700 py-1">
                About uS
              </a>
              <a href="/" className="text-gray-700 py-1">
                Corporate Sale
              </a>
              <a href="/" className="text-gray-700 py-1">
                Terms & Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
