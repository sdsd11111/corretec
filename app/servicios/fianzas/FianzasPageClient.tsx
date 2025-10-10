"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Clock, Users, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react"

export default function FianzasPageClient() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId)
  }

  const fianzasServices = [
    {
      id: "administrativas",
      title: "Fianzas Administrativas",
      description: "Garantías para contratos con entidades públicas",
      benefits: [
        "Cumplimiento de contratos públicos",
        "Buen uso del anticipo recibido",
        "Garantía de seriedad de oferta",
        "Respaldo ante incumplimientos",
      ],
      cta: "Cotizar Fianza Administrativa",
    },
    {
      id: "judiciales",
      title: "Fianzas Judiciales",
      description: "Garantías para procesos legales y judiciales",
      benefits: [
        "Libertad provisional en procesos penales",
        "Garantía en procesos civiles",
        "Respaldo en medidas cautelares",
        "Agilización de trámites legales",
      ],
      cta: "Solicitar Fianza Judicial",
    },
    {
      id: "aduaneras",
      title: "Fianzas Aduaneras",
      description: "Garantías para operaciones de comercio exterior",
      benefits: [
        "Importaciones y exportaciones",
        "Régimen de depósito aduanero",
        "Tránsito aduanero internacional",
        "Operaciones de comercio exterior",
      ],
      cta: "Obtener Fianza Aduanera",
    },
    {
      id: "fidelidad",
      title: "Fianzas de Fidelidad",
      description: "Protección contra actos deshonestos de empleados",
      benefits: [
        "Protección contra fraudes internos",
        "Cobertura de empleados clave",
        "Manejo de fondos y valores",
        "Tranquilidad empresarial",
      ],
      cta: "Proteger mi Empresa",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#003366] to-[#004080] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#66CCFF] text-[#003366] hover:bg-[#66CCFF]/90">
                Especialistas Certificados en Seguros
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                ¿Tienes un proyecto en <span className="text-[#66CCFF]">Loja</span> y necesitas proteger tu inversión?
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">
                No dejes que las promesas vacías arruinen tus sueños. Con nuestras fianzas, tu proyecto estará
                respaldado por más de 30 años de experiencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#66CCFF] text-[#003366] hover:bg-[#66CCFF]/90 font-semibold px-4 sm:px-8 py-3 sm:py-4 text-lg"
                  onClick={() =>
                    window.open(
                      "https://wa.me/593993057480?text=Hola, necesito información sobre fianzas para mi proyecto",
                      "_blank",
                    )
                  }
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Proteger Mi Proyecto Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#003366] px-4 sm:px-8 py-3 sm:py-4 text-lg bg-transparent"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Conocer Más
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías de Fianzas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">Tipos de Fianzas que Ofrecemos</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Desde 1991, hemos protegido miles de proyectos en Ecuador con nuestras fianzas especializadas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Administrativas", desc: "Para contratos públicos" },
                { icon: CheckCircle, title: "Judiciales", desc: "Para procesos legales" },
                { icon: Clock, title: "Aduaneras", desc: "Para comercio exterior" },
                { icon: Users, title: "De Fidelidad", desc: "Para empleados clave" },
              ].map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <item.icon className="h-12 w-12 text-[#003366] mx-auto mb-4" />
                    <CardTitle className="text-[#003366]">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios Detallados */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">Nuestros Servicios de Fianzas</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cada fianza está diseñada para proteger tu inversión y darte la tranquilidad que necesitas
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {fianzasServices.map((service) => (
                <Card key={service.id} className="overflow-hidden">
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleService(service.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-[#003366] text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </div>
                      {expandedService === service.id ? (
                        <ChevronUp className="h-5 w-5 text-[#003366]" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-[#003366]" />
                      )}
                    </div>
                  </CardHeader>

                  {expandedService === service.id && (
                    <CardContent className="pt-0">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-[#003366] mb-3">Beneficios:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col justify-center">
                          <Button
                            className="bg-[#003366] hover:bg-[#003366]/90 mb-3"
                            onClick={() =>
                              window.open(
                                "https://wa.me/593993057480?text=Hola, necesito información sobre " + service.title,
                                "_blank",
                              )
                            }
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            {service.cta}
                          </Button>
                          <Button
                            variant="outline"
                            className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white bg-transparent"
                            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Solicitar Cotización
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section id="contacto" className="py-16 bg-[#003366] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Proteger tu Proyecto?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              No esperes a que sea demasiado tarde. Contacta con nuestros especialistas y obtén tu fianza hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#66CCFF] text-[#003366] hover:bg-[#66CCFF]/90 font-semibold px-4 sm:px-8 py-3 sm:py-4"
                onClick={() =>
                  window.open("https://wa.me/593993057480?text=Hola, necesito una fianza para mi proyecto", "_blank")
                }
              >
                <Phone className="mr-2 h-5 w-5" />
                WhatsApp: 099-305-7480
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#003366] px-4 sm:px-8 py-3 sm:py-4 bg-transparent"
                onClick={() => window.open("mailto:tramites@corretec.ec?subject=Consulta sobre Fianzas", "_blank")}
              >
                <Mail className="mr-2 h-5 w-5" />
                tramites@corretec.ec
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
