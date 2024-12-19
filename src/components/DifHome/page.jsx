import { data } from "@/data/diferenciadores"
import CardDif from "../CardDif/page"
export default function DifHome() {
  return (
    <div className="w-full flex flex-col items-center pt-5 pb-20 -mt-28">
      <h2 className="text-4xl xs:text-5xl font-[baloo-bold] text-azulLR text-center mb-7">
        Los niños en LeRobotica:
      </h2>
      <div className="flex gap-7 justify-center flex-wrap">
        {data?.map((dif) => (
          <CardDif key={dif.title} data={dif} />
        ))}
      </div>
    </div>
  )
}
