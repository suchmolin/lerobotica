import DifHome from "@/components/DifHome/page"
import HeaderHome from "@/components/HeaderHome/page"
import NuestrosCursosHome from "@/components/NuestrosCursosHome/page"
import OpinionesMestros from "@/components/OpinionesMestros/page"
import SistemaHome from "@/components/SistemaHome/page"

import FAQ from "@/components/FAQ/page"
export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <HeaderHome />
      <SistemaHome />
      <DifHome />
      <NuestrosCursosHome />
      <OpinionesMestros />
      <FAQ />
    </main>
  )
}
