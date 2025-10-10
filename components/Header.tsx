"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import PortalSubmenu from "./PortalSubmenu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesButtonRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const services = [
    { name: "Fianzas: Buen Uso de Anticipo y Cumplimiento", slug: "fianzas-anticipo-cumplimiento" },
    { name: "Ramos Generales", slug: "ramos-generales" },
    { name: "Seguro de Vehículos Livianos y Pesados", slug: "vehiculos-livianos-pesados" },
    { name: "Transporte", slug: "transporte" },
    { name: "Fidelidad Pública y Privada", slug: "fidelidad-publica-privada" },
    { name: "Responsabilidad Civil", slug: "responsabilidad-civil" },
    { name: "Vida Individual y Colectiva, Accidentes", slug: "vida-accidentes-personales" },
    { name: "Asistencia Médica", slug: "asistencia-medica" },
    { name: "Incendio", slug: "incendio" },
    { name: "Equipo y Maquinaria", slug: "equipo-maquinaria" },
    { name: "Seguro de Viajes", slug: "seguro-viajes" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 max-w-7xl overflow-x-hidden">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <Image
              src="/images/logo.webp"
              alt="CORRETEC - Seguros Confiables Ecuador"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="min-w-0">
              <h1 className="text-xl font-bold text-[#003366] truncate">CORRETEC</h1>
              <p className="text-xs text-gray-600 truncate">Seguros Confiables</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                ref={servicesButtonRef}
                className="text-[#003366] hover:text-[#66CCFF] transition-colors flex items-center space-x-1"
                onMouseEnter={() => {
                  if (closeTimer.current) {
                    window.clearTimeout(closeTimer.current)
                    closeTimer.current = null
                  }
                  setIsServicesOpen(true)
                }}
                onMouseLeave={() => {
                  if (closeTimer.current) window.clearTimeout(closeTimer.current)
                  // set a short delay before hiding so pointer can enter the portal
                  closeTimer.current = window.setTimeout(() => setIsServicesOpen(false), 180)
                }}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
              >
                <span>Servicios</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <PortalSubmenu
                anchorEl={servicesButtonRef.current}
                open={isServicesOpen}
                onPortalEnter={() => {
                  if (closeTimer.current) {
                    window.clearTimeout(closeTimer.current)
                    closeTimer.current = null
                  }
                  setIsServicesOpen(true)
                }}
                onPortalLeave={() => {
                  if (closeTimer.current) window.clearTimeout(closeTimer.current)
                  closeTimer.current = window.setTimeout(() => setIsServicesOpen(false), 180)
                }}
              >
                <div className="mt-2 bg-white shadow-xl rounded-lg border border-gray-200 py-2 w-80 max-h-96 overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/servicios/${service.slug}`}
                      className="block px-4 py-3 text-[#003366] hover:bg-[#66CCFF]/10 hover:text-[#66CCFF] transition-colors text-sm border-b border-gray-100 last:border-b-0"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </PortalSubmenu>
            </div>

            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-[#003366] text-white px-4 sm:px-6 py-2 rounded hover:opacity-85 transition-opacity whitespace-nowrap"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#003366] flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12M6 12h12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-left text-[#003366] hover:text-[#66CCFF] transition-colors flex items-center justify-between w-full"
                >
                  <span>Servicios</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2 max-h-64 overflow-y-auto">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/servicios/${service.slug}`}
                        className="block text-gray-600 hover:text-[#66CCFF] transition-colors py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left bg-[#003366] text-white px-4 py-2 rounded hover:opacity-85 transition-opacity w-fit"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
