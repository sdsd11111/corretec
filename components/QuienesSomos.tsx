"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function QuienesSomos() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Confianza y Experiencia",
      description:
        "Desde 1991, protegemos patrimonios en Ecuador. Más de 30 años de experiencia que nos convierten en el respaldo que tus proyectos y familia necesitan.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
      title: "Atención y Acompañamiento",
      description:
        "Olvídate de la letra pequeña y los robots. Con nosotros, siempre tendrás a un asesor real, disponible 24/7, listo para guiarte y resolver cualquier imprevisto.",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Protección Sin Sorpresas",
      description:
        "Somos tu escudo contra las promesas vacías. Te ofrecemos una asesoría transparente que garantiza que tu póliza tendrá coberturas reales y efectivas para que nunca te lleves una sorpresa.",
    },
  ]

  return (
    <section id="quienes-somos" ref={sectionRef} className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-6 text-balance">
              Quiénes Somos
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Más de 30 años protegiendo familias y empresas ecuatorianas con seguros confiables y asesoría
              transparente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* text first on mobile (order-1), image second; on large screens text stays left */}
            <div className="space-y-6 order-1 lg:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-[#003366] mb-4">Nuestra Historia y Compromiso</h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {
                  "Desde 1991, en Corretec hemos tenido una sola misión: inspirar confianza.\nPor más de 30 años hemos estado al lado de profesionales, emprendedores y familias ecuatorianas, protegiendo sus negocios, vehículos y sueños con la fuerza de un nombre que siempre ha defendido la honestidad.\n\nNo hablamos de seguros, hablamos de tranquilidad. Porque sabemos lo que hacemos: cada póliza que entregamos es clara, real y pensada para cuidar lo que más valoras."
                }
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {
                  "La confianza no se improvisa. Se gana con años de trabajo y con cada persona que ha depositado su futuro en nuestras manos.\n\nHoy seguimos con el mismo compromiso, pero con la agilidad que las nuevas generaciones necesitan. Tu vida no se detiene, y nosotros estamos aquí para asegurar cada paso de tu camino."
                }
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8">
                <div className="text-center p-3 md:p-4 bg-[#66CCFF]/10 rounded">
                  <div className="text-2xl md:text-3xl font-bold text-[#003366]">30+</div>
                  <div className="text-xs md:text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-[#66CCFF]/10 rounded">
                  <div className="text-2xl md:text-3xl font-bold text-[#003366]">5000+</div>
                  <div className="text-xs md:text-sm text-gray-600">Familias Protegidas</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-[#66CCFF]/10 rounded">
                  <div className="text-2xl md:text-3xl font-bold text-[#003366]">98%</div>
                  <div className="text-xs md:text-sm text-gray-600">Satisfacción Cliente</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-[#66CCFF]/10 rounded">
                  <div className="text-2xl md:text-3xl font-bold text-[#003366]">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600">Atención Siniestros</div>
                </div>
              </div>
            </div>

            <div className="relative order-2 lg:order-2">
              <Image
                // use uploaded empresa.webp as the visible image; placeholder-09v4g.jpg may not exist
                src="/images/empresa.webp"
                alt="Equipo CORRETEC - Expertos en Seguros Ecuador"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute bottom-0 right-0 md:-bottom-6 md:-right-6 bg-[#003366] text-white p-3 md:p-6 rounded-lg max-w-[180px] md:max-w-[200px]">
                <div className="text-lg md:text-2xl font-bold">Gabriela Armijos</div>
                <div className="text-gray-200 text-sm md:text-base">Directora General</div>
                <div className="text-xs md:text-sm mt-2">Especialista Certificada en Seguros</div>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-[#003366] text-center mb-8 md:mb-12">
              ¿Por Qué Elegir CORRETEC?
            </h3>

            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#66CCFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#003366] mb-3">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {benefits.map((benefit, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="text-center p-6 bg-white shadow-lg rounded-lg mx-2">
                        <div className="w-16 h-16 bg-[#66CCFF] rounded-full flex items-center justify-center mx-auto mb-4">
                          {benefit.icon}
                        </div>
                        <h4 className="text-xl font-bold text-[#003366] mb-3">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-6 space-x-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-[#003366]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
