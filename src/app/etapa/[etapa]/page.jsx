import DifEtapa from "@/components/DifEtapa/page"
import HeaderEtapa from "@/components/HeaderEtapa/page"
import ValoresEtapa from "@/components/ValoresEtapa/page"
import { data } from "@/data/etapas"
export default function EtapaPage({ params }) {
  const { etapa } = params
  const etapaData = data.find((etapaData) => etapaData.id === etapa)
  console.log(etapaData)

  return (
    <>
      <HeaderEtapa data={etapaData} />
      <DifEtapa data={etapaData} />
      <ValoresEtapa data={etapaData} />
    </>
  )
}
