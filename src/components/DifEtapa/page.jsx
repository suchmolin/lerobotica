import Image from "next/legacy/image"
import CardDifEtapa from "../CardDifEtapa/page"
import CardDifEtapaBack from "../CardDifEtapaBack/page"

export default function DifEtapa({ data }) {
  const { dif } = data
  return (
    <div className="w-full flex justify-center pt-24">
      <div className="w-10/12 sm:w-11/12 bg-amarilloLR rounded-t-3xl flex justify-center pb-12">
        <div className="flex gap-x-7 lg:gap-x-16 gap-y-3 sm:gap-y-0 -mt-20 px-3 sm:px-7 justify-center  flex-col sm:flex-row">
          {dif.map((item, i) => (
            <div
              key={`card${i}`}
              className="card w-[220px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[230px] sm:h-[180px] md:h-[220px] lg:h-[270px] flex flex-col items-center py-5 rounded-t-3xl "
            >
              <CardDifEtapa item={item} />
              <CardDifEtapaBack item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
