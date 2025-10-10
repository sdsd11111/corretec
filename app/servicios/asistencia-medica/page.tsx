import type { Metadata } from "next"
import AsistenciaMedicaClientPage from "./AsistenciaMedicaClientPage"

export const metadata: Metadata = {
  title: "Asistencia Médica | CORRETEC",
  description:
    "Planes de asistencia médica para empresas y personas en Ecuador. Cobertura médica nacional e internacional.",
}

export default function AsistenciaMedicaPage() {
  return <AsistenciaMedicaClientPage />
}
