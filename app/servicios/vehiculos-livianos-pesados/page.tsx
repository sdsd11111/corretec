import type { Metadata } from "next"
import VehiculosLivianosPesadosClientPage from "./VehiculosLivianosPesadosClientPage"

export const metadata: Metadata = {
  title: "Seguro de Vehículos Livianos y Pesados | CORRETEC",
  description:
    "Seguros vehiculares para autos, camiones y vehículos pesados. Protección completa con las mejores coberturas en Ecuador.",
}

export default function VehiculosLivianosPesadosPage() {
  return <VehiculosLivianosPesadosClientPage />
}
