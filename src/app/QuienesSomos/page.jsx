"use client";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import CountUp from "react-countup";

export default function QUienesSomos() {
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
        <div className="w-full md:w-10/12 min-h-[300px] flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="w-full md:w-6/12 flex flex-col items-center justify-center text-center py-10 px-10">
            <h2 className="text-[#b1127c] text-4xl font-bold py-5">
              ¿Qué es Lerobotica?
            </h2>
            <p>
              Somos un instituto de Robótica y Programación basado en el Sistema
              de Aprendizaje LEGO para niños de preescolar a secundaria.
              <br />
              <br />
              En nuestras sedes buscamos soluciones y actividades que inspiren a
              niños y niñas a transformar su futuro, nos encontramos en
              Venezuela en la ciudad de Caracas y Puerto Ordaz.
            </p>
          </div>
          <div className="w-7/12">
            <Image
              src="/img/quienesSomos.webp"
              width={600}
              height={300}
              alt="quienes somos imagen"
            />
          </div>
        </div>
        <div className="w-11/12 md:w-6/12 flex justify-between mt-10 sm:mt-0 ">
          <div className="text-center">
            <CountUp
              className="text-2xl md:text-5xl font-bold text-[#b1127c]"
              suffix="+"
              end={40}
              duration={5}
            />
            <p className="text-xs px-2">Años de experiencia</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-2xl md:text-5xl font-bold text-[#b1127c]"
              end={66}
              separator=","
              duration={5}
            />
            <p className="text-xs px-2">Paises alcanzados</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-2xl md:text-5xl font-bold text-[#b1127c]"
              end={60}
              duration={5}
              suffix="+"
            />
            <p className="text-xs px-2">Millones de usuarios</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-2xl md:text-5xl font-bold text-[#b1127c]"
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

      <div className="w-full flex flex-col items-center">
        <div className="w-11/12 lg:w-10/12 min-h-[100px] flex flex-col md:flex-row items-center gap-5 mt-7 py-3 px-3 border-2 rounded-lg shadow-xl">
          <div className="w-3/12 flex justify-center items-center">
            <p className="text-3xl font-bold text-[#b1127c]">Misión</p>
          </div>
          <div className="w-9/12">
            <p>
              Nuestro propósito es ser aliado en la educación, con el fin de
              maximizar el potencial de nuestros estudiantes a través de un
              aprendizaje intuitivo adaptable, lúdico e incluyente.
            </p>
          </div>
        </div>
        <div className="w-11/12 lg:w-10/12 min-h-[100px] flex flex-col md:flex-row items-center gap-5 mt-7 py-3 px-3 border-2 rounded-lg shadow-xl">
          <div className="w-full md:w-3/12 flex justify-center items-center">
            <p className="text-3xl font-bold text-[#b1127c]">Basados en:</p>
          </div>
          <div className="w-9/12">
            <p>
              El sistema de aprendizaje LEGO que a través de soluciones que
              juntas funcionan a la perfección para brindar experiencias de
              aprendizaje STEAM, de forma prácticas, intuitivo adaptable, para
              estudiantes de preescolar a secundarios.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
