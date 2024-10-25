"use client"
import FAQBox from "@/components/FAQBox/page"
import { useState } from "react"

export default function PreguntasFrecuentes() {
  const [onPlay, setOnPlay] = useState(false)
  const sobreNosotros = [
    {
      title: "¿Cómo me registro en un curso?",
      content:
        "A través de nuestros números de contacto, será atendido por nuestro Departamento de Ventas, que le brindará toda la información necesaria sobre nuestros cursos de robótica y programación.",
    },
    {
      title: "¿Cuál es su política de cancelación y reembolso?",
      content:
        "Luego de culminar la inscripción en nuestra sede, el Departamento de Ventas le hará entrega de toda la información necesaria sobre nuestras políticas, normas en el aula y códigos establecidos por la empresa.",
    },
    {
      title: "¿Qué es Lerobotica?",
      content:
        "Somos un instituto de robótica y programación basada en el sistema de aprendizaje LEGO, para niños de preescolar a secundaria.",
    },
  ]
  const estudiantes = [
    {
      title: "¿Hay algún requisito previo?",
      content:
        "Nuestro Departamento de Ventas durante la conversación bien sea telefónica o presencial en alguna de nuestras sedes, le indicará todos los requisitos necesarios para la inscripción del estudiante.",
    },
    {
      title: "¿Qué métodos de pago aceptan?",
      content: "Pago en efectivo, transferencia bancaria y pago móvil.",
    },
    {
      title: "¿En qué idiomas enseñan?",
      content:
        "Por lo momentos nuestro cursos están diseñados y estructurados en español.",
    },
  ]
  const otras = [
    {
      title: "¿Ofrecen oportunidades en línea?",
      content:
        "Todos nuestros cursos están diseñados para trabajar de forma presencial, ya que el alumno debe interactuar con el Set de LEGO.",
    },
    {
      title: "¿Puedo enviar mi solicitud para convertirme en profesor?",
      content:
        "Por los momentos nuestra plantilla está completa, pero sin ningún compromiso podemos recibir su hoja de vida a través de nuestro correo electrónico",
    },
    {
      title: "Nuestra misión",
      content:
        "Nuestro propósito es ser aliado en la educación, con el fin de maximizar el potencial de nuestros estudiantes a través de un aprendizaje intuitivo adaptable, lúdico e incluyente.",
    },
  ]

  const handlePlay = (index) => {
    setOnPlay(index)
    const videos = document.querySelectorAll("video")
    videos.forEach((video, i) => {
      if (i !== index) {
        video.pause()
        video.load()
      }
    })
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center py-20">
        <div className="w-10/12 flex gap-5 items-center">
          <div
            className={`${onPlay === 0 ? "w-6/12" : "w-4/12"}  h-fit overflow-hidden rounded-xl bg-red-200 cursor-pointer ${onPlay !== false ? "" : "hover:w-6/12"} transition-all duration-500`}
          >
            <video
              onPlay={() => handlePlay(0)}
              poster="/img/le_bricq_motion_essential_lifestyle_1hy21_45401_09_cropped.webp"
              src="https://firebasestorage.googleapis.com/v0/b/jsuchmolin-394bd.appspot.com/o/vid.mp4?alt=media&token=bf58ecf7-2c25-4a87-b92e-91941742e095"
              controls
              preload
              muted
              loop
              className="w-full h-full cursor-pointer"
            ></video>
          </div>
          <div
            className={`${onPlay === 1 ? "w-6/12" : "w-4/12"}  h-fit overflow-hidden rounded-xl bg-red-200 cursor-pointer ${onPlay !== false ? "" : "hover:w-6/12"} transition-all duration-500`}
          >
            <video
              onPlay={() => handlePlay(1)}
              poster="/img/le_bricq_motion_essential_lifestyle_1hy21_45401_09_cropped.webp"
              src="https://firebasestorage.googleapis.com/v0/b/jsuchmolin-394bd.appspot.com/o/vid.mp4?alt=media&token=bf58ecf7-2c25-4a87-b92e-91941742e095"
              controls
              preload
              muted
              loop
              className="w-full h-full cursor-pointer"
            ></video>
          </div>
          <div
            className={`${onPlay === 2 ? "w-6/12" : "w-4/12"}  h-fit overflow-hidden rounded-xl bg-red-200 cursor-pointer ${onPlay !== false ? "" : "hover:w-6/12"} transition-all duration-500`}
          >
            <video
              onPlay={() => handlePlay(2)}
              poster="/img/le_bricq_motion_essential_lifestyle_1hy21_45401_09_cropped.webp"
              src="https://firebasestorage.googleapis.com/v0/b/jsuchmolin-394bd.appspot.com/o/vid.mp4?alt=media&token=bf58ecf7-2c25-4a87-b92e-91941742e095"
              controls
              preload
              muted
              loop
              className="w-full h-full cursor-pointer"
            ></video>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <img
          loading="lazy"
          className="fixed hidden md:block top-20 left-0"
          src="/img/robot1.png"
          width={100}
          height={100}
          alt="robot1"
        />
        <h2 className="text-[#b1127c] text-6xl font-bold pt-7 text-center">
          Preguntas Frecuentes
        </h2>
        <h3 className="text-3xl text-[#b1127c] text-center mt-10">
          Sobre Nosotros
        </h3>
        <div className="w-11/12">
          <FAQBox data={sobreNosotros} />
        </div>
        <h3 className="text-3xl text-[#b1127c] text-center mt-10">
          Estudiantes
        </h3>
        <div className="w-11/12">
          <FAQBox data={estudiantes} />
        </div>
        <h3 className="text-3xl text-[#b1127c] text-center mt-10">Otras</h3>
        <div className="w-11/12">
          <FAQBox data={otras} />
        </div>
        <img
          loading="lazy"
          className="fixed hidden md:block bottom-0 right-0"
          src="/img/robot2.png"
          width={100}
          height={100}
          alt="robot2"
        />
      </div>
    </>
  )
}
