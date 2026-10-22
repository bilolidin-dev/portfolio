import type { UiDictionary } from "@/i18n/types";

export const uz = {
  locale: "uz",
  meta: {
    title: "Bilolidin — Qirg'izistonda saytlar, veb-servislar va avtomatlashtirish",
    description:
      "Biznes uchun saytlar, veb-servislar va avtomatlashtirish yarataman — g'oyadan ishga tushirishgacha. O'sh, Qirg'iziston; butun dunyo bilan masofadan ishlayman.",
  },
  nav: {
    services: "Xizmatlar", process: "Jarayon", about: "Men haqimda", contact: "Aloqa",
    home: "Bosh sahifa", openMenu: "Menyuni ochish", closeMenu: "Menyuni yopish",
    language: "Til", languageSwitch: "Tilni o'zgartirish",
  },
  buttons: { discuss: "Loyihani muhokama qilish", retry: "Qayta urinish", returnHome: "Bosh sahifa", close: "Yopish" },
  hero: {
    role: "Digital Product Developer",
    statement: "Biznes uchun raqamli mahsulotlar yarataman va rivojlantiraman.",
    description: "Saytlar, veb-servislar va avtomatlashtirish — g'oyadan ishga tushirishgacha. Vazifangizni ishlaydigan mahsulotga aylantirishga yordam beraman.",
    credibility: "Tijoriy va o'z raqamli mahsulotlarimni ishlab chiqaman.",
  },
  services: {
    label: "Nima qilaman",
    title: "Qanday yordam bera olaman",
    items: [
      { title: "Saytlar", description: "Biznesingizni tushunarli tushuntiradigan va mijoz olib keladigan sayt." },
      { title: "Veb-servislar", description: "Shaxsiy kabinetlar, onlayn servislar va jarayonlaringizga mos ichki tizimlar." },
      { title: "Avtomatlashtirish", description: "Takroriy ishlarni olib tashlayman: arizalar, jadvallar, bildirishnomalar va hisobotlar o'zi ishlaydi." },
      { title: "Yangi mahsulotlar", description: "G'oyani real odamlarda sinash uchun birinchi versiyani tez ishga tushiraman." },
      { title: "Mahsulotni rivojlantirish", description: "Mavjud mahsulotga qo'shilaman: yaxshilayman, to'ldiraman, rivojlantiraman." },
    ],
  },
  process: {
    label: "Qanday ishlayman",
    title: "Oddiy va shaffof",
    steps: [
      { title: "G'oya", description: "Vazifa va maqsadni aniqlaymiz." },
      { title: "Yechim", description: "Aslida nima qilish kerakligini belgilayman." },
      { title: "Dizayn", description: "Mahsulotdan qanday foydalanishlarini o'ylab chiqaman." },
      { title: "Ishlab chiqish", description: "Mahsulotni yarataman va jarayonni ko'rsatib boraman." },
      { title: "Ishga tushirish", description: "Ishga tushiraman va aloqada qolaman." },
    ],
  },
  about: {
    label: "Men haqimda",
    title: "Men Bilolidin",
    lead: "Dasturlash, dizayn va biznes kesishmasida raqamli mahsulotlar yarataman.",
    body: "Avval mahsulot biznesga nima uchun kerakligini tushunaman — shundan keyingina uni qanday qilishni tanlayman. Ishni o'zim olib boraman: birinchi uchrashuvdan ishga tushirishgacha, vositachilarsiz.",
    location: "Qirg'iziston · Mahalliy va butun dunyo bo'ylab masofadan",
    values: [
      { title: "Tushunarli", description: "Atamalarsiz tushuntiraman." },
      { title: "Halol", description: "Muddat va hajmni oldindan kelishamiz." },
      { title: "Uzoq muddatli", description: "Mahsulotni rivojlantirish oson bo'lishini ta'minlayman." },
    ],
  },
  audience: {
    label: "Kimga yordam beraman",
    title: "Kimga yordam beraman",
    items: [
      { title: "Biznesga", description: "Ko'proq mijoz olish va kamroq vaqt sarflash uchun sayt, servis yoki avtomatlashtirish kerak bo'lsa." },
      { title: "Asoschilarga", description: "G'oya bormi — uni birinchi ishlaydigan versiyaga aylantirib, ishga tushirishga yordam beraman." },
      { title: "Kompaniyalarga", description: "Jamoangizni kuchaytiraman va mavjud mahsulotni rivojlantirishga yordam beraman." },
    ],
  },
  faq: {
    label: "Savollar",
    title: "Ko'p beriladigan savollar",
    items: [
      {
        question: "Biznesim uchun nima qila olasiz?",
        answer:
          "Saytlar, veb-servislar — shaxsiy kabinetlar va ichki tizimlar — va takroriy ishlarni avtomatlashtirish. Mahsulotning birinchi versiyasidan mavjudini rivojlantirishgacha.",
      },
      {
        question: "Sayt yoki veb-servis qancha turadi?",
        answer:
          "Narx hajm va funksiyalarga bog'liq. Qisqa suhbatdan keyin aniq ishlar ro'yxati bilan qat'iy smeta yuboraman — soatbay kutilmagan to'lovlarsiz.",
      },
      {
        question: "Loyiha qancha vaqt oladi?",
        answer:
          "Landing odatda bir-ikki hafta, veb-servis yoki avtomatlashtirish — to'rt haftadan boshlab. Har hafta natijani ko'rasiz.",
      },
      {
        question: "Masofadan ishlaysizmi?",
        answer:
          "Ha. Men O'sh, Qirg'izistondaman va mijozlar bilan mahalliy hamda butun dunyo bo'ylab masofadan ishlayman. O'zbek, rus, qirg'iz va ingliz tillarida gaplashaman.",
      },
      {
        question: "Qanday texnologiyalardan foydalanasiz?",
        answer:
          "Frontend — Next.js, React va TypeScript. Backend — PostgreSQL, Supabase yoki Firebase bilan Node.js. Interfeys — Tailwind CSS.",
      },
      {
        question: "Ishni qanday boshlaymiz?",
        answer:
          "Telegram yoki email orqali yozib, vazifani tushuntiring. Qisqa suhbat o'tkazamiz, keyin hajm, muddat va narx bilan taklif yuboraman.",
      },
    ],
  },
  contact: {
    label: "Aloqa",
    title: "G'oya yoki vazifa bormi?",
    description: "Nima qilish kerakligini yozing — javob beraman va qanday hal qilish mumkinligini taklif qilaman.",
    channels: "Yoki qulay usulni tanlang",
  },
  footer: { tagline: "Biznes uchun raqamli mahsulotlar" },
  langPrompt: { message: "Bu sayt o'zbek tilida ham mavjud.", accept: "O'zbekchada ochish", dismiss: "Yopish" },
  states: {
    loading: "Yuklanmoqda…", notFound: "Sahifa topilmadi",
    notFoundDescription: "Bu sahifa mavjud emas yoki boshqa joyga ko'chirilgan.",
    errorTitle: "Nimadir noto'g'ri ketdi", errorDescription: "Kutilmagan xatolik yuz berdi. Sahifani yangilab ko'ring.",
  },
  aria: {
    themeLight: "Qorong'i mavzuga o'tish", themeDark: "Yorug' mavzuga o'tish",
    mainNav: "Asosiy navigatsiya", mobileNav: "Mobil navigatsiya", portrait: "Bilolidin portreti",
  },
} satisfies UiDictionary;
