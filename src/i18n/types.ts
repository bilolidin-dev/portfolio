export interface UiDictionary {
  locale: "ru" | "en" | "uz";
  nav: {
    projects: string;
    collab: string;
    about: string;
    stack: string;
    contact: string;
    home: string;
    primary: string;
    mobile: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    languageSwitch: string;
  };
  buttons: {
    contact: string;
    telegram: string;
    write: string;
    work: string;
    projects: string;
    details: string;
    caseStudy: string;
    live: string;
    code: string;
    back: string;
    backToProjects: string;
    retry: string;
    returnHome: string;
    close: string;
  };
  home: {
    available: string;
    heroTitle: string;
    heroDescription: string;
    heroTech: string;
    featuredTitle: string;
    featuredDescription: string;
    selectedWorkEmpty: string;
    otherTitle: string;
    otherDescription: string;
    aboutTitle: string;
    aboutIntro: string;
    aboutDetails: string;
    experienceTitle: string;
    experienceDate: string;
    experienceRole: string;
    experienceType: string;
    experienceDescription: string;
    stackTitle: string;
    principlesTitle: string;
    collabTitle: string;
    contactTitle: string;
    contactDescription: string;
    roleLabel: string;
    architectureNodes: { frontend: string; api: string; backend: string; database: string };
  };
  pages: {
    aboutTitle: string;
    aboutDescription: string;
    stack: string;
    projectsTitle: string;
    projectsDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  project: {
    overview: string;
    problem: string;
    scope: string;
    features: string;
    architecture: string;
    decisions: string;
    limitations: string;
  };
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
  };
  collab: Array<{ title: string; description: string }>;
  principles: Array<{ title: string; description: string }>;
  techGroups: string[];
}
