import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="h-20"></div>

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#003366] mb-8 text-center">Política de Privacidad</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Última actualización: {new Date().toLocaleDateString("es-EC")}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">1. Información que Recopilamos</h2>
              <p className="text-gray-700 mb-4">
                En CORRETEC Cia. Ltda., recopilamos información personal cuando usted:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Solicita cotizaciones de seguros</li>
                <li>Se comunica con nosotros a través de formularios de contacto</li>
                <li>Navega por nuestro sitio web</li>
                <li>Contrata nuestros servicios</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">2. Uso de la Información</h2>
              <p className="text-gray-700 mb-4">Utilizamos su información personal para:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar cotizaciones y servicios de seguros</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">3. Protección de Datos</h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra
                acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">4. Sus Derechos</h2>
              <p className="text-gray-700 mb-4">Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Acceder a su información personal</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">5. Contacto</h2>
              <p className="text-gray-700">
                Para ejercer sus derechos o realizar consultas sobre esta política, contáctenos en:
                <br />
                Email: info@corretec.com.ec
                <br />
                Teléfono: +593 99 999 9999
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
