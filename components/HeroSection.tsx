"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

const heroSlides = [
  {
    image: "/images/hero1.webp", // EDITAR AQUÍ: Reemplazar con imágenes reales
    title: "Protege el Futuro de tu Familia",
    subtitle: "Seguros Que Te Resguardan Ante Lo Inesperado",
    description:
      "Los riesgos del mundo real no se evitan, pero sus impactos sí. Nuestro expertise evita que te perjudiquen económicamente.",
  },
  {
    image: "/images/hero2.webp",
    title: "Especialistas en Camiones Pesados",
    subtitle: "Protección Total para tu Inversión",
    description: "Más de 15 años protegiendo el transporte pesado en Ecuador. Tu tranquilidad es nuestra prioridad.",
  },
  {
    image: "/images/hero3.webp",
    title: "Evita Estafas de Brokers",
    subtitle: "Asesoría Confiable y Transparente",
    description:
      "Te protegemos de intermediarios deshonestos. Trabajamos directamente con las mejores aseguradoras del país.",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden z-0">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{heroSlides[currentSlide].title}</h1>
        <h2 className="text-xl md:text-2xl mb-6 text-[#66CCFF] text-balance">{heroSlides[currentSlide].subtitle}</h2>
        <p className="text-lg md:text-xl mb-8 text-pretty max-w-2xl mx-auto">{heroSlides[currentSlide].description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-[#003366] text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-[#004488] transition-colors shadow-lg border-2 border-[#003366]"
          >
            Agenda una Llamada Gratuita
          </button>
          <button
            onClick={() => window.open("https://wa.me/593993057480", "_blank")}
            className="bg-[#66CCFF] text-[#003366] border-2 border-[#66CCFF] px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-white hover:text-[#003366] transition-colors shadow-lg"
          >
            WhatsApp Directo
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#66CCFF]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
