"use client";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import CountUp from "react-countup";

export default function Contacto() {
  const data = [
    {
      ciudad: "Puerto Ordaz",
      zona: "Paseo Caroní",
      direccion: "Av. Paseo Caroní, Centro Comercial Nayara, Piso 1, Local 115",
      telefono: "0424-903.04.37 / 0286-962.58.32",
      image: "/img/ptoOrdaz.png",
    },
    {
      ciudad: "Caracas",
      zona: "Prados del Este",
      direccion:
        "Av. Principal de Prados del Este, Centro Comercial Galerias Prados del Este, Mezzanina, Local M38",
      telefono: "0212-976.20.66 / 0212-975.29.89",
      image: "/img/pdosEste.png",
    },
  ];
  return (
    <>
      <Slide
        direction="up"
        triggerOnce
        className="firstSec relative mt-5 w-full flex justify-center"
      >
        <img
          loading="lazy"
          className="absolute hidden md:block top-0 left-0"
          src="/img/robot1.png"
          width={100}
          height={100}
          alt="robot1"
        />
        <div className="w-10/12 min-h-[300px] flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-6/12 flex flex-col items-center justify-center text-center py-10 px-10">
            <h2 className="text-[#b1127c] text-4xl font-bold py-5">
              ¡Bienvenido a nuestro mundo!
            </h2>
            <p className="text-xl">
              Podrás contactarnos a través del siguiente enlace:{" "}
              <a
                target="_blank"
                href="https://linktr.ee/lerobotica"
                className="text-[#b1127c] underline"
              >
                Contactanos
              </a>
            </p>
          </div>
          <div className="w-full md:w-7/12">
            <video
              autoPlay
              muted
              loop
              className="w-full"
              src="/vid/robotBici.mp4"
            ></video>
          </div>
        </div>
        <div className="w-11/12 md:w-6/12 flex justify-between mt-10 ">
          <div className="text-center">
            <CountUp
              className="text-2xl md:text-5xl font-bold"
              suffix="+"
              end={40}
              duration={5}
            />
            <p className="text-xs px-2">Años de experiencia</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-2xl md:text-5xl font-bold"
              end={66}
              separator=","
              duration={5}
            />
            <p className="text-xs px-2">Paises alcanzados</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-2xl md:text-5xl font-bold"
              end={60}
              duration={5}
              suffix="+"
            />
            <p className="text-xs px-2">Millones de usuarios</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-2xl md:text-5xl font-bold"
              end={22}
              duration={5}
              suffix="+"
            />
            <p className="text-xs px-2">Soluciones creadas</p>
          </div>
        </div>
        <img
          loading="lazy"
          className="absolute hidden md:block bottom-20 right-0"
          src="/img/robot2.png"
          width={100}
          height={100}
          alt="robot2"
        />
      </Slide>
      <div className="w-full flex flex-col md:flex-row justify-center gap-4 mt-10 items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-11/12 md:w-5/12 flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={item.image}
              alt={item.ciudad + " " + item.zona}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {item.ciudad}
              </h5>
              <p className="text-sm text-gray-400">{item.zona}</p>
              <p className="mb-3 text-sm font-normal">{item.direccion}</p>
              <p className="text-sm text-gray-400">Telefonos</p>
              <p className="mb-3 text-sm font-normal">{item.telefono}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
