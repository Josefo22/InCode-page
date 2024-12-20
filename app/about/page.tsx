import {
  FaPhoneAlt,
  FaEnvelope,
  FaRegHandshake,
  FaClipboardList,
  FaLaptopCode,
} from "react-icons/fa"; // Íconos para contacto

import { title } from "@/components/primitives"; // Asegúrate de que 'title' esté correctamente importado
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      {/* Título principal */}
      <h1 className={`${title()} text-center text-4xl font-bold text-blue-600`}>
        CONTACTO
      </h1>

      {/* Sección Introducción */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center">
          <FaClipboardList
            className="inline-block text-blue-600 dark:text-blue-400"
            size={30}
          />
          Envíanos tu consulta
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          ¡Estamos a solo un mensaje o llamada de distancia! Esperamos con
          entusiasmo colaborar contigo y hacer que tu experiencia con nosotros
          sea excepcional.
        </p>
      </section>
      <FloatingWhatsAppButton />

      {/* Sección Experiencia Personalizada */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center">
          <FaLaptopCode
            className="inline-block text-yellow-600 dark:text-yellow-400"
            size={30}
          />
          Experiencia Personalizada y a la Medida
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          Nos aseguramos de entender tus necesidades específicas para ofrecerte
          una solución web completamente personalizada.
        </p>
      </section>

      {/* Sección Uso de las Últimas Tecnologías */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center">
          <FaLaptopCode
            className="inline-block text-green-600 dark:text-green-400"
            size={30}
          />
          Uso de las Últimas Tecnologías y Tendencias
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          Nos mantenemos al día con las últimas tendencias en diseño y
          tecnología web para asegurarnos de que tu sitio no solo sea atractivo
          y moderno, sino también funcional y seguro.
        </p>
      </section>

      {/* Sección Relación Calidad-Precio */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center">
          <FaRegHandshake
            className="inline-block text-teal-600 dark:text-teal-400"
            size={30}
          />
          Relación Calidad-Precio Inmejorable
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
          Creemos en ofrecer servicios de alta calidad a precios competitivos.
          Nuestra misión es proporcionarte una solución web que combine diseño,
          funcionalidad y accesibilidad económica, asegurando que obtengas el
          mejor valor por tu inversión.
        </p>
      </section>

      {/* Formulario de Contacto */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center">
          <FaClipboardList
            className="inline-block text-blue-600 dark:text-blue-400"
            size={30}
          />
          Contáctanos
        </h2>
        <form className="max-w-4xl mx-auto space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                htmlFor="name"
              >
                Nombre *
              </label>
              <input
                required
                className="mt-2 w-full px-4 py-2 border rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                id="name"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                required
                className="mt-2 w-full px-4 py-2 border rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                id="email"
                type="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                htmlFor="phone"
              >
                Teléfono *
              </label>
              <input
                required
                className="mt-2 w-full px-4 py-2 border rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                id="phone"
                type="tel"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium text-gray-700 dark:text-gray-300"
                htmlFor="service"
              >
                Tipo de Servicio *
              </label>
              <select
                required
                className="mt-2 w-full px-4 py-2 border rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                id="service"
              >
                <option value="sitio-institucional">Sitio Institucional</option>
                <option value="tienda-online">Tienda Online</option>
                <option value="consultoria">Consultoría</option>
                <option value="otros">Otros</option>
              </select>
            </div>
          </div>
          <div>
            <label
              className="block text-lg font-medium text-gray-700 dark:text-gray-300"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              required
              className="mt-2 w-full px-4 py-2 border rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
              id="message"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="mt-4 px-8 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
              type="submit"
            >
              Enviar Consulta
            </button>
          </div>
        </form>
      </section>

      {/* Información de Contacto */}
      <section className="space-y-6 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          O también contáctanos directamente
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3">
            <FaPhoneAlt
              className="text-blue-600 dark:text-blue-400"
              size={28}
            />
            <span className="text-lg text-gray-700 dark:text-gray-300">
              +57 3022891396
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope
              className="text-blue-600 dark:text-blue-400"
              size={28}
            />
            <span className="text-lg text-gray-700 dark:text-gray-300">
              incoder222@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <FaRegHandshake
              className="text-blue-600 dark:text-blue-400"
              size={28}
            />
            <span className="text-lg text-gray-700 dark:text-gray-300">
              ¡Hablemos!
            </span>
          </div>
        </div>
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
