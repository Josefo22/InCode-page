// next.config.js

const nextConfig = {
  output: 'standalone', // Esto es correcto para exportaciones estáticas.
  trailingSlash: true, // Esto es útil si necesitas URL con barra final ("/").

  // Configuración adicional para mejorar el rendimiento de la generación estática.
  reactStrictMode: true, // Para asegurar que tu código sea más robusto en producción.

  eslint: {
    // Desactivar el linting en el build de producción
    ignoreDuringBuilds: true, // Si prefieres no bloquear la compilación debido a errores de ESLint.
  },

  // Habilitar la optimización de imágenes y la minimización de JS
  images: {
    domains: ['example.com'], // Asegúrate de añadir aquí los dominios de las imágenes que usas.
  },

  webpack(config: { module: { rules: { test: RegExp; use: string[] }[] } }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Aumentar la duración del tiempo de espera para la generación de páginas
  experimental: {
    concurrentFeatures: true, // Habilitar características concurrentes.
    incrementalStaticRegeneration: true, // Utiliza ISR en lugar de generación estática completa.
  },

  // Configuración de reescrituras de URLs, si es necesario
  async rewrites() {
    return [
      {
        source: '/old-url',
        destination: '/new-url',
      },
    ];
  },

  // Opcional: Puedes especificar más configuraciones si las necesitas para aumentar el rendimiento
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

module.exports = nextConfig;
