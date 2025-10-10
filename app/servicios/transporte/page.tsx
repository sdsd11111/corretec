import type { Metadata } from "next"
import TransporteClientPage from "./TransporteClientPage"

export const metadata: Metadata = {
  title: "Seguro de Transporte | CORRETEC",
  description:
    "Seguros de transporte de mercancías y carga. Protección integral para el transporte terrestre, marítimo y aéreo en Ecuador.",
}

export default function TransportePage() {
  return <TransporteClientPage />
}
