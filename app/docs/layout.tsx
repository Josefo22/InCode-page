export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full bg-transparent py-8 md:py-10">
      {/* Contenedor principal con margen automático para centrar el contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección de contenido principal */}
        <main className="space-y-12">{children}</main>
      </div>
    </section>
  );
}
