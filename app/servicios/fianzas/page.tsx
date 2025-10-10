import type { Metadata } from "next"
import FianzasPageClient from "./FianzasPageClient"

export const metadata: Metadata = {
  title: "Fianzas: Buen Uso de Anticipo y Cumplimiento | CORRETEC Ecuador",
  description:
    "Protege tus proyectos en Loja con fianzas confiables. CORRETEC ofrece fianzas de buen uso de anticipo y cumplimiento de contrato desde 1991.",
  keywords: "fianzas Ecuador, buen uso anticipo, cumplimiento contrato, garantías Loja, fianzas administrativas",
  openGraph: {
    title: "Fianzas Confiables en Ecuador | CORRETEC",
    description: "Especialistas en fianzas de buen uso de anticipo y cumplimiento de contrato en Ecuador.",
    type: "website",
    locale: "es_EC",
  },
  alternates: {
    canonical: "https://corretec.ec/servicios/fianzas",
  },
}

export default function FianzasPage() {
  return <FianzasPageClient />
}
