"use client";

import { Slide } from "react-awesome-reveal";

export default function PoliticasdePrivacidad() {
  return (
    <Slide
      direction="up"
      triggerOnce
      className="firstSec relative mt-5 w-full flex justify-center"
    >
      <img
        loading="lazy"
        className="fixed hidden md:block top-20 left-0"
        src="/img/robot1.png"
        width={100}
        height={100}
        alt="robot1"
      />
      <div className="w-11/12 md:w-5/12 flex flex-col items-center justify-center text-center">
        <h2 className="text-[#b1127c] text-4xl font-bold py-5">
          Politicas de privacidad
        </h2>
        <p>
          En Lerobótica percibimos al niño y al adolescente como pilar
          fundamental en todo nuestro proceso de enseñanza. Tomamos con mucha
          seriedad lo que desarrollamos en pro a los beneficios educativos de
          nuestros estudiantes.
          <br />
          <br />
          Nuestra política de privacidad protege la recopilación, el uso y la
          divulgación de toda información por parte de Lerobótica.
          <br />
          <br />
          Nuestra política de privacidad está creada para ofrecerle a quienes
          naveguen en nuestra web transparencia desde principio a fin, es decir,
          desde que acceden a la página hasta que finaliza su recorrido por
          nuestro ciberespacio.
          <br />
          <br />
          En Lerobótica tenemos el compromiso de tratar la información personal
          de nuestros usuarios con sumo cuidado y respeto. Entendiendo la
          importancia que es la privacidad de cada persona que ingresa a nuestra
          web.
        </p>
      </div>

      <img
        loading="lazy"
        className="fixed hidden md:block bottom-0 right-0"
        src="/img/robot2.png"
        width={100}
        height={100}
        alt="robot2"
      />
    </Slide>
  );
}
