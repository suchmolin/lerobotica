import ContactoEtapa from "@/components/ContactoEtapa/page"
import DifEtapa from "@/components/DifEtapa/page"
import HabilidadesEtapa from "@/components/HabilidadesEtapa/page"
import HeaderEtapa from "@/components/HeaderEtapa/page"
import SetsEtapa from "@/components/SetsEtapa/page"
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
      <SetsEtapa data={etapaData} />
      <HabilidadesEtapa data={etapaData} />
      <ContactoEtapa data={etapaData} />
    </>
  )
}
