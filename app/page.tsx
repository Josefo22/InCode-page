import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Importando iconos de react-icons
import Image from "next/image";

import { title, subtitle } from "../components/primitives";
import { siteConfig } from "../config/site";

import "../styles/AnimatedText.css"; // Asegúrate de importar el archivo CSS
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-8 md:py-10">
      {/* Sección Principal */}
      <section className="flex flex-col items-start justify-center">
        <div className="max-w-4xl text-left">
          <span className={`${title()} text-6xl md:text-7xl font-bold`}>
            In&nbsp;
          </span>
          <span
            className={`${title({ color: "blue" })} text-6xl md:text-7xl font-bold`}
          >
            Code&nbsp;
          </span>
          <br />
          <span className={`${title()} text-4xl md:text-5xl font-semibold`}>
            Desarrollo Web a Medida
          </span>
          <div className={`${subtitle({ class: "mt-4" })} text-xl md:text-2xl`}>
            Somos expertos en diseño web, dedicados a crear sitios atractivos y
            modernos que capturan la esencia de cada negocio. Con años de
            experiencia en el sector, ofrecemos soluciones personalizadas que
            combinan funcionalidad y estética, garantizando una excelente
            experiencia de usuario.
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="mt-8 flex gap-4 justify-start w-full">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Cotizar Ahora
          </Link>
        </div>
      </section>

      {/* Sección Redes Sociales */}
      <section className="flex flex-col items-start justify-center mt-16">
        <div className={`${subtitle({ class: "mt-4" })} text-xl md:text-2xl`}>
          Redes Sociales
        </div>
        <div className="mt-8 flex flex-wrap gap-6 justify-start w-full">
          <Link
            isExternal
            className="flex items-center gap-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
            href="https://www.facebook.com/share/15LEYde9e2/?mibextid=wwXIfr"
          >
            <FaFacebook size={24} />
            Facebook
          </Link>
          <Link
            isExternal
            className="flex items-center gap-2 p-2 rounded-full bg-blue-600 text-white hover:bg-pink-700 transition-all"
            href="https://www.instagram.com/incode22/"
          >
            <FaInstagram size={24} />
            Instagram
          </Link>
          <Link
            isExternal
            className="flex items-center gap-2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
            href="https://www.tiktok.com/@incode22?_t=ZS-8sLtZrmPPWB&_r=1"
          >
            <FaInstagram size={20} />
            TikTok
          </Link>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-12">
            Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Carta - Sitio Institucional */}
            <div className="border-l-4 border-blue-500 pl-6 py-6 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  alt="Sitio Institucional"
                  height={48}
                  src="/Logo Incode.svg"
                  width={48}
                />
                <h3 className="text-2xl font-bold">Sitio Institucional</h3>
              </div>
              <p className="text-gray-600">
                Creamos sitios web institucionales que reflejan la identidad y
                valores de su organización. Nos aseguramos de que su sitio
                institucional comunique de manera efectiva su misión, visión y
                servicios, proporcionando una experiencia de usuario óptima.
              </p>
              <div className="text-center">
                <Link
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                  href="#"
                >
                  Ver más
                </Link>
              </div>
            </div>

            {/* Carta - Landing Page */}
            <div className="border-l-4 border-blue-500 pl-6 py-6 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  alt="Landing Page"
                  height={48}
                  src="/Logo Incode.svg"
                  width={48}
                />
                <h3 className="text-2xl font-bold">Landing Page</h3>
              </div>
              <p className="text-gray-600">
                Desarrollamos páginas de aterrizaje y sitios de una sola página,
                optimizados para conversiones y campañas de marketing.
              </p>
              <div className="text-center">
                <Link
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                  href="#"
                >
                  Ver más
                </Link>
              </div>
            </div>

            {/* Carta - Tienda Online */}
            <div className="border-l-4 border-blue-500 pl-6 py-6 space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  alt="Tienda Online"
                  height={48}
                  src="/Logo Incode.svg"
                  width={48}
                />
                <h3 className="text-2xl font-bold">Tienda Online</h3>
              </div>
              <p className="text-gray-600">
                Soluciones completas para tiendas online y plataformas de
                ecommerce, con un enfoque en la experiencia de compra y
                seguridad.
              </p>
              <div className="text-center">
                <Link
                  className="text-blue-500 hover:text-blue-600 font-semibold"
                  href="#"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Casos de Éxito */}
      <section className="flex flex-col md:flex-row items-center py-16 px-4">
        {/* Texto a la izquierda */}
        <div className="flex-1 text-left pr-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4 dark:text-blue-400">
            CASOS DE ÉXITO
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Porfolio web
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Entendemos que tu presencia en línea es crucial para el éxito de tu
            negocio. Estamos aquí para ayudarte a mejorar tu sitio web o lanzar
            uno nuevo.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong className="text-gray-900 dark:text-gray-100">
              Experiencia Comprobada:
            </strong>{" "}
            Nuestro equipo tiene años de experiencia en WordPress y soluciones
            personalizadas.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <strong className="text-gray-900 dark:text-gray-100">
              Diseño Atractivo:
            </strong>{" "}
            Creamos diseños que mejoran la experiencia de usuario y la
            conversión de visitas.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            <strong className="text-gray-900 dark:text-gray-100">
              Optimización Constante:
            </strong>{" "}
            Nos aseguramos de mantener tu sitio optimizado y actualizado.
          </p>
          <div className="text-center">
            <Link
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
              href="#"
            >
              Ver Portfolio
            </Link>
          </div>
        </div>

        {/* Imagen del mockup a la derecha */}
        <div className="flex-1 mt-8 md:mt-0" />
      </section>
      <section className="flex flex-col md:flex-row items-center py-16 px-4">
        {/* Contenido de texto a la izquierda */}
        <div className="flex-1 text-left pr-8">
          <h2 className="text-3xl font-bold text-blue-500 mb-4 dark:text-blue-400">
            Estamos en cada detalle
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Nuestros clientes lo dicen
          </h3>

          <div className="mb-12">
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              <p className="italic">
                “Necesitábamos un rediseño completo de nuestro sitio web en
                Barcelona y Macweb hizo un trabajo fantástico. El nuevo diseño
                no solo es visualmente atractivo, sino que también mejora la
                experiencia del usuario y refleja nuestros valores ecológicos a
                la perfección. Ya estamos viendo un aumento en las visitas y
                ventas a través de la web.”
              </p>
              <footer className="mt-4 font-semibold">
                Alejandro - Barcelona, España
              </footer>
            </blockquote>
          </div>

          <div className="mb-12">
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              <p className="italic">
                “The Macweb team designed a fantastic website for my restaurant
                in New York. They completed it quickly and incorporated all of
                our needs and our entire menu into the site. Their
                professionalism and efficiency are second to none.”
              </p>
              <footer className="mt-4 font-semibold">
                Christian - New York, USA
              </footer>
            </blockquote>
          </div>

          <div>
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              <p className="italic">
                “Crearon un sitio web para nuestra empresa metalúrgica en
                Santiago. El proceso fue rápido y hicieron varias propuestas,
                además el nuevo sitio ha aumentado nuestras consultas y ventas.
                ¡Altamente recomendados!”
              </p>
              <footer className="mt-4 font-semibold">
                Rodrigo - Santiago, Chile
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Imagen a la derecha */}
        <div className="flex-1 mt-8 md:mt-0" />
      </section>
      <FloatingWhatsAppButton />
      <div className="flex flex-col items-center space-y-2 p-4">
        <span className="text-4xl font-semibold text-gray-800 animate-pulse">
          Creamos
        </span>
        <span className="text-4xl font-semibold text-blue-600 animate-pulse">
          Tus Ideas
        </span>
      </div>
    </div>
  );
}
