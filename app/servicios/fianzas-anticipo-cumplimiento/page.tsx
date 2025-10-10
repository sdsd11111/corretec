import type { Metadata } from "next"
import FianzasAnticipoPageClient from "./FianzasAnticipoPageClient"

export const metadata: Metadata = {
  title: "Fianzas: Buen Uso de Anticipo y Cumplimiento | CORRETEC",
  description:
    "Protege tus contratos con nuestras fianzas de buen uso de anticipo y cumplimiento de contrato. Respaldo confiable para tus proyectos en Ecuador.",
}

export default function FianzasAnticipoPage() {
  return <FianzasAnticipoPageClient />
}
