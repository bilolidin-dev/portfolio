type Item = { title: string; description: string };

export interface UiDictionary {
  locale: "ru" | "en" | "uz";
  meta: { title: string; description: string };
  nav: {
    services: string;
    process: string;
    about: string;
    contact: string;
    home: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    languageSwitch: string;
  };
  buttons: {
    discuss: string;
    retry: string;
    returnHome: string;
    close: string;
  };
  hero: {
    role: string;
    statement: string;
    description: string;
    credibility: string;
  };
  services: { label: string; title: string; items: Item[] };
  process: { label: string; title: string; steps: Item[] };
  about: {
    label: string;
    title: string;
    lead: string;
    body: string;
    location: string;
    values: Item[];
  };
  audience: { label: string; title: string; items: Item[] };
  contact: { label: string; title: string; description: string; channels: string };
  footer: { tagline: string };
  states: {
    loading: string;
    notFound: string;
    notFoundDescription: string;
    errorTitle: string;
    errorDescription: string;
  };
  aria: {
    themeLight: string;
    themeDark: string;
    mainNav: string;
    mobileNav: string;
    portrait: string;
  };
}
