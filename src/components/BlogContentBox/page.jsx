import Image from "next/image"

export default function BlogContentBox({ data }) {
  const { contenido } = data
  return (
    <div id="blogBox" className="w-full flex justify-center">
      <div className="w-11/12 md:w-8/12 pt-20 md:pt-0">
        {contenido.map((item) => (
          <>
            {item.titulo ? (
              <h2 className="text-5xl font-[baloo-bold] text-azulLR mb-3">
                {item.titulo}
              </h2>
            ) : (
              ""
            )}
            {item.subtitulo ? (
              <h3 className="text-3xl font-bold text-azulLR mb-3">
                {item.subtitulo}
              </h3>
            ) : (
              ""
            )}
            {item.texto
              ? item.texto.map((parrafo) => (
                  <p className="text-xl text-justify mb-3 text-gray-700">
                    {parrafo}
                  </p>
                ))
              : ""}
            {item.img ? (
              <div className="w-full aspect-video relative mb-3">
                <Image
                  src={item.img}
                  alt={item.id}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  )
}