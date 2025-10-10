import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function TerminosCondiciones() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <div className="h-20"></div>

        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#003366] mb-8 text-center">Términos y Condiciones</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Última actualización: {new Date().toLocaleDateString("es-EC")}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">1. Aceptación de Términos</h2>
              <p className="text-gray-700 mb-4">
                Al acceder y utilizar el sitio web de CORRETEC Cia. Ltda., usted acepta estar sujeto a estos términos y
                condiciones de uso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">2. Servicios</h2>
              <p className="text-gray-700 mb-4">
                CORRETEC es una empresa asesora productora de seguros autorizada por la Superintendencia de Compañías,
                Valores y Seguros del Ecuador. Ofrecemos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Asesoría en seguros</li>
                <li>Cotizaciones personalizadas</li>
                <li>Intermediación con aseguradoras</li>
                <li>Gestión de pólizas y siniestros</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">3. Responsabilidades del Usuario</h2>
              <p className="text-gray-700 mb-4">El usuario se compromete a:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Utilizar el sitio web de manera legal y apropiada</li>
                <li>No interferir con el funcionamiento del sitio</li>
                <li>Respetar los derechos de propiedad intelectual</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">4. Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                CORRETEC no será responsable por daños indirectos, incidentales o consecuenciales que puedan surgir del
                uso de este sitio web o de nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">5. Modificaciones</h2>
              <p className="text-gray-700 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán
                en vigor inmediatamente después de su publicación en el sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">6. Ley Aplicable</h2>
              <p className="text-gray-700">
                Estos términos se rigen por las leyes de la República del Ecuador. Cualquier disputa será resuelta en
                los tribunales competentes de Ecuador.
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
