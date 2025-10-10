import type { Metadata } from "next"
import SeguroViajesClientPage from "./SeguroViajesClientPage"

export const metadata: Metadata = {
  title: "Seguro de Viajes | CORRETEC",
  description:
    "Seguros de viaje para protegerte en tus aventuras. Cobertura médica, equipaje y asistencia 24/7 en Ecuador.",
}

export default function SeguroViajesPage() {
  return <SeguroViajesClientPage />
}
