import type { Metadata } from "next"
import ResponsabilidadCivilClientPage from "./ResponsabilidadCivilClientPage"

export const metadata: Metadata = {
  title: "Responsabilidad Civil | CORRETEC",
  description: "Seguros de responsabilidad civil general y profesional. Protección contra daños a terceros en Ecuador.",
}

export default function ResponsabilidadCivilPage() {
  return <ResponsabilidadCivilClientPage />
}
