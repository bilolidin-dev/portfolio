import type { UiDictionary } from "@/i18n/types";

export const ru = {
  locale: "ru",
  nav: {
    projects: "Работы", collab: "Форматы", about: "Обо мне", stack: "Стек", contact: "Контакт",
    home: "На главную", primary: "Основная навигация", mobile: "Мобильная навигация",
    openMenu: "Открыть меню", closeMenu: "Закрыть меню", language: "Язык", languageSwitch: "Сменить язык",
  },
  buttons: {
    contact: "Связаться", telegram: "Написать в Telegram", write: "Написать", work: "Смотреть работы",
    projects: "Смотреть проекты", details: "Подробнее", caseStudy: "Кейс",
    live: "Открыть проект", code: "Код", back: "Назад", backToProjects: "Назад к проектам",
    retry: "Попробовать снова", returnHome: "На главную", close: "Закрыть",
  },
  home: {
    available: "Открыт к работе", heroTitle: "Full-Stack Developer",
    heroDescription: "Делаю веб-продукты от интерфейса до базы данных. Беру заказы и открыт к работе в команде.",
    heroTech: "React · Next.js · TypeScript · Firebase",
    featuredTitle: "Избранные проекты", featuredDescription: "Проекты из моего портфолио.", selectedWorkEmpty: "Избранные проекты пока недоступны.",
    otherTitle: "Другие проекты", otherDescription: "Пет-проекты и эксперименты.",
    aboutTitle: "Full-Stack Developer из Кыргызстана.",
    aboutIntro: "Разрабатываю веб-продукты на React и Next.js, работаю с backend и базами данных. Беру разовые задачи и открыт к работе в команде. Использую TypeScript, Firebase, Supabase, PostgreSQL и другие технологии в зависимости от проекта. Здесь собраны проекты, которые я разрабатывал самостоятельно.",
    aboutDetails: "",
    experienceTitle: "Опыт", experienceDate: "2026 — настоящее время", experienceRole: "Frontend-разработка", experienceType: "Стажировка",
    experienceDescription: "Фронтенд-задачи в реальных проектах — первый опыт работы вне личных проектов.",
    stackTitle: "Стек технологий", principlesTitle: "Как я работаю",
    collabTitle: "Форматы сотрудничества",
    contactTitle: "Есть задача, проект или вакансия?", contactDescription: "Напишите в Telegram или на почту — расскажите, что нужно сделать, и я отвечу, чем могу помочь.",
    roleLabel: "Разработчик", architectureNodes: { frontend: "Интерфейс", api: "API", backend: "Бэкенд", database: "База данных" },
  },
  pages: {
    aboutTitle: "Обо мне", aboutDescription: "Full-Stack Developer из Кыргызстана: React, Next.js, TypeScript, Firebase, Supabase и PostgreSQL.", stack: "Стек",
    projectsTitle: "Все проекты", projectsDescription: "Рабочие продукты, сложные системы и пет-проекты.",
    contactTitle: "Есть задача, проект или вакансия?", contactDescription: "Напишите в Telegram или на почту — расскажите, что нужно сделать, и я отвечу, чем могу помочь.",
  },
  project: { overview: "Обзор", problem: "Задача", scope: "Роль и scope", features: "Ключевые функции", architecture: "Архитектура", decisions: "Технические решения", limitations: "Ограничения" },
  states: { loading: "Загрузка…", notFound: "Страница не найдена", notFoundDescription: "Похоже, этой страницы не существует или она была перемещена.", errorTitle: "Что-то пошло не так", errorDescription: "Произошла непредвиденная ошибка. Мы уже работаем над этим." },
  aria: { themeLight: "Переключить на тёмную тему", themeDark: "Переключить на светлую тему", mainNav: "Основная навигация", mobileNav: "Мобильная навигация" },
  collab: [
    { title: "Заказ", description: "Разовая задача: доработать сайт, починить баг, собрать интерфейс или подключить интеграцию." },
    { title: "Проект", description: "Соберу веб-продукт целиком — от интерфейса до базы данных: лендинг, панель или внутренний сервис." },
    { title: "Команда или компания", description: "Открыт к стажировке, работе в команде и контракту: включусь в существующий продукт и общий процесс." },
  ],
  principles: [
    { title: "Мыслю системно", description: "Понимаю всю цепочку: от интерфейса через API и бэкенд до базы данных. Не изолированные куски, а цельная архитектура." },
    { title: "Строю для продакшена", description: "Учитываю безопасность, валидацию, обработку ошибок, производительность, тестирование и деплой — не только «чтобы работало на моей машине»." },
    { title: "Решаю задачи", description: "Умею находить и разбираться в сложных багах, понимать причину, а не просто копировать решения со Stack Overflow." },
    { title: "Продолжаю учиться", description: "Расширяю full-stack практику: работаю с фронтендом, backend-частями проектов, базами данных и интеграциями — Next.js, Supabase, PostgreSQL, Python, Django и C#." },
  ],
  techGroups: ["Основной стек", "Работаю с", "Инструменты / инфраструктура"],
} satisfies UiDictionary;
