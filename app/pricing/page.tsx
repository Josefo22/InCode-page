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
}: {
  name: string;
  category: string;
  location: string;
  link: string;
  imageUrl: string;
}) {
  return (
    <div className="p-6 bg-transparent rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="h-64 bg-transparent rounded-lg mb-4 overflow-hidden" />
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
    imageUrl: "https://via.placeholder.com/400x300.png?text=Yerba+Mate+Oñoiru",
  },
  {
    name: "Lorem",
    category: "Tienda Online",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Tiny+Colors+Corp",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl:
      "https://via.placeholder.com/400x300.png?text=ProClean+Support+Services",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl:
      "https://via.placeholder.com/400x300.png?text=Biomedia+Marketing+Medico",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl:
      "https://via.placeholder.com/400x300.png?text=Diseñadora+Ana+Villamañan",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Gastronomate",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl:
      "https://via.placeholder.com/400x300.png?text=STX+Dispatch+Center",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Estudio+Jurídico",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Carlos+Lapuerta",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Montique+Cleaning",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Gerbos+Art",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl:
      "https://via.placeholder.com/400x300.png?text=DigitalTree+Marketing",
  },
  {
    name: "Lorem",
    category: "Landing Page",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Best+Space+Agency",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl: "https://via.placeholder.com/400x300.png?text=DagChile",
  },
  {
    name: "Lorem",
    category: "Sitio Corporativo",
    location: "Medellín, Antioquia",
    link: "#",
    imageUrl:
      "https://via.placeholder.com/400x300.png?text=Knickerbocker+Bagel",
  },
];
