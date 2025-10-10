"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import StickyCtaButton from "@/components/StickyCtaButton"

export default function IncendioClientPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section
          className="relative h-screen md:h-[80vh] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/incendio.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Seguros de Incendio</h1>
              <p className="text-base md:text-lg mb-6 text-white/90 max-w-3xl mx-auto">
                Protege tu patrimonio frente a incendios, explosiones y riesgos relacionados con coberturas robustas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/593993057480?text=Hola, necesito información sobre seguros de incendio"
                  className="bg-[#003366] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 transition-opacity text-lg font-semibold"
                >
                  Consultar por WhatsApp
                </a>
                <button
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="border-2 border-white text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#003366] transition-colors text-lg"
                >
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Seguro de Incendio</h2>
            <p className="text-xl text-gray-600">
              Protección integral contra daños por incendio y riesgos relacionados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Riesgos Cubiertos</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Incendio y rayo</li>
                <li>Explosión</li>
                <li>Daños por humo</li>
                <li>Caída de aeronaves</li>
                <li>Impacto de vehículos</li>
                <li>Daños por agua (extinción)</li>
                <li>Gastos de demolición</li>
              </ul>
            </div>

            <div className="bg-[#66CCFF]/10 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Propiedades Aseguradas</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2"></div>
                  <span className="text-gray-700">Edificios y construcciones</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2"></div>
                  <span className="text-gray-700">Contenidos y mobiliario</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2"></div>
                  <span className="text-gray-700">Maquinaria y equipo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2"></div>
                  <span className="text-gray-700">Mercaderías y existencias</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-[#003366] mb-4">Protege tu Patrimonio</h2>
            <p className="text-gray-700 mb-6">
              No dejes que un incendio destruya años de esfuerzo. Asegura tu propiedad hoy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593993057480?text=Hola, necesito información sobre seguros de incendio"
                className="bg-[#003366] text-white px-4 sm:px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Consultar por WhatsApp
              </a>
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-[#003366] text-[#003366] px-4 sm:px-8 py-3 rounded-lg hover:bg-[#003366] hover:text-white transition-colors"
              >
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCtaButton />
    </>
  )
}
