"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

interface FormData {
  nombre: string
  email: string
  telefono: string
  tipoSeguro: string
  mensaje: string
}

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  tipoSeguro?: string
  mensaje?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    tipoSeguro: "",
    mensaje: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "nombre":
        if (!value.trim()) return "El nombre es requerido"
        if (value.trim().length < 2) return "El nombre debe tener al menos 2 caracteres"
        return ""

      case "email":
        if (!value.trim()) return "El email es requerido"
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return "Ingresa un email válido"
        return ""

      case "telefono":
        if (!value.trim()) return "El teléfono es requerido"
        const phoneRegex = /^[0-9+\-\s()]{8,15}$/
        if (!phoneRegex.test(value)) return "Ingresa un teléfono válido"
        return ""

      case "tipoSeguro":
        if (!value) return "Selecciona un tipo de seguro"
        return ""

      case "mensaje":
        if (!value.trim()) return "El mensaje es requerido"
        if (value.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres"
        return ""

      default:
        return ""
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Real-time validation
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const newErrors: FormErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) newErrors[key as keyof FormErrors] = error
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el mensaje');
      }

      // Mostrar mensaje de éxito
      setIsSubmitted(true);
      
      // Resetear el formulario
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipoSeguro: "",
        mensaje: "",
      });

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-balance">
              Agenda tu Llamada Gratuita
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Recibe una cotización personalizada sin compromiso. Nuestros expertos te contactarán en menos de 24 horas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#003366] mb-6">¿Por Qué Contactarnos?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003366]">Cotización Gratuita</h4>
                      <p className="text-gray-600">Sin costo ni compromiso. Comparamos las mejores opciones para ti.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003366]">Respuesta Rápida</h4>
                      <p className="text-gray-600">
                        Te contactamos en menos de 24 horas con tu cotización personalizada.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#003366]">Asesoría Experta</h4>
                      <p className="text-gray-600">
                        15+ años de experiencia te respaldan. Te explicamos todo en términos claros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-[#003366] mb-4">Información de Contacto</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-gray-700">07-2585802 | 0993057480 | 0982865911</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-700">tramites@corretec.ec</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-700">Segundo Cueva Celi s/n Segundo Puertas Moreno</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600">
                    Te contactaremos en menos de 24 horas con tu cotización personalizada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-[#003366] mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent transition-colors ${
                        errors.nombre ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#003366] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent transition-colors ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="tu@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold text-[#003366] mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent transition-colors ${
                          errors.telefono ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="099 999 9999"
                      />
                      {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tipoSeguro" className="block text-sm font-semibold text-[#003366] mb-2">
                      Tipo de Seguro *
                    </label>
                    <select
                      id="tipoSeguro"
                      name="tipoSeguro"
                      value={formData.tipoSeguro}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent transition-colors ${
                        errors.tipoSeguro ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Selecciona un tipo de seguro</option>
                      <option value="camiones-pesados">Seguros para Camiones Pesados</option>
                      <option value="fianzas">Fianzas y Garantías</option>
                      <option value="vida">Seguros de Vida</option>
                      <option value="vehicular">Seguros Vehiculares</option>
                      <option value="hogar">Seguros de Hogar</option>
                      <option value="empresarial">Seguros Empresariales</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.tipoSeguro && <p className="text-red-500 text-sm mt-1">{errors.tipoSeguro}</p>}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold text-[#003366] mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent transition-colors resize-vertical ${
                        errors.mensaje ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Cuéntanos sobre tu situación y qué tipo de protección necesitas..."
                    />
                    {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#003366] text-white py-4 px-6 font-semibold hover:bg-[#004488] transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#003366] shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      "Solicitar Cotización Gratuita"
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Al enviar este formulario, aceptas que te contactemos para brindarte información sobre nuestros
                    servicios.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
