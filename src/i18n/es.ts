import type { UiDictionary } from "@/i18n/types";

export const es = {
  locale: "es",
  meta: {
    title: "Bilolidin — Digital Product Developer",
    description:
      "Creo y hago crecer productos digitales para empresas: sitios web, servicios web y automatización — de la idea al lanzamiento.",
  },
  nav: {
    services: "Servicios", process: "Proceso", about: "Sobre mí", contact: "Contacto",
    home: "Inicio", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
    language: "Idioma", languageSwitch: "Cambiar idioma",
  },
  buttons: { discuss: "Hablemos de tu proyecto", retry: "Intentar de nuevo", returnHome: "Inicio", close: "Cerrar" },
  hero: {
    role: "Digital Product Developer",
    statement: "Creo y hago crecer productos digitales para empresas.",
    description: "Sitios web, servicios web y automatización — de la idea al lanzamiento. Te ayudo a convertir una tarea en un producto que funciona.",
    credibility: "Desarrollo productos digitales comerciales y propios.",
  },
  services: {
    label: "Qué hago",
    title: "Cómo puedo ayudarte",
    items: [
      { title: "Sitios web", description: "Un sitio que explica tu negocio con claridad y atrae clientes." },
      { title: "Servicios web", description: "Áreas de clientes, servicios en línea y sistemas internos adaptados a tus procesos." },
      { title: "Automatización", description: "Elimino el trabajo repetitivo: solicitudes, hojas de cálculo, notificaciones e informes funcionan solos." },
      { title: "Nuevos productos", description: "Lanzo una primera versión rápido para validar la idea con personas reales." },
      { title: "Evolución del producto", description: "Me sumo a un producto existente para mejorarlo, ampliarlo y hacerlo crecer." },
    ],
  },
  process: {
    label: "Cómo trabajo",
    title: "Simple y transparente",
    steps: [
      { title: "Idea", description: "Entendemos la tarea y el objetivo." },
      { title: "Solución", description: "Defino qué hay que construir realmente." },
      { title: "Diseño", description: "Pienso cómo las personas usarán el producto." },
      { title: "Desarrollo", description: "Lo construyo y te muestro el avance." },
      { title: "Lanzamiento", description: "Lo lanzo y sigo en contacto." },
    ],
  },
  about: {
    label: "Sobre mí",
    title: "Soy Bilolidin",
    lead: "Creo productos digitales donde se unen el desarrollo, el diseño y el negocio.",
    body: "Primero entiendo para qué necesita el negocio el producto, y solo después elijo cómo construirlo. Llevo el trabajo yo mismo, desde la primera reunión hasta el lanzamiento, sin intermediarios.",
    location: "Kirguistán · En persona y en remoto para todo el mundo",
    values: [
      { title: "Claro", description: "Explico sin tecnicismos." },
      { title: "Honesto", description: "Plazos y alcance se acuerdan desde el inicio." },
      { title: "Duradero", description: "Construyo productos fáciles de hacer crecer." },
    ],
  },
  audience: {
    label: "A quién ayudo",
    title: "A quién ayudo",
    items: [
      { title: "Empresas", description: "Necesitas un sitio, un servicio o automatización para ganar más clientes y perder menos tiempo." },
      { title: "Fundadores", description: "¿Tienes una idea? Te ayudo a convertirla en una primera versión funcional y lanzarla." },
      { title: "Compañías", description: "Refuerzo tu equipo y ayudo a hacer crecer un producto existente." },
    ],
  },
  contact: {
    label: "Contacto",
    title: "¿Tienes una idea o una tarea?",
    description: "Cuéntame qué hay que hacer y te propondré cómo resolverlo.",
    channels: "O elige el canal que prefieras",
  },
  footer: { tagline: "Productos digitales para empresas" },
  langPrompt: { message: "Este sitio también está en español.", accept: "Ver en español", dismiss: "Cerrar" },
  states: {
    loading: "Cargando…", notFound: "Página no encontrada",
    notFoundDescription: "Es posible que esta página no exista o se haya movido.",
    errorTitle: "Algo salió mal", errorDescription: "Ocurrió un error inesperado. Intenta recargar la página.",
  },
  aria: {
    themeLight: "Cambiar a tema oscuro", themeDark: "Cambiar a tema claro",
    mainNav: "Navegación principal", mobileNav: "Navegación móvil", portrait: "Retrato de Bilolidin",
  },
} satisfies UiDictionary;
