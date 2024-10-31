import Image from "next/image"

export default function DifEtapa({ data }) {
  const { dif } = data
  return (
    <div className="w-full flex justify-center pt-10 lg:pt-0">
      <div className="w-11/12 bg-amarilloLR rounded-t-3xl flex justify-center pb-3">
        <div className="flex gap-x-9 sm:gap-x-20 gap-y-3 sm:gap-y-0 -mt-7 flex-wrap px-3 sm:px-7 justify-center">
          {dif.map((item) => (
            <div
              key={item.id}
              className="w-[90px] xs:w-[110px] sm:w-[140px] flex flex-col items-center"
            >
              <div className="relative w-[50px] xs:w-[60px] sm:w-[100px] aspect-square ">
                <Image
                  src={item.img}
                  layout="fill"
                  objectFit="contain"
                  alt={item.id}
                />
              </div>
              <p className="text-lg xs:text-xl sm:text-2xl font-[baloo-bold] text-azulLR text-center pt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
