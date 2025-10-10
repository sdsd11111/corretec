"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import StickyCtaButton from "@/components/StickyCtaButton"

export default function FianzasAnticipoPageClient() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const scrollToContact = () => {
    window.open("/#contacto", "_blank")
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section
          className="relative h-screen md:h-[80vh] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/fianzas.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Protege Tu Inversión en Proyectos de Loja
              </h1>
              <p className="text-base md:text-lg mb-6 text-white/90 max-w-3xl mx-auto">
                En Corretec, obtén fianzas de buen uso de anticipo y cumplimiento de contrato de forma rápida y
                accesible, sin trámites engorrosos ni costos excesivos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/593993057480?text=Hola, necesito cotizar una fianza para mi proyecto en Loja"
                  className="bg-[#007BFF] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#0056b3] transition-colors text-lg font-semibold"
                >
                  Cotiza Tu Fianza Ahora y Asegura Tu Proyecto
                </a>
                <button
                  onClick={scrollToContact}
                  className="border-2 border-white text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-[#003366] transition-colors text-lg"
                >
                  Asesoría Gratuita en Minutos
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
                Descubre las Categorías de Fianzas que Protegen Tus Proyectos en Ecuador
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                En Corretec, especializamos en ramos generales de fianzas, adaptadas a necesidades locales en Loja y
                todo Ecuador. Desde garantías administrativas para contratos públicos hasta judiciales para litigios,
                encuentra exactamente lo que buscas para evitar riesgos y cumplir normativas como la LOSNCP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#66CCFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Seriedad de la Oferta</h3>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#66CCFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Buen uso del anticipo</h3>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#66CCFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Cumplimiento de contrato</h3>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#66CCFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Ejecucion de obra y buena calidad de materiales</h3>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#66CCFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#003366] mb-3">Garantias aduaneras</h3>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/593993057480?text=Quiero elegir mi categoría de fianza y cotizar gratis"
                className="bg-[#28A745] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#218838] transition-colors text-lg font-semibold inline-block"
              >
                Elige tu Categoría y Cotiza Gratis
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
                Nuestros Servicios de Fianzas: Soluciones Completas para Tu Tranquilidad
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Explora en detalle nuestros servicios en ramos generales, diseñados para PyMEs y contratistas en Loja.
                aseguradoras de prestigio como las aliadas en Ecuador.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {/* Buen uso del anticipo */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#66CCFF]/20 rounded-lg mr-4">
                      <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">Buen uso del anticipo</h3>
                  </div>
                  <p className="text-gray-600 pl-16">
                    Un buen uso del anticipo implica utilizarlo de manera eficiente y transparente para maximizar los beneficios del proyecto, evitando gastos innecesarios y asegurando que se alinee con los objetivos y plazos establecidos.
                  </p>
                </div>
              </div>

              {/* Cumplimiento de contrato */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#66CCFF]/20 rounded-lg mr-4">
                      <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">Cumplimiento de contrato</h3>
                  </div>
                  <p className="text-gray-600 pl-16">
                    Satisfacer las obligaciones y términos pactados en el acuerdo, asegurando la entrega de bienes o servicios según lo estipulado, con la calidad y plazos acordados.
                  </p>
                </div>
              </div>

              {/* Seriedad de la oferta */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#66CCFF]/20 rounded-lg mr-4">
                      <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">Seriedad de la oferta</h3>
                  </div>
                  <p className="text-gray-600 pl-16">
                    Compromiso firme y responsable de cumplir con las condiciones y términos ofrecidos, generando confianza y seguridad en la propuesta presentada a nuestros clientes.
                  </p>
                </div>
              </div>

              {/* Ejecución de obra y buena calidad de materiales */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#66CCFF]/20 rounded-lg mr-4">
                      <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#003366]">Ejecución de obra y calidad de materiales</h3>
                  </div>
                  <p className="text-gray-600 pl-16">
                    Realización de trabajos de construcción con materiales de alta calidad, cumpliendo con estándares y normas, para garantizar la durabilidad, seguridad y satisfacción del cliente.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats and Trust Section */}
            <div className="mt-16 bg-[#003366] text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Respaldado por la Superintendencia de Compañías</h3>
              <p className="text-lg mb-6">
                Las fianzas evitan más del 50% de litigios contractuales en Ecuador. Con 30 años de experiencia, somos
                tu mejor opción para proteger tus inversiones.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#66CCFF]">30+</div>
                  <div>Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#66CCFF]">1000+</div>
                  <div>Proyectos Protegidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#66CCFF]">24/7</div>
                  <div>Atención Personalizada</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCtaButton />
    </>
  )
}
