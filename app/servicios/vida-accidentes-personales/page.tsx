import type { Metadata } from "next"
import VidaAccidentesPersonalesClientPage from "./VidaAccidentesPersonalesClientPage"

export const metadata: Metadata = {
  title: "Vida Individual y Colectiva, Accidentes Personales | CORRETEC",
  description:
    "Seguros de vida individual, colectiva y accidentes personales. Protección para ti y tu familia en Ecuador.",
}

export default function VidaAccidentesPersonalesPage() {
  return <VidaAccidentesPersonalesClientPage />
}
