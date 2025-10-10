import type { Metadata } from "next"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import QuienesSomos from "@/components/QuienesSomos"
import ServiciosCarousel from "@/components/ServiciosCarousel"
import Testimonios from "@/components/Testimonios"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import StickyCtaButton from "@/components/StickyCtaButton"

export const metadata: Metadata = {
  title: "Seguros Confiables en Ecuador | CORRETEC – Evita Estafas y Protege Tu Familia",
  description:
    "Los riesgos no se evitan, pero sus impactos sí. CORRETEC te protege con seguros confiables en Ecuador. Especialistas en fianzas, camiones pesados y más.",
  keywords:
    "seguros camiones pesados Ecuador, evitar estafas brokers Ecuador, fianzas y garantías Ecuador, seguros confiables Ecuador",
  openGraph: {
    title: "CORRETEC - Seguros Confiables en Ecuador",
    description: "Protege el futuro de tu familia con seguros que te resguardan ante lo inesperado.",
    type: "website",
    locale: "es_EC",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://corretec.com.ec",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://corretec.com.ec/#organization",
      name: "CORRETEC Cia. Ltda.",
      url: "https://corretec.com.ec",
      logo: "https://corretec.com.ec/images/logo.webp",
      description:
        "Empresa asesora productora de seguros en Ecuador, especializada en seguros para camiones pesados, fianzas y garantías.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Principal 123", // EDITAR AQUÍ: Dirección real
        addressLocality: "Quito",
        addressRegion: "Pichincha",
        postalCode: "170501",
        addressCountry: "EC",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+593-99-999-9999", // EDITAR AQUÍ: Teléfono real
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
      sameAs: [
        "https://www.facebook.com/corretec", // EDITAR AQUÍ: Redes sociales reales
        "https://www.linkedin.com/company/corretec",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://corretec.com.ec/#person",
      name: "María González", // EDITAR AQUÍ: Nombre real de la dueña
      jobTitle: "Directora General",
      worksFor: {
        "@id": "https://corretec.com.ec/#organization",
      },
    },
    {
      "@type": "Service",
      "@id": "https://corretec.com.ec/#service",
      name: "Seguros para Camiones Pesados",
      provider: {
        "@id": "https://corretec.com.ec/#organization",
      },
      areaServed: "Ecuador",
      description: "Seguros especializados para camiones pesados y transporte de carga en Ecuador.",
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <HeroSection />
        <QuienesSomos />
        <ServiciosCarousel />
        <Testimonios />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCtaButton />
    </>
  )
}
