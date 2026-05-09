// ─── UI TRANSLATIONS ────────────────────────────────────────
// Keys cover every piece of static UI text.
// Dog names, ages, weights and descriptions live in data.js.

const TRANSLATIONS = {

  en: {
    // Intro screen
    introBadge:       "Found with Love",
    introTitle:       ["A Story of", "Lady a.k.a. №5012"],
    story1: "Lady was found in Pioneers' Park in Belgrade, alone and visibly pregnant. She was brought to safety, and just two days later gave birth to seven beautiful puppies. She carries a microchip — according to it, she was registered as a stray by Belgrade's animal service under the name 5012.",
    story2: "We are looking for caring people who would like to adopt one of the puppies or Lady herself. If you are considering giving a dog a home, please reach out: Telegram — @borisenkopp, @arina_sonne, t.me/motherandpuppies; Instagram — @arina._.sonne",
    story3: "",
    story4: "",
    ctaBtn:           "Meet the family",

    // Dogs list screen
    packTitle:        "The Pack",
    packSub:          "8 dogs · 6 still available",

    // Status labels
    statusBooked:     (gender) => "Booked 🔒",
    statusAvailable:  (gender) => "Available 💛",
    momLabel:         "👑 Mom",

    // Gender
    genderMale:       "Boy",
    genderFemale:     "Girl",

    // Profile screen
    sectionAbout:     "About",
    sectionPhotos:    "Photos",

    // Profile status blocks
    bookedTitle:      (name, gender) => `${name} is already booked`,
    bookedDesc:       (name, gender) => `Someone is eagerly waiting to bring ${name} home. We hope it's the beginning of a beautiful story!`,
    freeTitle:        (name, gender) => `${name} is looking for a home!`,
    freeDesc:         (name, gender) => `If your heart is open and your home is ready, reach out to us and we'll tell you everything about the adoption process.`,
  },

  ru: {
    // Вводный экран
    introBadge:       "Найдены с любовью",
    introTitle:       ["История", "Леди a.k.a. №5012"],
    story1: "Леди нашли в парке Пионеров в Белграде — одну и беременную. Уже через два дня после того, как её взяли под опеку, она родила семерых прекрасных щенят. У неё есть микрочип: согласно ему, она зарегистрирована как бездомная под именем 5012 белградской муниципальной службой по животным.",
    story2: "Мы ищем добрых людей, которые хотели бы взять одного из щенят или саму Леди. Если вы думаете о том, чтобы подарить собаке дом, напишите нам: Telegram — @borisenkopp, @arina_sonne, t.me/motherandpuppies; Instagram — @arina._.sonne",
    story3: "",
    story4: "",
    ctaBtn:           "Познакомиться со стаей",

    // Список собак
    packTitle:        "Наша стая",
    packSub:          "8 собак · 6 ещё свободны",

    // Статусы
    statusBooked:     (gender) => gender === "male" ? "Забронирован 🔒" : "Забронирована 🔒",
    statusAvailable:  (gender) => gender === "male" ? "Свободен 💛" : "Свободна 💛",
    momLabel:         "👑 Мама",

    // Пол
    genderMale:       "Мальчик",
    genderFemale:     "Девочка",

    // Профиль
    sectionAbout:     "О собаке",
    sectionPhotos:    "Фотографии",

    // Блоки статуса
    bookedTitle:      (name, gender) => gender === "male" ? `${name} уже забронирован` : `${name} уже забронирована`,
    bookedDesc:       (name, gender) => `Кто-то с нетерпением ждёт, когда сможет забрать ${name} домой. Надеемся, это начало прекрасной истории!`,
    freeTitle:        (name, gender) => `${name} ищет дом!`,
    freeDesc:         (name, gender) => `Если ваше сердце открыто и дом готов, свяжитесь с нами — мы расскажем всё об усыновлении.`,
  },

  sr: {
    // Uvodne informacije
    introBadge:       "Pronađeni s ljubavlju",
    introTitle:       ["Priča o", "Dama a.k.a. №5012"],
    story1: "Ledi je pronađena u Pionirskom parku u Beogradu, sama i vidno trudna. Dovedena je na sigurno, a samo dva dana kasnije okotila je sedam predivnih štenaca. Ima mikročip — prema njemu, beogradska komunalna služba za zaštitu životinja registrovala ju je kao lutalicu pod imenom 5012.",
    story2: "Tražimo dobre ljude koji bi želeli da usvoje jednog od štenaca ili samu Ledi. Ako razmišljate o tome da psu pružite dom, javite nam se: Telegram — @borisenkopp, @arina_sonne, t.me/motherandpuppies; Instagram — @arina._.sonne",
    story3: "",
    story4: "",
    ctaBtn:           "Upoznajte čopor",

    // Lista pasa
    packTitle:        "Naš čopor",
    packSub:          "8 pasa · 6 još slobodnih",

    // Statusi
    statusBooked:     (gender) => gender === "male" ? "Rezervisan 🔒" : "Rezervisana 🔒",
    statusAvailable:  (gender) => gender === "male" ? "Slobodan 💛" : "Slobodna 💛",
    momLabel:         "👑 Mama",

    // Pol
    genderMale:       "Muško",
    genderFemale:     "Žensko",

    // Profil
    sectionAbout:     "O psu",
    sectionPhotos:    "Fotografije",

    // Blokovi statusa
    bookedTitle:      (name, gender) => gender === "male" ? `${name} je već rezervisan` : `${name} je već rezervisana`,
    bookedDesc:       (name, gender) => `Neko jedva čeka da dovede ${name} kući. Nadamo se da je ovo početak prekrasne priče!`,
    freeTitle:        (name, gender) => `${name} traži dom!`,
    freeDesc:         (name, gender) => `Ako je vaše srce otvoreno i dom spreman, javite nam se — ispričaćemo vam sve o procesu usvajanja.`,
  },
};
