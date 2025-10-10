import type { Metadata } from "next"
import FidelidadPublicaPrivadaClientPage from "./FidelidadPublicaPrivadaClientPage"

export const metadata: Metadata = {
  title: "Fidelidad Pública y Privada | CORRETEC",
  description:
    "Seguros de fidelidad para empleados públicos y privados. Protección contra actos deshonestos y malversación en Ecuador.",
}

export default function FidelidadPublicaPrivadaPage() {
  return <FidelidadPublicaPrivadaClientPage />
}
