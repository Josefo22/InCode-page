module.exports = {
    output: 'standalone',
    trailingSlash: true,
    reactStrictMode: true,  // Asegúrate de que esté habilitado en producción para optimización.
    experimental: {
      incrementalStaticRegeneration: false, // Desactivar ISR si no lo necesitas
    },
  };

    