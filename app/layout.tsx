import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import CookieConsent from "@/components/CookieConsent"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  // Primary site title and description used as fallback
  title: "Corretec-Seguros Confiables",
  description: "Bienvenido a Corretec, disfruta nuestro Servicio.",
  keywords:
    "seguros camiones pesados Ecuador, evitar estafas brokers Ecuador, fianzas y garantías Ecuador, seguros confiables Ecuador",
  authors: [{ name: "CORRETEC Cia. Ltda." }],
  creator: "CORRETEC",
  publisher: "CORRETEC",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://corretec.ec",
    siteName: "Corretec-Seguros Confiables",
    title: "Corretec-Seguros Confiables",
    description: "Bienvenido a Corretec, disfruta nuestro Servicio.",
    // Use the image located in public; space in filename is URL-encoded
    images: [
      {
        url: "/Imagen%20destacada.webp",
        width: 1200,
        height: 630,
        alt: "Corretec - Imagen destacada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corretec-Seguros Confiables",
    description: "Bienvenido a Corretec, disfruta nuestro Servicio.",
    images: ["/Imagen%20destacada.webp"],
  },
  // Helpful for Next metadata generation (removes metadataBase warnings)
  metadataBase: new URL("https://corretec.ec"),
  alternates: {
    canonical: "https://corretec.com.ec",
  },
  verification: {
    google: "google-site-verification-code", // EDITAR AQUÍ: Código real de Google Search Console
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="icon" href="/images/favicon_corretec.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#003366" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
