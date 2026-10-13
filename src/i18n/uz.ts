import type { UiDictionary } from "@/i18n/types";

export const uz = {
  locale: "uz",
  nav: {
    projects: "Ishlar", collab: "Hamkorlik", about: "Men haqimda", stack: "Texnologiyalar", contact: "Aloqa",
    home: "Bosh sahifa", primary: "Asosiy navigatsiya", mobile: "Mobil navigatsiya",
    openMenu: "Menyuni ochish", closeMenu: "Menyuni yopish", language: "Til", languageSwitch: "Tilni o'zgartirish",
  },
  buttons: {
    contact: "Bog'lanish", telegram: "Telegramda yozish", write: "Yozish", work: "Ishlarni ko'rish",
    projects: "Loyihalarni ko'rish", details: "Batafsil", caseStudy: "Loyiha tafsilotlari",
    live: "Loyihani ochish", code: "Kod", back: "Orqaga", backToProjects: "Loyihalarga qaytish",
    retry: "Qayta urinish", returnHome: "Bosh sahifa", close: "Yopish",
  },
  home: {
    available: "Ish takliflariga ochiq", heroTitle: "Full-Stack Developer",
    heroDescription: "Veb-mahsulotlarni interfeysdan ma'lumotlar bazasigacha yarataman. Buyurtmalar bajaraman va jamoada ishlashga ochiqman.",
    heroTech: "React · Next.js · TypeScript · Firebase",
    featuredTitle: "Tanlangan loyihalar", featuredDescription: "Portfelimdan tanlangan loyihalar.", selectedWorkEmpty: "Tanlangan loyihalar hozircha mavjud emas.",
    otherTitle: "Boshqa loyihalar", otherDescription: "Shaxsiy loyihalar va tajribalar.",
    aboutTitle: "Qirg'izistondan Full-Stack Developer.",
    aboutIntro: "React va Next.js yordamida veb-mahsulotlar yarataman, backend tizimlari va ma'lumotlar bazalari bilan ishlayman. Bir martalik buyurtmalar bajaraman va jamoada ishlashga ochiqman. Loyihaga qarab TypeScript, Firebase, Supabase, PostgreSQL va boshqa texnologiyalardan foydalanaman. Bu portfolioda mustaqil ishlab chiqqan loyihalarim jamlangan.",
    aboutDetails: "",
    experienceTitle: "Tajriba", experienceDate: "2026 — hozirgacha", experienceRole: "Frontend dasturlash", experienceType: "Amaliyot",
    experienceDescription: "Haqiqiy loyihalarda frontend vazifalari — shaxsiy loyihalardan tashqaridagi ilk ish tajribam.",
    stackTitle: "Texnologiyalar to'plami", principlesTitle: "Ishlash uslubim",
    collabTitle: "Hamkorlik formatlari",
    contactTitle: "Vazifa, loyiha yoki vakansiya bormi?", contactDescription: "Telegram yoki email orqali yozing — nima qilish kerakligini aytib bering, men qanday yordam bera olishimni yozaman.",
    roleLabel: "Mustaqil dasturchi", architectureNodes: { frontend: "Frontend", api: "API", backend: "Backend", database: "Ma'lumotlar bazasi" },
  },
  pages: {
    aboutTitle: "Men haqimda", aboutDescription: "Qirg'izistondan Full-Stack Developer: React, Next.js, TypeScript, Firebase, Supabase va PostgreSQL.", stack: "Texnologiyalar",
    projectsTitle: "Barcha loyihalar", projectsDescription: "Ishlayotgan mahsulotlar, murakkab tizimlar va shaxsiy loyihalar.",
    contactTitle: "Vazifa, loyiha yoki vakansiya bormi?", contactDescription: "Telegram yoki email orqali yozing — nima qilish kerakligini aytib bering, men qanday yordam bera olishimni yozaman.",
  },
  project: { overview: "Umumiy ma'lumot", problem: "Vazifa", scope: "Rol va ko'lam", features: "Asosiy imkoniyatlar", architecture: "Arxitektura", decisions: "Texnik qarorlar", limitations: "Cheklovlar" },
  states: {
    loading: "Yuklanmoqda…", notFound: "Sahifa topilmadi", notFoundDescription: "Bu sahifa mavjud emas yoki boshqa joyga ko'chirilgan bo'lishi mumkin.",
    errorTitle: "Xatolik yuz berdi", errorDescription: "Kutilmagan xatolik yuz berdi. Muammoni hal qilish ustida ishlayapmiz.",
  },
  aria: {
    themeLight: "Qorong'i mavzuga o'tish", themeDark: "Yorug' mavzuga o'tish", mainNav: "Asosiy navigatsiya", mobileNav: "Mobil navigatsiya",
  },
  collab: [
    { title: "Buyurtma", description: "Bir martalik vazifa: saytni yaxshilash, xatoni tuzatish, interfeys yig'ish yoki integratsiya ulash." },
    { title: "Loyiha", description: "Veb-mahsulotni to'liq yig'aman — interfeysdan ma'lumotlar bazasigacha: landing, panel yoki ichki xizmat." },
    { title: "Jamoa yoki kompaniya", description: "Amaliyot, jamoada ishlash va shartnomaga ochiqman: mavjud mahsulot va jamoaning jarayoniga qo'shilaman." },
  ],
  principles: [
    { title: "Tizimli fikrlayman", description: "Interfeysdan API va backend orqali ma'lumotlar bazasigacha bo'lgan butun zanjirni tushunaman. Alohida qismlar emas, yaxlit arxitektura muhim." },
    { title: "Ishlab chiqarishga tayyorlayman", description: "Faqat qurilmamda ishlashini emas, xavfsizlik, tekshiruv, xatolarni boshqarish, unumdorlik, testlar va joylashtirishni ham hisobga olaman." },
    { title: "Muammolarni hal qilaman", description: "Murakkab xatolarni tekshirib, tayyor yechimlarni ko'chirish o'rniga ularning asl sababini topaman." },
    { title: "O'rganishda davom etaman", description: "Frontend, backend, ma'lumotlar bazalari va integratsiyalar bilan ishlash orqali full-stack tajribamni kengaytiraman: Next.js, Supabase, PostgreSQL, Python, Django va C#." },
  ],
  techGroups: ["Asosiy texnologiyalar", "Ishlayman", "Vositalar / infratuzilma"],
} satisfies UiDictionary;
