import { data } from "@/data/diferenciadores"
import CardDif from "../CardDif/page"
export default function DifHome() {
  return (
    <div className="w-full flex justify-center pt-5 pb-20">
      <div className="flex gap-7 justify-center flex-wrap">
        {data?.map((dif) => (
          <CardDif key={dif.title} data={dif} />
        ))}
      </div>
    </div>
  )
}
