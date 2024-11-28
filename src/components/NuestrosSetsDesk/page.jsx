"use client"
import { useState } from "react"
import BoxSolutionSelected from "../BoxSolutionSelected/page"

export default function NuestrosSetsDesk({ data }) {
  const [selected, setSelected] = useState("coding-express")
  return (
    <div className="hidden lg:block w-full">
      <div className="flex justify-center">
        {data.map((sol, i) => (
          <button
            key={sol.id}
            onClick={() => setSelected(sol.id)}
            style={{
              backgroundColor: `${sol.id === selected ? "#F9F8F8" : sol.color}`,
              color: `${sol.id === selected ? `${sol.color}` : "white"}`,
            }}
            className={`py-3 px-6 flex flex-col rounded-t-3xl -ml-3 ${sol.id === selected ? "z-10" : "text-white "}`}
          >
            <span className="font-[baloo-bold] text-xl xl:text-2xl leading-none">
              {sol.titulo}
            </span>
            <span className="xl:text-lg leading-none">{sol.etapa}</span>
          </button>
        ))}
      </div>
      <BoxSolutionSelected data={data.find((sol) => sol.id === selected)} />
    </div>
  )
}
