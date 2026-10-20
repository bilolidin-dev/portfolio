import type { UiDictionary } from "@/i18n/types";

export const en = {
  locale: "en",
  meta: {
    title: "Bilolidin — Digital Product Developer",
    description:
      "I build and grow digital products for business: websites, web services and automation — from idea to launch.",
  },
  nav: {
    services: "Services", process: "Process", about: "About", contact: "Contact",
    home: "Home", openMenu: "Open menu", closeMenu: "Close menu",
    language: "Language", languageSwitch: "Change language",
  },
  buttons: { discuss: "Discuss a project", retry: "Try again", returnHome: "Home", close: "Close" },
  hero: {
    role: "Digital Product Developer",
    statement: "I build and grow digital products for business.",
    description: "Websites, web services and automation — from idea to launch. I help turn a business task into a working product.",
    credibility: "Building commercial and in-house digital products.",
  },
  services: {
    label: "What I do",
    title: "How I can help",
    items: [
      { title: "Websites", description: "A website that explains your business clearly and brings in clients." },
      { title: "Web services", description: "Client portals, online services and internal tools built around your processes." },
      { title: "Automation", description: "I remove routine work: requests, spreadsheets, notifications and reports run on their own." },
      { title: "New products", description: "I launch a first version fast, so you can test the idea with real people." },
      { title: "Product growth", description: "I join an existing product to improve it, extend it and move it forward." },
    ],
  },
  process: {
    label: "How I work",
    title: "Simple and transparent",
    steps: [
      { title: "Idea", description: "We understand the task and the goal." },
      { title: "Solution", description: "I define what really needs to be built." },
      { title: "Design", description: "I shape how people will use the product." },
      { title: "Development", description: "I build it and show progress along the way." },
      { title: "Launch", description: "I launch it and stay in touch." },
    ],
  },
  about: {
    label: "About",
    title: "I'm Bilolidin",
    lead: "I build digital products where development, design and business meet.",
    body: "First I figure out why the business needs the product — only then do I choose how to build it. I lead the work myself, from the first call to launch, with no middlemen.",
    location: "Kyrgyzstan · Locally and remotely worldwide",
    values: [
      { title: "Clear", description: "I explain things without jargon." },
      { title: "Honest", description: "Timelines and scope are agreed upfront." },
      { title: "Lasting", description: "I build products that are easy to grow." },
    ],
  },
  audience: {
    label: "Who I help",
    title: "Who I help",
    items: [
      { title: "Businesses", description: "Need a website, a service or automation to win more clients and spend less time on routine." },
      { title: "Founders", description: "Have an idea — I'll help turn it into a first working version and launch it." },
      { title: "Companies", description: "I'll strengthen your team and help grow an existing product." },
    ],
  },
  contact: {
    label: "Contact",
    title: "Have an idea or a task?",
    description: "Tell me what needs to be done — I'll reply with a way to solve it.",
    channels: "Or pick the channel you prefer",
  },
  footer: { tagline: "Digital products for business" },
  states: {
    loading: "Loading…", notFound: "Page not found",
    notFoundDescription: "This page may not exist or may have been moved.",
    errorTitle: "Something went wrong", errorDescription: "An unexpected error occurred. Please try reloading the page.",
  },
  aria: {
    themeLight: "Switch to dark theme", themeDark: "Switch to light theme",
    mainNav: "Main navigation", mobileNav: "Mobile navigation", portrait: "Portrait of Bilolidin",
  },
} satisfies UiDictionary;
