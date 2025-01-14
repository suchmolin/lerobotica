import RequestMeetingButton from "../RequestMeetingButton/page"
import Image from "next/image"
import Link from "next/link"
import TeacherResourcesButton from "../TeacherResourcesButton/page"
import { FaInstagram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import FormNewsLetter from "../FormNewsLetter/page"

const Footer = () => {
  const imgFooter = [
    {
      img: "/img/robotfoot1.png",
      alt: "footerimage",
      hideOnResponsive: true,
    },
    {
      img: "/img/robotfoot2.png",
      alt: "footerimage2",
      hideOnResponsive: true,
    },
    {
      img: "/img/robotfoot3.png",
      alt: "footerimage3",
      hideOnResponsive: true,
      onmobile: true,
    },
    {
      img: "/img/robotfoot4.png",
      alt: "footerimage4",
      hideOnResponsive: true,
      onmobile: true,
    },
    {
      img: "/img/robotfoot5.png",
      alt: "footerimage5",
      onmobile: true,
    },
    {
      img: "/img/robotfoot6.png",
      alt: "footerimage6",
    },
    {
      img: "/img/robotfoot7.png",
      alt: "footerimage7",
    },
  ]
  return (
    <footer className="w-full mt-24">
      <div className="flex gap-5 justify-center w-full z-10 mb-10">
        {imgFooter.map((img) => {
          return (
            <div
              key={img.alt}
              className={`w-[100px] aspect-square relative ${img.onmobile ? "block" : "hidden"} sm:block`}
            >
              <Image
                src={img.img}
                layout="fill"
                objectFit="contain"
                alt={img.alt}
              />
            </div>
          )
        })}
      </div>
      <div className="w-full border-t-2 border-t-gray-100 flex justify-center items-center flex-col bg-gray-100">
        <div className="w-10/12 lg:w-7/12 flex flex-col sm:flex-row gap-4 items-center justify-center px-10 md:px-0 py-5 bg-[#FFD100] -mt-9">
          <h2 className="text-lg md:text-2xl  font-[baloo-bold] text-center sm:text-start">
            Trae a LeRobotica a tu escuela o ciudad
          </h2>
          <RequestMeetingButton />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-col lg:flex-row items-center lg:items-start justify-center py-10 text-xl">
          <div className="flex w-full sm:w-10/12 lg:w-6/12 xl:w-6/12 py-5 justify-center">
            <div className="hidden sm:block w-[150px] -mt-10 mr-5 h-[200px] relative">
              <Image
                src="/img/Logo-Lerobotica-RGB.png"
                layout="fill"
                objectFit="contain"
                alt="logo de LeRobotica"
              />
            </div>
            <div className="w-11/12 sm:w-9/12 px-4 mt-5 md:mt-0 flex flex-col justify-center md:justify-start md:text-start  text-center sm:text-start sm:pl-10 xl:pl-20 items-center sm:items-start">
              <p className="w-64 xs:w-80 sm:w-8/12 mb-4 py-1">
                Mantente al día con nuestras novedades
              </p>
              <FormNewsLetter />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center text-center sm:text-start">
            <div className="px-7 flex flex-col ">
              <Link
                href="/etapa/pre-escolar"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Pre-escolar
              </Link>
              <Link
                href="/etapa/primaria-baja"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Primaria Baja
              </Link>
              <Link
                href="/etapa/primaria-alta"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Primaria Alta
              </Link>
              <TeacherResourcesButton />
            </div>
            <div className="hidden sm:flex px-7 flex-col ">
              <Link
                href="/quienes-somos"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                ¿Quiénes somos?
              </Link>
              <Link
                href="/soluciones"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Soluciones
              </Link>
              <Link
                href="/blog"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Blog
              </Link>
              <Link
                href="/contactanos"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Contáctanos
              </Link>
              <Link
                href="/preguntas-frecuentes"
                className=" py-1 hover:scale-105 transition-all duration-300"
              >
                Preguntas Frecuentes
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-32 sm:h-14  bg-azulLR text-white flex flex-col sm:flex-row justify-center sm:justify-between items-center px-10 py-5 sm:py-0 gap-4 ">
        <div className="flex gap-7 text-2xl">
          <Link href="https://www.instagram.com/lerobotica/">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100070314396454">
            <FaFacebook />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-10 md:gap-20 justify-center text-center sm:pr-10 md:pr-20">
          <Link href="/PoliticasdePrivacidad">Términos y condiciones</Link>
          <p>Desarrollado y creado por LeRobotica</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
