import type { Metadata } from "next"
import EquipoMaquinariaClientPage from "./EquipoMaquinariaClientPage"

export const metadata: Metadata = {
  title: "Seguro de Equipo y Maquinaria | CORRETEC",
  description: "Seguros para equipos y maquinaria industrial. Protección integral contra daños y averías en Ecuador.",
}

export default function EquipoMaquinariaPage() {
  return <EquipoMaquinariaClientPage />
}
