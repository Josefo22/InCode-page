export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-full bg-transparent py-8 md:py-10">
      {/* Sección de contenido principal */}
      <main className="space-y-12">{children}</main>
    </section>
  );
}
