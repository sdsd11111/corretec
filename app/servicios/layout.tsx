import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | CORRETEC Ecuador",
    default: "Servicios de Seguros | CORRETEC Ecuador",
  },
  description: "Servicios especializados de seguros en Ecuador. Fianzas, seguros vehiculares, vida, transporte y más.",
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
