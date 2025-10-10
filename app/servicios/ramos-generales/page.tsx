import type { Metadata } from "next"
import RamosGeneralesClientPage from "./RamosGeneralesClientPage"

export const metadata: Metadata = {
  title: "Ramos Generales | CORRETEC",
  description:
    "Seguros de ramos generales para proteger tu patrimonio. Cobertura integral para bienes, responsabilidad civil y más en Ecuador.",
}

export default function RamosGeneralesPage() {
  return <RamosGeneralesClientPage />
}
