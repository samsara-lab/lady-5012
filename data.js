// ─── DOG DATA ───────────────────────────────────────────────
// Each dog has localised fields: { en, ru, sr }
// avatar and photos are language-independent.

const BASE = "https://raw.githubusercontent.com/samsara-lab/lady-5012/refs/heads/main/img/";

const PUPPY_AGE = { en: "3 weeks", ru: "3 недели", sr: "3 nedelje" };

const DOGS = [
  {
    id: "lady",
    role: "mom",
    gender: "female",
    booked: false,
    avatar: BASE + "lady_0.jpg",
    photos: [
      BASE + "lady_0.jpg",
      BASE + "lady_1.jpg",
    ],
    name:   { en: "Lady",   ru: "Леди",    sr: "Ledi"   },
    age:    { en: "~1.5 years", ru: "~1.5 года", sr: "~1.5 godine" },
    weight: { en: "8.7 kg",  ru: "8.7 кг",   sr: "8.7 kg"  },
    description: {
      en: "Lady is the heart of this family, a white-and-ginger beauty found in Pioneers' Park in Belgrade, alone and pregnant. Just two days after she was brought to safety, she gave birth to seven puppies. She carries a microchip registered by Belgrade's animal service under the name 5012. Lady is remarkably well-mannered and calm: she gets along beautifully with people and other animals, and not once has anyone heard her bark.",
      ru: "Леди, душа этой семьи, бело-рыжая красавица, найденная в парке Пионеров в Белграде одна и беременная. Уже через два дня после того, как её взяли под опеку, она родила семерых щенят. У неё есть микрочип, по которому белградская городская служба зарегистрировала её как бездомную под именем 5012. Леди удивительно воспитана и тиха: она отлично ладит с людьми и другими животными, и её ни разу не слышали лающей.",
      sr: "Ledi je srce ove porodice, belo-narandžasta lepotica pronađena u Pionirskom parku u Beogradu, sama i trudna. Samo dva dana nakon što je dovedena na sigurno, okotila je sedam štenaca. Ima mikročip po kome ju je beogradska gradska služba registrovala kao lutalicu pod imenom 5012. Ledi je izuzetno vaspitana i tiha: odlično se slaže sa ljudima i drugim životinjama, i niko je nikad nije čuo da laje.",
    },
  },
  {
    id: "senior",
    role: "puppy",
    gender: "male",
    booked: false,
    avatar: BASE + "senior_0.jpg",
    photos: [
      BASE + "senior_0.jpg",
      BASE + "senior_1.jpg",
      BASE + "senior_2.jpg",
    ],
    name:   { en: "Senior", ru: "Сеньор", sr: "Senior" },
    age:    PUPPY_AGE,
    weight: { en: "~520 g",  ru: "~520 г",  sr: "~520 g"  },
    description: {
      en: "Senior is the pack's chief problem-solver: distinguished, decisive, and always smartly dressed in his stylish little jacket markings. He came into this world knowing exactly what needed to be done, and has been doing it ever since.",
      ru: "Сеньор, главный решала любых проблем в стае: представительный, решительный и всегда в стильном пиджачке. Он появился на свет уже зная, что в этом помёте порядок будет именно такой, какой ему нравится, и с тех пор так и живёт.",
      sr: "Senior je glavni rešavač svih problema u čoporu: dostojanstven, odlučan i uvek stilski obučen u svom modnom sakočiću. Došao je na svet znajući tačno šta treba da se uradi i od tada to radi bez prestanka.",
    },
  },
  {
    id: "junie",
    role: "puppy",
    gender: "male",
    booked: false,
    avatar: BASE + "junie_0.jpg",
    photos: [
      BASE + "junie_0.jpg",
      BASE + "junie_1.jpg",
      BASE + "junie_2.jpg",
    ],
    name:   { en: "Jun", ru: "Джун", sr: "Jun" },
    age:    PUPPY_AGE,
    weight: { en: "~435 g",  ru: "~435 г",  sr: "~435 g"  },
    description: {
      en: "Jun is a future master of domestic comfort, a dashing black-and-white pup who seems to have been born already knowing how a good home should feel.",
      ru: "Джун, будущий профессионал в деле домашнего уюта. Бело-чёрный, статный, он, кажется, появился на свет уже зная, каким должен быть настоящий дом.",
      sr: "Jun je budući majstor kućnog ugodaja, otmeni crno-beli štenad koji izgleda kao da se rodio znajući kako pravi dom treba da se oseća.",
    },
  },
  {
    id: "ruby",
    role: "puppy",
    gender: "female",
    booked: true,
    avatar: BASE + "ruby_0.jpg",
    photos: [
      BASE + "ruby_0.jpg",
      BASE + "ruby_1.jpg",
      BASE + "ruby_2.jpg",
      BASE + "ruby_3.jpg",
    ],
    name:   { en: "Ruby", ru: "Руби", sr: "Ruby" },
    age:    PUPPY_AGE,
    weight: { en: "~640 g",  ru: "~640 г",  sr: "~640 g"  },
    description: {
      en: "Ruby is the most energetic of the litter, an active girl sporting a charming white necklace of fur, growing faster than any of her siblings.",
      ru: "Руби, самая энергичная в помёте: активная девочка с очаровательным белым воротничком, которая растёт быстрее всех братьев и сестёр.",
      sr: "Ruby je najenergetičnija u leglu, aktivna devojčica sa čarobnom belom ogrlicrom od krzna, koja raste brže od svih ostalih.",
    },
  },
  {
    id: "java",
    role: "puppy",
    gender: "female",
    booked: false,
    avatar: BASE + "java_0.jpg",
    photos: [
      BASE + "java_0.jpg",
      BASE + "java_1.jpg",
    ],
    name:   { en: "Java", ru: "Джава", sr: "Java" },
    age:    PUPPY_AGE,
    weight: { en: "~524 g",  ru: "~524 г",  sr: "~524 g"  },
    description: {
      en: "Java has a striking cow-print coat. Sturdy, cheerful, and always in the thick of things.",
      ru: "У Джавы эффектный «коровий» окрас. Крепкая, жизнерадостная и всегда в самой гуще событий.",
      sr: "Java ima upečatljiv 'kravlji' uzorak dlake. Čvrsta, vesela i uvek u centru dešavanja.",
    },
  },
  {
    id: "c",
    role: "puppy",
    gender: "female",
    booked: false,
    avatar: BASE + "c_0.jpg",
    photos: [
      BASE + "c_0.jpg",
      BASE + "c_1.JPG",
      BASE + "c_2.JPG",
    ],
    name:   { en: "C", ru: "Си", sr: "C" },
    age:    PUPPY_AGE,
    weight: { en: "~545 g",  ru: "~545 г",  sr: "~545 g"  },
    description: {
      en: "C has a single perfect dot on her backside, a minimalist signature that sums her up completely. Neat, precise, and exactly as advertised.",
      ru: "У Си есть одна идеальная точка на попе, минималистичная подпись, которая говорит о ней всё. Аккуратная, точная и именно такая, какой кажется.",
      sr: "C ima jednu savršenu tačku na zadnjici, minimalistički potpis koji je savršeno opisuje. Uredna, precizna i tačno onakva kakva izgleda.",
    },
  },
  {
    id: "feature",
    role: "puppy",
    gender: "female",
    booked: true,
    avatar: BASE + "feature_0.jpg",
    photos: [
      BASE + "feature_0.jpg",
      BASE + "feature_1.jpg",
    ],
    name:   { en: "Feature", ru: "Фича", sr: "Feature" },
    age:    PUPPY_AGE,
    weight: { en: "~293 g",  ru: "~293 г",  sr: "~293 g"  },
    description: {
      en: "Feature is the only ginger in the litter, a warm, amber-tinted girl who stands out immediately among her siblings. She's the most petite of them all, but what she lacks in size she more than makes up for in uniqueness.",
      ru: "Фича, единственная рыженькая в помёте: тёплая, янтарная малышка, которую сразу замечаешь среди всех. Самая миниатюрная, но то, чего ей не хватает в размере, она с лихвой возмещает уникальностью.",
      sr: "Feature je jedina riđa u leglu, topla, jantarno obojena devojčica koja se odmah uočava među braćom i sestrama. Ona je najsitnija od svih, ali ono što joj nedostaje u veličini nadoknađuje jedinstvenošću.",
    },
  },
  {
    id: "jira",
    role: "puppy",
    gender: "female",
    booked: false,
    avatar: BASE + "jira_0.jpg",
    photos: [
      BASE + "jira_0.jpg",
      BASE + "jira_1.jpg",
    ],
    name:   { en: "Jira", ru: "Джира", sr: "Jira" },
    age:    PUPPY_AGE,
    weight: { en: "~470 g",  ru: "~470 г",  sr: "~470 g"  },
    description: {
      en: "Jira is a white-red girl with what appears to be a black dinosaur stamped right on her backside, a truly unique marking that nobody asked for but everyone loves immediately. Bold, distinctive, and impossible to forget.",
      ru: "Джира, бело-рыжая девочка с чёрным динозавром на попе. Эту особую отметину никто не заказывал, но все сразу в неё влюбляются. Яркая, неповторимая и незабываемая.",
      sr: "Jira je bela-crvenokosa devojčica sa crnim dinosaurusom na zadnjici, zaista jedinstvena oznaka koju niko nije tražio, ali svi odmah obožavaju. Smela, prepoznatljiva i nemoguće je zaboraviti.",
    },
  },
];
