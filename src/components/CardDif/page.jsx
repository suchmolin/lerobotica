import Image from "next/image"

export default function CardDif({ data }) {
  const { title, description, icon } = data
  return (
    <div className="w-[290px] xs:w-[360px] sm:w-[400px] hover:bg-violetaLR hover:scale-[102%] bg-azulClaroLR rounded-t-2xl overflow-hidden flex flex-col text-white p-7 transition-all duration-300">
      <div className="relarive w-full flex justify-between mb-5">
        <h3 className="w-9/12 pr-7 text-3xl font-[baloo-bold]">{title}</h3>
        <div className="relative w-[90px] aspect-square">
          <Image src={icon} layout="fill" objectFit="contain" alt="icono" />
        </div>
      </div>
      <p className="text-xl">{description}</p>
    </div>
  )
}
