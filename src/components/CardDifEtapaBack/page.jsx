export default function CardDifEtapaBack({ item }) {
  return (
    <div className="cardFace back bg-gray-100  overflow-hidden py-5 px-2  rounded-t-3xl">
      <h4 className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl px-2 text-azulLR font-[baloo-bold] leading-none">
        {item.title}
      </h4>
      <p className="text-xl sm:text-sm md:text-base lg:text-lg leading-none text-center pt-3">
        {item.description}
      </p>
    </div>
  )
}
