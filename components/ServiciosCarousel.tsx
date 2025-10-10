"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

// EDITAR AQUÍ: Datos de servicios reales
const servicios = [
  {
    id: 1,
    titulo: "Fianzas",
    subtitulo: "Buen Uso de Anticipo y Cumplimiento de Contrato, Ramos Generales",
    descripcion:
      "Garantizamos el cumplimiento de tus contratos y el buen uso de anticipos con nuestras fianzas especializadas.",
  imagen: "/images/fianzas.webp",
    beneficios: ["Buen uso del anticipo", "Cumplimiento del contrato", "Seriedad de la oferta", "Ejecucion de obra y buena calidad de materiales"],
    slug: "fianzas",
  },
  {
    id: 2,
    titulo: "Seguros de Vehículos",
    subtitulo: "Livianos y Pesados",
    descripcion: "Protección integral para tu vehículo, desde autos familiares hasta camiones de carga pesada.",
  imagen: "/images/vehiculos.webp",
    beneficios: ["Cobertura 24/7", "Asistencia en carretera", "Talleres autorizados", "Auto sustituto"],
    slug: "vehiculos-livianos-pesados",
  },
  {
    id: 3,
    titulo: "Seguros de Transporte",
    subtitulo: "Carga y Mercancías",
    descripcion: "Asegura tus mercancías durante el transporte terrestre, marítimo y aéreo.",
  imagen: "/images/transporte.webp",
    beneficios: ["Full Cobertura", "Protección internacional", "Trámites ágiles", "Asesoría especializada"],
    slug: "transporte",
  },
  {
    id: 4,
    titulo: "Fidelidad",
    subtitulo: "Pública y Privada",
    descripcion: "Protege tu empresa contra actos deshonestos de empleados en el sector público y privado.",
    imagen: "/images/fidelidad.webp",
    beneficios: ["Cobertura amplia", "Evaluación de riesgos", "Respaldo legal", "Atención personalizada"],
    slug: "fidelidad-publica-privada",
  },
  {
    id: 5,
    titulo: "Responsabilidad Civil",
    subtitulo: "Protección Integral",
    descripcion: "Cobertura ante daños a terceros por actividades profesionales o empresariales.",
  imagen: "/images/responsabilidad.webp",
    beneficios: ["Defensa jurídica", "Cobertura mundial", "Sin franquicia", "Asesoría legal"],
    slug: "responsabilidad-civil",
  },
  {
    id: 6,
    titulo: "Vida Individual y Colectiva",
    subtitulo: "Accidentes Personales",
    descripcion: "Protección para ti y tu familia ante cualquier eventualidad o accidente personal.",
    imagen: "/images/vida.webp",
    beneficios: ["Prima accesible", "Cobertura amplia", "Pago inmediato", "Sin exámenes médicos"],
    slug: "vida-accidentes-personales",
  },
  {
    id: 7,
    titulo: "Seguros de Incendio",
    subtitulo: "Protección Patrimonial",
    descripcion: "Protege tu patrimonio contra incendios, explosiones y riesgos relacionados.",
  imagen: "/images/incendio.webp",
    beneficios: ["Cobertura total", "Reposición a nuevo", "Gastos adicionales", "Atención 24/7"],
    slug: "incendio",
  },
  {
    id: 8,
    titulo: "Equipo y Maquinaria",
    subtitulo: "Protección Industrial",
    descripcion: "Cobertura especializada para equipos industriales, maquinaria y herramientas de trabajo.",
  imagen: "/images/maquinaria.webp",
    beneficios: ["Todo riesgo", "Rotura de maquinaria", "Pérdida de beneficios", "Mantenimiento incluido"],
    slug: "equipo-maquinaria",
  },
  {
    id: 9,
    titulo: "Seguros de Viajes",
    subtitulo: "Protección Internacional",
    descripcion: "Viaja tranquilo con cobertura médica, cancelación de viajes y asistencia 24/7.",
    imagen: "/images/viajes.webp",
    beneficios: ["Asistencia médica", "Cancelación de viaje", "Equipaje protegido", "Cobertura mundial"],
    slug: "seguro-viajes",
  },
  {
    id: 10,
    titulo: "Asistencia Médica",
    subtitulo: "Cobertura Integral",
    descripcion: "Acceso a consultas, exámenes, hospitalización y medicamentos con amplia red de clínicas.",
    imagen: "/images/asistencia-medica.webp",
    beneficios: ["Atención 24/7", "Cobertura nacional", "Medicamentos incluidos", "Emergencias"],
    slug: "asistencia-medica",
  },
]

