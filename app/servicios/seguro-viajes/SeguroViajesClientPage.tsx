"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import StickyCtaButton from "@/components/StickyCtaButton"

export default function SeguroViajesClientPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section
          className="relative h-screen md:h-[80vh] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/viajes.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Seguros de Viajes</h1>
              <p className="text-base md:text-lg mb-6 text-white/90 max-w-3xl mx-auto">
                Cobertura internacional para viajeros: salud, repatriación, cancelación y asistencia 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/593993057480?text=Hola, necesito información sobre seguros de viaje"
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
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Seguro de Viajes</h2>
            <p className="text-xl text-gray-600">Viaja con tranquilidad y protección completa en cada destino</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Coberturas Principales</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Gastos médicos en el extranjero</li>
                <li>Repatriación sanitaria</li>
                <li>Pérdida de equipaje</li>
                <li>Cancelación de viaje</li>
                <li>Retraso de vuelos</li>
                <li>Responsabilidad civil</li>
                <li>Asistencia legal</li>
              </ul>
            </div>

            <div className="bg-[#66CCFF]/10 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#003366] mb-4">Tipos de Viaje</h2>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2"></div>
                  <span className="text-gray-700">Viajes de turismo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2"></div>
                  <span className="text-gray-700">Viajes de negocios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2"></div>
                  <span className="text-gray-700">Viajes de estudios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#003366] rounded-full mt-2"></div>
                  <span className="text-gray-700">Viajes deportivos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-[#003366] mb-4">Viaja Sin Preocupaciones</h2>
            <p className="text-gray-700 mb-6">
              Obtén tu seguro de viaje y disfruta de cada momento con total tranquilidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593993057480?text=Hola, necesito información sobre seguros de viaje"
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
