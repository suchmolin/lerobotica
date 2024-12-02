import Image from "next/image"

export default function CardDifEtapa({ item }) {
  return (
    <div
      key={item.id}
      className="cardFace front bg-azulLR overflow-hidden rounded-t-3xl flex flex-col items-center justify-between px-3 pt-5"
    >
      <div className="relative w-[100px] sm:w-[80px] lg:w-[100px] aspect-square ">
        <Image src={item.img} layout="fill" objectFit="contain" alt={item.id} />
      </div>
      <p className="text-2xl sm:text-base md:text-xl lg:text-2xl font-[baloo-bold] text-white text-center pt-3 leading-none flex items-center py-5 h-[30px] mb-5">
        {item.title}
      </p>
    </div>
  )
}
