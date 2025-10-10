"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import StickyCtaButton from "@/components/StickyCtaButton"

export default function EquipoMaquinariaClientPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section
          className="relative h-screen md:h-[80vh] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/maquinaria.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Equipo y Maquinaria</h1>
              <p className="text-base md:text-lg mb-6 text-white/90 max-w-3xl mx-auto">
                Cobertura especializada para equipos industriales y maquinaria, protegiendo tu inversión productiva.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/593993057480?text=Hola, necesito información sobre seguros para equipo y maquinaria"
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
            <h2 className="text-4xl font-bold text-[#003366] mb-4">Seguro de Equipo y Maquinaria</h2>
            <p className="text-xl text-gray-600">Protección especializada para equipos industriales y maquinaria</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#003366]/10 rounded-lg mr-4">
                    <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#003366]">Cobertura Integral</h2>
                </div>
                <p className="text-gray-600 mb-4">Protección completa para tu maquinaria y equipos contra una amplia gama de riesgos en Ecuador.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Daños accidentales, súbitos e imprevistos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Incendio, explosión y colisión</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Robo y actos de vandalismo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#003366] to-[#004080] rounded-xl shadow-lg overflow-hidden text-white">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-white/20 rounded-lg mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Protección Adicional</h2>
                </div>
                <p className="text-blue-100 mb-4">Amplía tu cobertura con estas protecciones especiales:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                    </div>
                    <span className="ml-3">Eventos climáticos (inundaciones, terremotos, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                    </div>
                    <span className="ml-3">Daños por impericia del operario</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                    </div>
                    <span className="ml-3">Errores de montaje</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                    </div>
                    <span className="ml-3">Eventos de fuerza mayor (huelgas, disturbios)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#f8fafc] to-[#f0f9ff] rounded-xl p-6 mb-12 border border-gray-100 shadow-sm">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#003366]/10 rounded-full mb-4">
                <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cobertura Personalizada</h3>
              <p className="text-gray-600">El alcance exacto de la cobertura se adapta a las necesidades específicas de cada cliente, considerando el tipo de maquinaria y las condiciones particulares de operación. Contáctanos para una asesoría personalizada.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-[#003366] mb-4">Protege tu Inversión</h2>
            <p className="text-gray-700 mb-6">
              Asegura la continuidad de tu negocio protegiendo tus equipos más valiosos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593993057480?text=Hola, necesito información sobre seguros de equipo y maquinaria"
                className="bg-[#003366] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Consultar por WhatsApp
              </a>
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-[#003366] text-[#003366] px-8 py-3 rounded-lg hover:bg-[#003366] hover:text-white transition-colors"
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
