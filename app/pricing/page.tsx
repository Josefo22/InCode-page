import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { title } from "@/components/primitives";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function ProjectsPage() {
  return (
    <div className="space-y-16 px-4 sm:px-8 lg:px-16 min-h-screen bg-transparent">
      {/* Header Section */}
      <header className="text-center">
        <h1
          className={`${title()} text-4xl font-extrabold text-gray-800 dark:text-gray-100`}
        >
          Todos Nuestros Proyectos
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Nos enfocamos en cada detalle para asegurar que tu presencia en línea
          refleje la esencia de tu marca y ofrezca una experiencia de usuario
          inolvidable.
        </p>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Ya sea que necesites un sitio web corporativo, una tienda en línea
          robusta o una plataforma interactiva, estamos aquí para ayudarte a
          alcanzar tus objetivos con eficiencia y estilo.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
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

// Individual Project Card
function ProjectCard({
  name,
  category,
  location,
  link,
  imageUrl,
}: {
  name: string;
  category: string;
  location: string;
  link: string;
  imageUrl: string;
}) {
  return (
    <div className="p-6 bg-transparent rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="h-42 bg-transparent rounded-lg mb-4 overflow-hidden">
        <picture>
          <source srcSet={`${imageUrl}.webp`} type="image/webp" />
          <source srcSet={`${imageUrl}.png`} type="image/png" />
          <img
            alt={name}
            className="w-full h-full object-cover rounded-lg"
            src={`${imageUrl}.png`} // Fallback en caso de que no se cargue ninguno de los anteriores
          />
        </picture>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {name}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
        <strong>Categoría:</strong> {category}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        <strong>Ubicación:</strong> {location}
      </p>
      <a
        className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        Ver Sitio Web
        <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-1" />
      </a>
      <FloatingWhatsAppButton />
    </div>
  );
}

// Projects Data with imageUrl
const projects = [
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup8", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Tienda Online",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/smartmockups_m0oaalts", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/smartmockups_m0oaaxwa", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/smartmockups_m0oabj2a", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/smartmockups_m0oabue8-_1_", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/smartmockups_m0obi0k4-_1_", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup1", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup10", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup11", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup2", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup3", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup4", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Landing Page",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup5", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup6", // Sin extensión
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "./Mockups/WebMockup7", // Sin extensión
  },
];
