import {
  UserGroupIcon,
  SparklesIcon,
  LightBulbIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

import Card from "@/components/Card";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
        Servicios
      </h1>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          En InCode, Tu Socio Digital
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Transformamos Ideas en Soluciones Digitales Innovadoras
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Somos una empresa de consultoría y desarrollo web que se dedica a
          ayudar a empresas de todos los tamaños a mejorar su presencia en
          línea. Desde el diseño de sitios web hasta el desarrollo de
          aplicaciones personalizadas, trabajamos de la mano con nuestros
          clientes para ofrecer soluciones únicas y eficaces.
        </p>
      </section>

      <section className="space-y-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Servicios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Espaciado entre cartas */}
          <Card
            description="Ofrecemos asesoramiento experto para optimizar tus procesos y sistemas mediante tecnología."
            features={[
              "Análisis de necesidades",
              "Planificación estratégica",
              "Optimización de procesos",
            ]}
            icon={
              <UserGroupIcon className="w-12 h-12 text-blue-500 dark:text-blue-400" />
            }
            leftAlign={true}
            title="Consultoría Técnica"
          />
          <Card
            description="Construimos aplicaciones web personalizadas que se adaptan a las necesidades de tu empresa."
            features={[
              "Diseño responsivo",
              "Desarrollo personalizado",
              "Optimización para SEO",
            ]}
            icon={
              <SparklesIcon className="w-12 h-12 text-yellow-500 dark:text-yellow-400" />
            }
            leftAlign={true}
            title="Desarrollo Web"
          />
          <Card
            description="Brindamos soporte continuo y mantenimiento para asegurar que tus soluciones sigan funcionando al máximo."
            features={[
              "Actualizaciones regulares",
              "Corrección de errores",
              "Optimización de rendimiento",
            ]}
            icon={
              <LightBulbIcon className="w-12 h-12 text-green-500 dark:text-green-400" />
            }
            leftAlign={true}
            title="Soporte y Mantenimiento"
          />
        </div>
      </section>

      {/* Card para Proyecto Personalizado */}
      <section className="space-y-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Proyecto Personalizado
        </h3>
        <div className="w-full">
          {/* Aseguramos que ocupe todo el ancho */}
          <Card
            description="Muchas veces una sola categoría no alcanza, quizás necesitás una tienda pero que además tenga integraciones externas, o una web institucional que tenga un catálogo de productos."
            features={[
              "Carga rápida",
              "Secciones a pedido",
              "Maquetado de diseño",
              "Integraciones con software o apis",
              "Trabajo en conjunto con equipo",
            ]}
            fullWidth={true}
            icon={
              <UserGroupIcon className="w-12 h-12 text-blue-500 dark:text-blue-400" />
            }
            leftAlign={false}
            title="Proyecto Personalizado"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Cómo Trabajamos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Paso 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-100 dark:bg-blue-600">
                <UserGroupIcon className="w-8 h-8 text-blue-600 dark:text-blue-100" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Descubrimiento
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comenzamos con una reunión para entender tus necesidades y
                objetivos. Esta fase es clave para ofrecerte una solución
                personalizada.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100 dark:bg-green-600">
                <SparklesIcon className="w-8 h-8 text-green-600 dark:text-green-100" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Diseño y Desarrollo
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creamos el diseño y desarrollamos la solución técnica basada en
                lo que discutimos en la fase de descubrimiento.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-purple-100 dark:bg-purple-600">
                <LightBulbIcon className="w-8 h-8 text-purple-600 dark:text-purple-100" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Lanzamiento
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Después de las pruebas, lanzamos el proyecto y proporcionamos
                soporte continuo para asegurar que todo funcione correctamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos Destacados */}
      <FeaturedProjects />

      <div className="flex flex-col items-center space-y-2 p-4">
        <span className="text-4xl font-semibold text-gray-800 animate-pulse">
          Creamos
        </span>
        <span className="text-4xl font-semibold text-blue-600 animate-pulse">
          Tus Ideas
        </span>
      </div>
      <FloatingWhatsAppButton />
    </div>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      icon: CodeBracketIcon,
      title: "Proyecto Uno",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec fermentum nibh. Nullam non diam ut lorem vulputate pharetra.",
      bgColor: "bg-blue-50 dark:bg-blue-900/50", // Fondo más sutil
      textColor: "text-blue-600 dark:text-blue-400", // Texto adaptado a ambos modos
      buttonColor:
        "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    },
    {
      icon: GlobeAltIcon,
      title: "Proyecto Dos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec fermentum nibh. Nullam non diam ut lorem vulputate pharetra.",
      bgColor: "bg-green-50 dark:bg-green-900/50", // Fondo más sutil
      textColor: "text-green-600 dark:text-green-400", // Texto adaptado
      buttonColor:
        "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
    },
    {
      icon: ChartBarIcon,
      title: "Proyecto Tres",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec fermentum nibh. Nullam non diam ut lorem vulputate pharetra.",
      bgColor: "bg-purple-50 dark:bg-purple-900/50", // Fondo sutil
      textColor: "text-purple-600 dark:text-purple-400", // Texto adaptado
      buttonColor:
        "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Proyectos Destacados
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12">
          Conoce algunos de nuestros proyectos más destacados y descubre cómo
          podemos ayudarte a alcanzar tus objetivos digitales.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-8 rounded-lg shadow-md transition-all duration-300 ${project.bgColor}`}
            >
              <div
                className={`flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-opacity-20 ${project.textColor}`}
              >
                <project.icon className={`w-8 h-8 ${project.textColor}`} />
              </div>
              <h3
                className={`text-2xl font-semibold mb-4 ${project.textColor}`}
              >
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              <button
                className={`px-6 py-3 text-white rounded-lg transition-all duration-200 ${project.buttonColor}`}
              >
                Ver más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
