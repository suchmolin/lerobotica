"use client";
import FAQBox from "../FAQBox/page";
import { Slide } from "react-awesome-reveal";
export default function PreguntasFrecuentes() {
  const data = [
    {
      title: "¿Cómo me inscribo en Lerobotica?",
      content:
        "A través de nuestros números de contacto, será atendido por nuestro Departamento de Ventas, que le brindará toda la información necesaria sobre nuestros cursos de robótica y programación.",
    },
    {
      title: "¿Qué es Lerobotica?",
      content:
        "Somos un instituto de robótica y programación basado en el sistema de aprendizaje LEGO para niños de preescolar a secundaria.",
    },
    {
      title: "¿Cuál es su filosofía de enseñanza?",
      content:
        "Nuestra filosofía está basada en el sistema de aprendizaje LEGO, que fomenta la educación intuitiva, inclusiva y adaptable permitiendo reforzar las habilidades de nuestros alumnos de cara al futuro y así aprendan de forma lúdica y práctica",
    },
    {
      title: "Números de contacto",
      content: "Puerto Ordaz: (0286)-962.58.32 / (0414)-903.04.37",
      extracontent: "Caracas: (0212)-976.20.66 / (0424)-903.04.37",
      whatsapp: "https://wa.me/584149030437",
      whatsapp2: "https://wa.me/584249030437",
    },
    {
      title: "¿Dónde están ubicados?",
      content: "Puerto Ordaz: Av. Paseo Caroní, C.C Naraya, Piso 1, Local 115.",
      extracontent:
        "Caracas: Av. Principal Prados del Este, C.C Galería Prados del Este, Mezzanina, Local M38.",
      extracontent2:
        "Caracas: C.C. Ciudad Tamanaco, Torre A, piso 3, oficina 302",
    },
  ];
  return (
    <Slide
      triggerOnce
      direction="up"
      className="w-full flex flex-col items-center justify-center mt-10 lg:mt-6 mb-10 font-[cerapro]"
    >
      <div className="w-full mt-0 lg:mt-10 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-[300px] h-[300px] lg:w-[330px] lg:h-[330px] overflow-hidden rounded-full mx-2 mt-0 lg:mt-10">
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
        <div className="w-11/12 lg:w-7/12 mt-3  lg:mt-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl lg:text-4xl font-bold">
            Preguntas Frecuentes
          </h2>
          <FAQBox data={data} />
        </div>
      </div>
    </Slide>
  );
}
