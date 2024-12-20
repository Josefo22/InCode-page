import {
  FaLaptopCode,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaCogs,
  FaThumbsUp,
} from "react-icons/fa"; // Íconos de react-icons

import { title } from "@/components/primitives"; // Asegúrate de que 'title' esté correctamente importado
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function AboutUsPage() {
  return (
    <div className="space-y-12">
      {/* Título principal */}
      <h1 className={title()}>Sobre Nosotros - InCode</h1>

      {/* Sección ¿Quiénes Somos? */}
      <section className="space-y-6">
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

      {/* Sección Nuestra Visión */}
      <section className="space-y-6">
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
      <FloatingWhatsAppButton />

      {/* Sección Nuestro Enfoque */}
      <section className="space-y-6">
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

      {/* Sección Lo que Hacemos */}
      <section className="space-y-8">
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

      {/* Sección Nuestro Equipo */}
      <section className="space-y-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
          <FaUsers className="text-purple-500" size={28} />
          Nuestro Equipo
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Contamos con un equipo altamente calificado de desarrolladores,
          diseñadores, consultores y expertos en tecnología, todos comprometidos
          con el éxito de nuestros clientes. Cada miembro de nuestro equipo
          aporta conocimientos y experiencia en su campo, trabajando juntos para
          lograr soluciones efectivas y de alta calidad.
        </p>
      </section>

      {/* Sección Nuestros Valores */}
      <section className="space-y-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-3">
          <FaShieldAlt className="text-red-500" size={28} />
          Nuestros Valores
        </h3>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong>Innovación:</strong> Estamos siempre en busca de las últimas
            tendencias tecnológicas para ofrecer soluciones innovadoras que
            marquen la diferencia.
          </li>
          <li>
            <strong>Compromiso:</strong> Nos dedicamos a entregar productos de
            alta calidad, cumpliendo con los plazos establecidos y superando las
            expectativas de nuestros clientes.
          </li>
          <li>
            <strong>Colaboración:</strong> Trabajamos de la mano con nuestros
            clientes para asegurarnos de que cada proyecto esté alineado con sus
            objetivos y necesidades.
          </li>
          <li>
            <strong>Transparencia:</strong> Mantenemos una comunicación abierta
            y clara durante todo el proceso, asegurándonos de que nuestros
            clientes siempre estén informados y satisfechos.
          </li>
        </ul>
      </section>

      {/* Sección Por Qué Elegir InCode */}
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
    </div>
  );
}
