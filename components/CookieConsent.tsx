"use client"
import { useState, useEffect } from "react"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("corretec-cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("corretec-cookie-consent", "accepted")
    setShowConsent(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("corretec-cookie-consent", "rejected")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-2">
              <strong>🍪 Uso de Cookies</strong>
            </p>
            <p className="text-sm text-gray-600">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el
              contenido. Al continuar navegando, acepta nuestro uso de cookies según nuestra{" "}
              <a href="/politica-privacidad" className="text-[#003366] hover:text-[#66CCFF] underline">
                Política de Privacidad
              </a>
              .
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-[#003366] text-white rounded hover:opacity-85 transition-opacity"
            >
              Aceptar Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
