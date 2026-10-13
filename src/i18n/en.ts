import type { UiDictionary } from "@/i18n/types";

export const en = {
  locale: "en",
  nav: { projects: "Work", collab: "Ways to work", about: "About", stack: "Stack", contact: "Contact", home: "Home", primary: "Main navigation", mobile: "Mobile navigation", openMenu: "Open menu", closeMenu: "Close menu", language: "Language", languageSwitch: "Change language" },
  buttons: { contact: "Contact", telegram: "Message on Telegram", write: "Message", work: "View work", projects: "View projects", details: "Details", caseStudy: "Case study", live: "Live", code: "Code", back: "Back", backToProjects: "Back to projects", retry: "Try again", returnHome: "Home", close: "Close" },
  home: {
    available: "Open to work", heroTitle: "Full-Stack Developer",
    heroDescription: "I build web products from interface to database. I take on freelance work and I'm open to working in a team.",
    heroTech: "React · Next.js · TypeScript · Firebase", featuredTitle: "Selected projects", featuredDescription: "Projects from my curated portfolio.", selectedWorkEmpty: "Selected projects are currently unavailable.", otherTitle: "Other projects", otherDescription: "Side projects and experiments.", aboutTitle: "Full-Stack Developer from Kyrgyzstan.",
    aboutIntro: "I develop web products with React and Next.js, and work with backend systems and databases. I take on one-off tasks and work in teams. I use TypeScript, Firebase, Supabase, PostgreSQL, and other technologies depending on the project. This portfolio brings together projects I developed independently.",
    aboutDetails: "",
    experienceTitle: "Experience", experienceDate: "2026 — present", experienceRole: "Frontend development", experienceType: "Internship", experienceDescription: "Frontend tasks in real projects — my first work experience outside personal projects.", stackTitle: "Tech stack", principlesTitle: "How I work", collabTitle: "Ways to work together", contactTitle: "A task, a project, or a role?", contactDescription: "Message me on Telegram or email — tell me what needs to be done, and I'll reply about how I can help.", roleLabel: "Solo Developer", architectureNodes: { frontend: "Frontend", api: "API", backend: "Backend", database: "Database" },
  },
  pages: { aboutTitle: "About me", aboutDescription: "Full-Stack Developer from Kyrgyzstan: React, Next.js, TypeScript, Firebase, Supabase, and PostgreSQL.", stack: "Stack", projectsTitle: "All projects", projectsDescription: "Production products, complex systems, and side projects.", contactTitle: "A task, a project, or a role?", contactDescription: "Message me on Telegram or email — tell me what needs to be done, and I'll reply about how I can help.", },
  project: { overview: "Overview", problem: "Problem", scope: "Role and scope", features: "Key features", architecture: "Architecture", decisions: "Technical decisions", limitations: "Limitations" },
  states: { loading: "Loading…", notFound: "Page not found", notFoundDescription: "This page may not exist or may have been moved.", errorTitle: "Something went wrong", errorDescription: "An unexpected error occurred. We are already working on it." },
  aria: { themeLight: "Switch to dark theme", themeDark: "Switch to light theme", mainNav: "Main navigation", mobileNav: "Mobile navigation" },
  collab: [
    { title: "One-off task", description: "A single job: improve a site, fix a bug, build an interface, or connect an integration." },
    { title: "Project", description: "I can build a web product end to end — from interface to database: a landing page, a dashboard, or an internal tool." },
    { title: "Team or company", description: "Open to an internship, team work, and contracts: I join an existing product and the team's process." },
  ],
  principles: [
    { title: "Think in systems", description: "I understand the whole chain: from interface through API and backend to the database. Not isolated pieces, but a complete architecture." },
    { title: "Build for production", description: "I consider security, validation, error handling, performance, testing, and deployment — not only whether it works on my machine." },
    { title: "Solve problems", description: "I can investigate complex bugs and understand their cause instead of simply copying solutions from Stack Overflow." },
    { title: "Keep learning", description: "I keep expanding my full-stack practice: working with frontend, backend parts of projects, databases, and integrations — Next.js, Supabase, PostgreSQL, Python, Django, and C#." },
  ],
  techGroups: ["Core stack", "Work with", "Tools / infrastructure"],
} satisfies UiDictionary;
