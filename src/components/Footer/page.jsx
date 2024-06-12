import { RequestCookiesAdapter } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import React from "react";
import RequestMeetingButton from "../RequestMeetingButton/page";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mt-24">
      <div className="w-full flex gap-3 justify-center z-10 mb-12">
        <Image
          width={800}
          height={400}
          src="/img/footerRobots.jpg"
          alt="footerimage"
        />
      </div>
      <div className="w-full border-t-2 border-t-gray-100 flex justify-center items-center flex-col">
        <div className="w-9/12 flex gap-4 items-center justify-center py-5 bg-[#FFD100] rounded-lg -mt-9">
          <h2 className="text-2xl font-[cerapro] font-bold text-gray-700">
            Trae a Lerobotica a tu escula o distrito
          </h2>
          <RequestMeetingButton />
        </div>
        <div className="flex gap-10 justify-center font-[cerapro] py-10">
          <div className="px-7 flex flex-col">
            <p className="text-gray-700 py-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p className="text-gray-700 py-1">Lorem ipsum dolor sit.</p>
          </div>
          <div className="px-7 flex flex-col">
            <h5 className="font-bold py-2 text-gray-700">Conocenos</h5>
            <a className="text-gray-700 py-1">About uS</a>
            <a className="text-gray-700 py-1">Corporate Sale</a>
            <a className="text-gray-700 py-1">Terms & Services</a>
          </div>
          <div className="px-7 flex flex-col">
            <h5 className="font-bold py-2 text-gray-700">Support</h5>
            <a className="text-gray-700 py-1">About uS</a>
            <a className="text-gray-700 py-1">Corporate Sale</a>
            <a className="text-gray-700 py-1">Terms & Services</a>
          </div>
          <div className="px-7 flex flex-col">
            <h5 className="font-bold py-2 text-gray-700">Contact</h5>
            <a className="text-gray-700 py-1">About uS</a>
            <a className="text-gray-700 py-1">Corporate Sale</a>
            <a className="text-gray-700 py-1">Terms & Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
