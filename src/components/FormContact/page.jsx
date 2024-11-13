import Image from "next/image"

export default function FormContact({ inModal }) {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center">
      <form
        className={`dropShadow2 ${inModal ? "w-[280px]" : "w-[360px]"} sm:w-[500px] lg:w-[400px] xl:w-[500px] py-5 px-7 rounded-t-[40px] bg-azulClaroLR`}
      >
        <h2
          className={`${inModal ? "text-3xl lg:text-5xl " : "text-5xl"} font-[baloo-bold] py-7 text-white`}
        >
          Contáctanos
        </h2>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full ring-0 border-none pl-5 mb-4"
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="w-full ring-0 border-none pl-5 mb-4"
        />
        <select className="w-full ring-0 border-none pl-5 mb-4 text-gray-600">
          <option value="">Selecciona la sede de tu interés</option>
          <option value="1">México</option>
          <option value="2">Colombia</option>
          <option value="3">Argentina</option>
        </select>
        <input
          type="number"
          placeholder="Teléfono"
          className="w-full ring-0 border-none pl-5 mb-4"
        />
        <textarea
          placeholder="Mensaje"
          className="w-full ring-0 border-none pl-5 mb-4"
          rows={4}
        />
        <div className="w-full flex justify-end">
          <input
            type="submit"
            className="bg-azulLR text-white py-2 px-4 font-[baloo-bold] text-xl cursor-pointer"
            value="Enviar"
          />
        </div>
      </form>
      <div
        className={`w-[500px] xl:w-[600px] aspect-square flex relative items-center ${inModal ? "hidden lg:block" : ""}`}
      >
        <div className="absolute bottom-0 lg:top-0 lef-0 w-full h-[300px] lg:h-full">
          <div className="relative w-full h-full lg:scale-x-[-1] rotate-90 lg:rotate-0">
            <Image
              src="/img/headerPrimariaBajaAlt.png"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="header"
            />
          </div>
        </div>
        <div className="absolute top-0 left-36 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/img/contacto.png"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
              alt="header"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
