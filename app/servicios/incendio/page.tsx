import type { Metadata } from "next"
import IncendioClientPage from "./IncendioClientPage"

export const metadata: Metadata = {
  title: "Seguro de Incendio | CORRETEC",
  description:
    "Seguros contra incendio para proteger tu propiedad. Cobertura integral contra daños por fuego en Ecuador.",
}

export default function IncendioPage() {
  return <IncendioClientPage />
}
