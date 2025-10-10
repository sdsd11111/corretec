"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

// EDITAR AQUÍ: Testimonios reales de clientes
const testimonios = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    empresa: "Transportes Mendoza S.A.",
    cargo: "Gerente General",
    testimonio:
      "CORRETEC nos salvó de una estafa de $15,000 con un broker deshonesto. Su transparencia y profesionalismo son incomparables. Ahora toda nuestra flota está protegida con ellos.",
  imagen: "/images/maria.webp",
    rating: 5,
    servicio: "Seguros Camiones Pesados",
  },
  {
    id: 2,
    nombre: "María Rodríguez",
    empresa: "Familia Rodríguez",
    cargo: "Ama de Casa",
    testimonio:
      "Cuando mi esposo tuvo el accidente, CORRETEC estuvo con nosotros desde el primer momento. El seguro de vida nos permitió mantener a nuestros hijos sin preocupaciones económicas.",
  imagen: "/images/luis.webp",
    rating: 5,
    servicio: "Seguro de Vida",
  },
  {
    id: 3,
    nombre: "Roberto Silva",
    empresa: "Constructora Silva Ltda.",
    cargo: "Director",
    testimonio:
      "Las fianzas con CORRETEC nos han permitido ganar licitaciones importantes. Su rapidez y mejores tasas nos dan ventaja competitiva en el mercado.",
  imagen: "/images/ana.webp",
    rating: 5,
    servicio: "Fianzas y Garantías",
  },
  {
    id: 4,
    nombre: "Ana Morales",
    empresa: "Comercial Morales",
    cargo: "Propietaria",
    testimonio:
      "El incendio en mi local pudo haber sido el fin de mi negocio. Gracias a CORRETEC, pude reconstruir y seguir adelante. Su atención fue excepcional.",
  imagen: "/images/carlos.webp",
    rating: 5,
    servicio: "Seguro Empresarial",
  },
  {
    id: 5,
    nombre: "Luis Herrera",
    empresa: "Taxi Herrera",
    cargo: "Conductor",
    testimonio:
      "Como taxista, necesitaba un seguro confiable y económico. CORRETEC me dio la mejor opción del mercado. Llevo 3 años con ellos y muy satisfecho.",
  imagen: "/images/roberto.webp",
    rating: 5,
    servicio: "Seguro Vehicular",
  },
]

export default function Testimonios() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
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
      setCurrentIndex((prev) => (prev + 1) % testimonios.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonio = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length)
  }

  const prevTestimonio = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }

  return (
    <section id="testimonios" ref={sectionRef} className="py-20 bg-[#003366]">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-[#66CCFF] max-w-3xl mx-auto text-pretty">
              Más de 5,000 familias y empresas confían en nosotros. Sus historias son nuestro mejor respaldo.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial */}
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#66CCFF]"></div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonios[currentIndex].imagen || "/placeholder.svg"}
                    alt={testimonios[currentIndex].nombre}
                    width={96}
                    height={96}
                    className="rounded-full object-cover w-24 h-24 md:w-32 md:h-32"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  {/* Rating Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonios[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-base md:text-lg text-gray-700 mb-6 italic text-pretty">
                    "{testimonios[currentIndex].testimonio}"
                  </blockquote>

                  <div>
                    <div className="font-bold text-[#003366] text-lg">{testimonios[currentIndex].nombre}</div>
                    <div className="text-gray-600">
                      {testimonios[currentIndex].cargo} - {testimonios[currentIndex].empresa}
                    </div>
                    <div className="text-[#003366] text-sm mt-1 font-medium">{testimonios[currentIndex].servicio}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonio}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 sm:-translate-x-6 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonio}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 sm:translate-x-6 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#66CCFF]" : "bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-12 space-x-4 overflow-x-auto pb-4">
            {testimonios.map((testimonio, index) => (
              <button
                key={testimonio.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 p-2 rounded-lg transition-all ${
                  index === currentIndex ? "bg-white shadow-lg" : "bg-white/20 hover:bg-white/30"
                }`}
              >
                <Image
                  src={testimonio.imagen || "/placeholder.svg"}
                  alt={testimonio.nombre}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