export default function ServiciosCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [itemsPerView, setItemsPerView] = useState(1)
  const autoplayRef = useRef<number | null>(null)
  const pageCount = Math.ceil(servicios.length / itemsPerView)

  // keep currentPage valid when itemsPerView changes
  useEffect(() => {
    setCurrentPage((p) => Math.min(p, Math.max(0, pageCount - 1)))
  }, [pageCount])

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        // For large screens, use 3 items per view, but adjust if it would leave a single item on the last page
        const totalItems = servicios.length;
        if (totalItems % 3 === 1) {
          // If we'd have one item on the last page, show 2 items per view instead
          setItemsPerView(2);
        } else {
          setItemsPerView(3);
        }
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

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

  // Autoplay every 12s, pause when isPaused is true or section not visible
  useEffect(() => {
    function startAutoplay() {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
      autoplayRef.current = window.setInterval(() => {
        setCurrentPage((p) => (p + 1) % pageCount)
      }, 12000)
    }

    if (isVisible && !isPaused) startAutoplay()

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [isVisible, isPaused, pageCount])

  const nextSlide = () => {
    setCurrentPage((p) => (p + 1) % pageCount)
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current)
      autoplayRef.current = window.setInterval(() => setCurrentPage((p) => (p + 1) % pageCount), 12000)
    }
  }

  const prevSlide = () => {
    setCurrentPage((p) => (p - 1 + pageCount) % pageCount)
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current)
      autoplayRef.current = window.setInterval(() => setCurrentPage((p) => (p + 1) % pageCount), 12000)
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicios" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-balance">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Protección integral para cada aspecto de tu vida. Desde seguros vehiculares hasta fianzas empresariales.
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out touch-pan-y"
                style={{
                  transform: `translateX(-${currentPage * (100 / pageCount)}%)`,
                  width: `${pageCount * 100}%`,
                }}
              >
                {Array.from({ length: pageCount }).map((_, pageIdx) => (
                  <div key={pageIdx} className="px-4 sm:px-3" style={{ width: `${100 / pageCount}%` }}>
                    <div className="flex gap-4">
                      {servicios
                        .slice(pageIdx * itemsPerView, pageIdx * itemsPerView + itemsPerView)
                        .map((servicio) => (
                          <div key={servicio.id} className="flex-1">
                            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                              <div className="relative h-48 overflow-hidden rounded-t-lg">
                                <Image
                                  src={servicio.imagen || "/placeholder.svg"}
                                  alt={servicio.titulo}
                                  fill
                                  className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              </div>

                              <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-[#003366] mb-2 text-balance">{servicio.titulo}</h3>
                                <p className="text-sm text-[#003366] font-medium mb-3">{servicio.subtitulo}</p>
                                <p className="text-gray-600 mb-4 text-pretty">{servicio.descripcion}</p>

                                <ul className="space-y-2 mb-6 flex-1">
                                  {servicio.beneficios.map((beneficio, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-700">
                                      <svg
                                        className="w-4 h-4 text-[#003366] mr-2 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      {beneficio}
                                    </li>
                                  ))}
                                </ul>

                                <div className="flex gap-2 mt-auto">
                                  <Link
                                    href={`/servicios/${servicio.slug}`}
                                    className="flex-1 bg-[#66CCFF] text-[#003366] py-3 px-4 text-center hover:opacity-85 transition-opacity font-semibold text-sm"
                                  >
                                    Ver Más
                                  </Link>
                                  <button
                                    onClick={scrollToContact}
                                    className="flex-1 bg-[#003366] text-white py-3 px-4 hover:opacity-85 transition-opacity font-semibold text-sm"
                                  >
                                    Cotizar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              aria-label="Previous services"
            >
              <svg className="w-6 h-6 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              aria-label="Next services"
            >
              <svg className="w-6 h-6 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentPage === index ? "bg-[#003366]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
