"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import StickyCtaButton from "@/components/StickyCtaButton"

export default function AsistenciaMedicaClientPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative h-screen md:h-[80vh] bg-center bg-cover"
          style={{ backgroundImage: "url('/images/asistencia-medica.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Asistencia Médica Integral</h1>
              <p className="text-base md:text-lg mb-6 text-white/90 max-w-3xl mx-auto">
                Cobertura médica completa para empresas y personas, con atención las 24 horas, los 365 días del año. Tu salud y tranquilidad son nuestra prioridad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/593993057480?text=Hola, necesito información sobre planes de asistencia médica"
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

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Introducción */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#003366] mb-6">Cobertura Integral de Asistencia Médica</h2>
            <p className="text-xl text-gray-600 mb-8">
              Las coberturas de nuestro ramo de asistencia médica incluyen acceso a consultas médicas, exámenes, tratamientos ambulatorios, medicamentos y hospitalización, facilitando el cuidado de la salud sin preocupaciones económicas.
            </p>
          </div>

          {/* Coberturas Principales */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-[#003366] mb-12">Coberturas Principales</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                  title: "Atención Médica",
                  description: "Acceso a consultas médicas, especialistas, exámenes diagnósticos y tratamientos médicos y farmacéuticos."
                },
                {
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  title: "Hospitalización",
                  description: "Cobertura completa de gastos hospitalarios, incluyendo honorarios médicos, quirófano y medicamentos."
                },
                {
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                  title: "Medicamentos",
                  description: "Acceso a los medicamentos necesarios para tratamientos ambulatorios u hospitalarios."
                },
                {
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  title: "Cuidado Preventivo",
                  description: "Planes que incluyen servicios para la prevención de enfermedades y promoción del bienestar general."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-[#66CCFF]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-center text-[#003366] mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coberturas Complementarias */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-[#003366] mb-12">Coberturas Complementarias</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                  title: "Atención de Emergencia",
                  description: "Servicios de emergencia y atención ambulatoria inmediata en casos de urgencia las 24/7."
                },
                {
                  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                  title: "Asistencia Funeraria",
                  description: "Incluye servicios como cofre, preparación del cuerpo, traslados y asesoría legal en caso de fallecimiento."
                },
                {
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                  title: "Servicios Dentales",
                  description: "Planes dentales que cubren limpieza, tratamientos básicos y de emergencia dental."
                },
                {
                  icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Cobertura Internacional",
                  description: "Asistencia médica en el extranjero para viajeros, expatriados o negocios internacionales."
                },
                {
                  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                  title: "Asistencia en el Hogar",
                  description: "Ayuda inmediata en emergencias domésticas para asegurados de edad avanzada o movilidad reducida."
                },
                {
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  title: "Asistencia Legal",
                  description: "Asesoramiento legal en temas de salud y cobertura de gastos legales relacionados con la atención médica."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-[#66CCFF]/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#003366] mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Beneficios Adicionales */}
          <div className="bg-gradient-to-r from-[#003366] to-[#004080] rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">Beneficios Exclusivos</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#66CCFF] text-[#003366] font-bold mr-3">1</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Red de Clínicas</h4>
                      <p className="text-blue-100">Amplia red de clínicas y hospitales a nivel nacional e internacional.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#66CCFF] text-[#003366] font-bold mr-3">2</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Segunda Opinión Médica</h4>
                      <p className="text-blue-100">Acceso a especialistas para una segunda opinión en diagnósticos complejos.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#66CCFF] text-[#003366] font-bold mr-3">3</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Telemedicina</h4>
                      <p className="text-blue-100">Consultas médicas virtuales desde la comodidad de tu hogar u oficina.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#66CCFF] text-[#003366] font-bold mr-3">4</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">Programas de Bienestar</h4>
                      <p className="text-blue-100">Acceso a programas de prevención y promoción de la salud.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contacto" className="bg-[#003366] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para proteger tu salud y la de tu familia?</h3>
            <p className="mb-6 text-lg">Contáctanos para recibir asesoría personalizada sobre nuestros planes de asistencia médica.</p>
            <a
              href="https://wa.me/593993057480?text=Hola, me interesa más información sobre los planes de asistencia médica"
              className="inline-block bg-white text-[#003366] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton phoneNumber="+593993057480" message="Hola, necesito información sobre los planes de asistencia médica" />
      <StickyCtaButton />
    </>
  )
}
