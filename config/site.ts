export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'InCode',
  description:
    'InCode es una empresa de desarrollo web y consultoría, especializada en crear sitios web hermosos y funcionales, sin importar la experiencia en diseño.',
  ceo: 'Juan José Agudelo Vélez',
  keywords: [
    'desarrollo web',
    'consultoría web',
    'sitios web hermosos',
    'diseño web',
    'creación de sitios web',
    'desarrollo a medida',
    'tecnología web',
    'consultoría tecnológica',
  ],
  author: 'InCode - Juan José Agudelo Vélez',
  language: 'es', // Cambiar a 'en' si la página está en inglés
  openGraph: {
    title: 'InCode - Desarrollo Web y Consultoría',
    description:
      'InCode ofrece servicios de desarrollo web y consultoría para crear soluciones personalizadas que se adaptan a tus necesidades. Con InCode, tu presencia en línea será única.',
    url: 'https://in-code-page.vercel.app/', // Asegúrate de cambiarlo con la URL real de tu página
    site_name: 'InCode',
    images: [
      'publicLogo Incode.jpg', // Cambia esto con una imagen representativa
    ],
    locale: 'es_ES', // Ajustar según la región/lenguaje
    type: 'website',
  },
  twitterCard: {
    card: 'summary_large_image',
    site: '@InCode', // Asegúrate de incluir tu nombre de usuario en Twitter
    title: 'InCode - Desarrollo Web y Consultoría',
    description:
      'Ofrecemos soluciones web a medida que mejoran la presencia digital de nuestros clientes.',
    image: 'publicLogo Incode.jpg', // Cambia esto con una imagen representativa
  },
  navItems: [
    {
      label: 'Inicio',
      href: '/',
    },
    {
      label: 'Servicios',
      href: '/docs',
    },
    {
      label: 'Portfolio',
      href: '/pricing',
    },
    {
      label: 'Sobre nosotros',
      href: '/blog',
    },
    {
      label: 'Contacto',
      href: '/about',
    },
  ],
  navMenuItems: [
    {
      label: '',
      href: '/profile',
    },
    {
      label: '',
      href: '/dashboard',
    },
    {
      label: '',
      href: '/projects',
    },
    {
      label: '',
      href: '/team',
    },
    {
      label: '',
      href: '/calendar',
    },
    {
      label: '',
      href: '/settings',
    },
    {
      label: '',
      href: '/help-feedback',
    },
    {
      label: '',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/Josefo22',
    instagram: 'https://www.instagram.com/incode22/', // Cambia por el Instagram real
    tiktok:
      'https://www.tiktok.com/@incode22?is_from_webapp=1&sender_device=pc', // Cambia por el TikTok real
    facebook:
      'https://www.facebook.com/profile.php?id=61563949780820&rdid=yRGz0d8SNNXPuGm0', // Cambia por el Facebook real
    docs: 'https://wa.me/573022891396',
    discord: '',
    sponsor: '',
  },
};
