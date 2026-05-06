// ─── UI TRANSLATIONS ────────────────────────────────────────
// Keys cover every piece of static UI text.
// Dog names, ages, weights and descriptions live in data.js.

const TRANSLATIONS = {

  en: {
    // Intro screen
    introBadge:       "Found with Love",
    introTitle:       ["A Story of", "Eight Hearts"],
    story1: "On a rainy October evening, a local family heard faint whimpering from the old factory yard on Maple Street. Hidden behind a rusted barrel — shivering, exhausted, and thin — was a young dog, clearly just days post-partum.",
    story2: "With flashlights in hand, they searched further and found seven tiny puppies huddled together in a makeshift nest of cardboard and dry leaves. Mama had been surviving alone, nursing her babies in the cold.",
    story3: "The whole family — mom and all seven pups — was brought home that very night. Warm baths, proper food, and a cozy blanket turned frightened strangers into the most affectionate little pack imaginable.",
    story4: "Now, after weeks of care, vaccinations, and a whole lot of love, they're ready to find their forever families. Each one is unique, healthy, and full of personality.",
    ctaBtn:           "Meet the family",

    // Dogs list screen
    packTitle:        "The Pack",
    packSub:          "8 dogs looking for love",

    // Status labels
    statusBooked:     "Booked 🔒",
    statusAvailable:  "Available 💛",
    momLabel:         "👑 Mom",

    // Profile screen
    sectionAbout:     "About",
    sectionPhotos:    "Photos",

    // Profile status blocks
    bookedTitle:      (name) => `${name} is already booked`,
    bookedDesc:       (name) => `Someone is eagerly waiting to bring ${name} home. We hope it's the beginning of a beautiful story!`,
    freeTitle:        (name) => `${name} is looking for a home!`,
    freeDesc:         (name) => `If your heart is open and your home is ready, reach out to us and we'll tell you everything about the adoption process.`,
  },

  ru: {
    // Вводный экран
    introBadge:       "Найдены с любовью",
    introTitle:       ["История", "Восьми Сердец"],
    story1: "Дождливым октябрьским вечером местная семья услышала тихий скулёж со стороны старого заводского двора на Кленовой улице. За ржавой бочкой, дрожащая, истощённая и тощая, пряталась молодая собака — судя по всему, только-только родившая.",
    story2: "С фонариками в руках они обыскали двор и нашли семерых крошечных щенков, прижавшихся друг к другу в гнёздышке из картона и сухих листьев. Мама выживала в одиночку, кормя малышей в холоде.",
    story3: "Всю семью — маму и всех семерых щенков — той же ночью забрали домой. Тёплые ванны, нормальная еда и уютный плед превратили напуганных чужаков в самую нежную маленькую стаю, какую только можно представить.",
    story4: "Теперь, после недель заботы, прививок и огромного количества любви, они готовы найти свои вечные семьи. Каждый уникален, здоров и полон характера.",
    ctaBtn:           "Познакомиться со стаей",

    // Список собак
    packTitle:        "Наша стая",
    packSub:          "8 собак ищут любящий дом",

    // Статусы
    statusBooked:     "Забронирован 🔒",
    statusAvailable:  "Свободен 💛",
    momLabel:         "👑 Мама",

    // Профиль
    sectionAbout:     "О собаке",
    sectionPhotos:    "Фотографии",

    // Блоки статуса
    bookedTitle:      (name) => `${name} уже забронирован`,
    bookedDesc:       (name) => `Кто-то с нетерпением ждёт, когда сможет забрать ${name} домой. Надеемся, это начало прекрасной истории!`,
    freeTitle:        (name) => `${name} ищет дом!`,
    freeDesc:         (name) => `Если ваше сердце открыто и дом готов, свяжитесь с нами — мы расскажем всё об усыновлении.`,
  },

  sr: {
    // Uvodne informacije
    introBadge:       "Pronađeni s ljubavlju",
    introTitle:       ["Priča o", "Osam Srca"],
    story1: "Jedne kišne oktobarske večeri, lokalna porodica je čula tiho cviljenje iz starog fabričkog dvorišta u Javorovoj ulici. Iza zahrđale bačve — drhteći, iscrpljeni i mršavi — krio se mladi pas, koji je očigledno tek nedavno okotio štence.",
    story2: "Sa lampama u rukama, pretražili su dvorište i pronašli sedam sitnih štenaca zbijenih zajedno u improvizovanom gnezdu od kartona i suvog lišća. Mama je preživljavala sama, dojeći malene na hladnoći.",
    story3: "Cela porodica — mama i svih sedam štenaca — te iste noći je dovedena kući. Topla kupanja, prava hrana i udobno ćebe pretvorili su prestrašene strante u najnežniji mali čopor koji možete zamisliti.",
    story4: "Sada, nakon nedelja nege, vakcinacija i bezbroj ljubavi, spremni su da pronađu svoje zauvek porodice. Svaki je jedinstven, zdrav i pun karaktera.",
    ctaBtn:           "Upoznajte čopor",

    // Lista pasa
    packTitle:        "Naš čopor",
    packSub:          "8 pasa traži ljubav",

    // Statusi
    statusBooked:     "Rezervisan 🔒",
    statusAvailable:  "Slobodan 💛",
    momLabel:         "👑 Mama",

    // Profil
    sectionAbout:     "O psu",
    sectionPhotos:    "Fotografije",

    // Blokovi statusa
    bookedTitle:      (name) => `${name} je već rezervisan`,
    bookedDesc:       (name) => `Neko jedva čeka da dovede ${name} kući. Nadamo se da je ovo početak prekrasne priče!`,
    freeTitle:        (name) => `${name} traži dom!`,
    freeDesc:         (name) => `Ako je vaše srce otvoreno i dom spreman, javite nam se — ispričaćemo vam sve o procesu usvajanja.`,
  },
};
