import {
  FaLaptopCode,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaCogs,
  FaThumbsUp,
  FaArrowDown, // Flecha hacia abajo
  FaArrowUp,   // Flecha hacia arriba
} from "react-icons/fa"; // Íconos de react-icons

import { title } from "@/components/primitives"; // Asegúrate de que 'title' esté correctamente importado
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function AboutUsPage() {
  return (
    <div className="space-y-12">
      {/* Título principal */}
      <h1 className={title()}>Sobre Nosotros - InCode</h1>

      {/* Sección 1: ¿Quiénes Somos? a la izquierda */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sección izquierda con contenido */}
        <section className="space-y-6 flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-3">
            <FaUsers className="text-blue-500" size={28} />
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            En <strong>InCode</strong>, somos una empresa de consultoría y
            desarrollo web especializada en crear soluciones digitales innovadoras
            que transforman la manera en que las empresas interactúan con sus
            clientes. Nuestra misión es ayudar a negocios de todos los tamaños a
            crecer en el mundo digital a través de la tecnología, el diseño y la
            estrategia.
          </p>
        </section>

        {/* Flecha hacia abajo */}
        <section className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <FaArrowDown className="text-blue-500 text-4xl" />
          </div>
        </section>
      </section>

      {/* Sección 2: Nuestra Visión a la derecha */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Flecha hacia arriba (para el siguiente section) */}
        <section className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <FaArrowDown className="text-yellow-500 text-4xl" />
          </div>
        </section>

        {/* Sección derecha con contenido */}
        <section className="space-y-6 flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-3">
            <FaLightbulb className="text-yellow-500" size={28} />
            Nuestra Visión
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Nos vemos como un socio estratégico para empresas que buscan optimizar
            sus procesos, mejorar su presencia en línea y ofrecer una experiencia
            digital única a sus clientes. Creemos que la tecnología debe ser
            accesible, útil y capaz de impulsar resultados tangibles.
          </p>
        </section>
      </section>

      <FloatingWhatsAppButton />
      
      {/* Sección 3: Nuestro Enfoque a la izquierda */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sección izquierda con contenido */}
        <section className="space-y-6 flex flex-col justify-center items-start">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-3">
            <FaCogs className="text-green-500" size={28} />
            Nuestro Enfoque
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Trabajamos de manera colaborativa con cada cliente, desde la fase
            inicial de planificación hasta la ejecución final. Nuestros equipos se
            centran en crear soluciones personalizadas, basadas en las necesidades
            específicas de cada empresa, utilizando las últimas tecnologías
            disponibles.
          </p>
        </section>

        {/* Flecha hacia abajo */}
        <section className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <FaArrowDown className="text-green-500 text-4xl" />
          </div>
        </section>
      </section>

      {/* Sección 4: Lo que Hacemos a la derecha */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Flecha hacia arriba (para el siguiente section) */}
        <section className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <FaArrowDown className="text-blue-600 text-4xl" />
          </div>
        </section>

        {/* Sección derecha con contenido */}
        <section className="space-y-8 flex flex-col justify-center items-start">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
            <FaLaptopCode className="text-blue-600" size={28} />
            Lo que Hacemos
          </h3>
          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li className="hover:text-blue-500 transition-colors duration-300">
              <strong>Desarrollo Web Personalizado:</strong> Creamos aplicaciones
              web a medida, optimizadas y escalables para mejorar la experiencia
              de usuario y ayudar a las empresas a alcanzar sus objetivos.
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300">
              <strong>Consultoría y Estrategia Digital:</strong> Proporcionamos
              asesoramiento experto para mejorar la presencia digital de las
              empresas mediante estrategias tecnológicas eficaces que impulsan su
              competitividad.
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300">
              <strong>Diseño de Interfaces de Usuario:</strong> Nos especializamos
              en la creación de interfaces atractivas y funcionales que mejoran la
              interacción del usuario con las plataformas digitales.
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300">
              <strong>Optimización de Procesos y Automatización:</strong> Ayudamos
              a las empresas a optimizar sus procesos internos a través de
              soluciones tecnológicas que mejoran la eficiencia y reducen los
              costos operativos.
            </li>
            <li className="hover:text-blue-500 transition-colors duration-300">
              <strong>Soporte Continuo y Mantenimiento:</strong> Ofrecemos soporte
              y mantenimiento para garantizar que las soluciones tecnológicas
              sigan funcionando al máximo, adaptándose a las necesidades
              cambiantes del negocio.
            </li>
          </ul>
        </section>
      </section>

      {/* Última sección sin flecha */}
      <section className="space-y-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
          <FaThumbsUp className="text-teal-500" size={28} />
          Por Qué Elegir InCode
        </h3>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>Soluciones a medida para tus necesidades específicas.</li>
          <li>
            Expertos en desarrollo web, consultoría digital y optimización de
            procesos.
          </li>
          <li>Compromiso con la calidad, innovación y resultados.</li>
          <li>
            Soporte y mantenimiento continuo para garantizar el éxito a largo
            plazo.
          </li>
        </ul>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          En <strong>InCode</strong>, tu éxito es nuestro éxito. Estamos aquí
          para ayudarte a llevar tu empresa al siguiente nivel digital.
        </p>
      </section>
      

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
