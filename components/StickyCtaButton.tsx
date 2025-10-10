"use client"
import { useState, useEffect } from "react"

export default function StickyCtaButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-30 transition-all duration-500 md:hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <button
        onClick={scrollToContact}
        className="bg-[#003366] hover:bg-[#004488] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm"
      >
        Cotización Gratis
      </button>
    </div>
  )
}
