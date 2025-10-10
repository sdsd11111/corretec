import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const services = {
  "camiones-pesados": {
    title: "Seguros para Camiones Pesados",
    description: "Protección integral para tu flota de transporte pesado",
    content: "Cobertura especializada para camiones, tractocamiones y vehículos de carga pesada.",
    benefits: ["Cobertura 24/7", "Asistencia en carretera", "Protección de carga", "Responsabilidad civil"],
  },
  "fianzas-garantias": {
    title: "Fianzas y Garantías",
    description: "Respaldo financiero para tus compromisos comerciales",
    content: "Fianzas de cumplimiento, anticipos y garantías para contratos públicos y privados.",
    benefits: ["Proceso ágil", "Mejores tarifas", "Asesoría especializada", "Respaldo confiable"],
  },
  "seguros-vida": {
    title: "Seguros de Vida",
    description: "Protege el futuro de tu familia",
    content: "Seguros de vida individual y familiar con las mejores coberturas del mercado.",
    benefits: ["Cobertura amplia", "Primas competitivas", "Atención personalizada", "Pagos rápidos"],
  },
  "seguros-vehiculares": {
    title: "Seguros Vehiculares",
    description: "Protección completa para tu vehículo",
    content: "Seguros para autos, motos y vehículos comerciales con cobertura integral.",
    benefits: ["Todo riesgo", "Asistencia 24/7", "Red de talleres", "Vehículo de reemplazo"],
  },
  "seguros-empresariales": {
    title: "Seguros Empresariales",
    description: "Protege tu negocio y patrimonio empresarial",
    content: "Seguros integrales para empresas, oficinas, locales comerciales e industrias.",
    benefits: ["Cobertura integral", "Asesoría especializada", "Atención prioritaria", "Planes flexibles"],
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacing */}
      <div className="h-20"></div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{service.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {/* Provisional hero image: use uploaded /images/*.webp files */}
            <Image
              src={(() => {
                const map: Record<string, string> = {
                  "camiones-pesados": "/images/vehiculos.webp",
                  "fianzas-garantias": "/images/fianzas.webp",
                  "seguros-vida": "/images/vida.webp",
                  "seguros-vehiculares": "/images/vehiculos.webp",
                  "seguros-empresariales": "/images/maquinaria.webp",
                }
                return map[params.slug] || "/images/abstract-geometric-shapes.png"
              })()}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">{service.content}</p>

            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Beneficios Principales</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#66CCFF] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-[#66CCFF]/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-[#003366] mb-4">¿Necesitas más información?</h3>
          <p className="text-gray-600 mb-6">Contáctanos para una cotización personalizada sin compromiso</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#contacto"
              className="bg-[#003366] text-white px-4 sm:px-6 py-2 rounded hover:opacity-85 transition-opacity"
            >
              Solicitar Cotización
            </Link>
            <a
              href="https://wa.me/593999999999"
              className="bg-green-500 text-white px-4 sm:px-6 py-2 rounded hover:opacity-85 transition-opacity"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }))
}
