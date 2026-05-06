// ─── DOG DATA ───────────────────────────────────────────────
// Each dog has localised fields: { en, ru, sr }
// avatar and photos are language-independent.
// Replace placedog.net URLs with real photos before deploying.

const DOGS = [
  {
    id: "lady",
    role: "mom",
    booked: false,
    avatar: "https://raw.githubusercontent.com/samsara-lab/lady-5012/refs/heads/main/img/lady_main.jpg",
    photos: [
      "https://raw.githubusercontent.com/samsara-lab/lady-5012/refs/heads/main/img/lady_main.jpg"
    ],
    name:   { en: "Lady",   ru: "Леди",    sr: "Дама"   },
    age:    { en: "~1.5 years", ru: "~1.5 года", sr: "~1.5 godine" },
    weight: { en: "8 kg",  ru: "8 кг",   sr: "8 kg"  },
    description: {
      en: "Lady is the brave, gentle soul at the heart of this story. Despite everything she went through, she never stopped caring for her puppies. She's calm, affectionate, and melts into your arms the moment you sit down. Luna loves slow walks, sunny windowsills, and being wherever you are. She gets along beautifully with children and would thrive as a loyal companion in any home that gives her the calm she's always deserved.",
      ru: "Леди — смелая, нежная душа, стоящая в центре этой истории. Несмотря на всё, через что ей пришлось пройти, она ни на минуту не переставала заботиться о своих щенках. Она спокойна, ласкова и буквально тает у вас на руках, стоит вам присесть. Луна обожает неспешные прогулки, солнечные подоконники и просто быть рядом с вами. Она замечательно ладит с детьми и станет верным другом в любом доме, который подарит ей заслуженный покой.",
      sr: "Dama je hrabra, nežna duša u srcu ove priče. Uprkos svemu što je prošla, nikada nije prestala da brine o svojim štencima. Mirna je, nežna i topi se u vašim rukama čim sednete. Luna voli spore šetnje, sunčane prozorske klupe i jednostavno biti tamo gde ste vi. Divno se slaže sa decom i procvetaće kao verni drug u svakom domu koji joj pruži zasluženi mir.",
    },
  },
  {
    id: "biscuit",
    role: "puppy",
    booked: true,
    avatar: "https://placedog.net/400/400?id=2",
    photos: [
      "https://placedog.net/600/400?id=21",
      "https://placedog.net/600/400?id=22",
      "https://placedog.net/600/400?id=23",
    ],
    name:   { en: "Biscuit", ru: "Бисквит", sr: "Biscuit" },
    age:    { en: "8 weeks", ru: "8 недель", sr: "8 nedelja" },
    weight: { en: "1.2 kg",  ru: "1,2 кг",  sr: "1,2 kg"  },
    description: {
      en: "Biscuit is the bold one — the first to investigate anything new, the first to bark at the vacuum cleaner, and absolutely the first to find the warmest lap in the room. He has a golden-cream coat and the most expressive eyebrows you've ever seen on a puppy. Biscuit needs a family ready for a little adventure.",
      ru: "Бисквит — самый смелый. Он первым изучает всё новое, первым лает на пылесос и абсолютно первым находит самые тёплые колени в комнате. У него золотисто-кремовая шёрстка и самые выразительные брови, которые вы когда-либо видели у щенка. Бисквиту нужна семья, готовая к маленьким приключениям.",
      sr: "Biscuit je onaj smeli — prvi istražuje sve novo, prvi laje na usisivač i apsolutno prvi pronalazi najtoplija krila u sobi. Ima zlatno-kremasto krzno i najizraženije obrve koje ste ikad videli na štencetu. Biskvitu treba porodica spremna za male avanture.",
    },
  },
  {
    id: "dot",
    role: "puppy",
    booked: false,
    avatar: "https://placedog.net/400/400?id=3",
    photos: [
      "https://placedog.net/600/400?id=31",
      "https://placedog.net/600/400?id=32",
      "https://placedog.net/600/400?id=33",
    ],
    name:   { en: "Dot",    ru: "Точка",  sr: "Dot"    },
    age:    { en: "8 weeks", ru: "8 недель", sr: "8 nedelja" },
    weight: { en: "1.0 kg", ru: "1,0 кг", sr: "1,0 kg" },
    description: {
      en: "Dot earned her name from the perfect little brown spot on her white forehead. She's thoughtful and observant — the one who watches everything before deciding to join in. Once she trusts you, though, she's an absolute velcro pup. Dot would be perfect for a quieter home where she can blossom at her own pace.",
      ru: "Точка получила своё имя благодаря идеально круглому коричневому пятнышку на белом лбу. Она вдумчива и наблюдательна — всегда смотрит, оценивает, и лишь потом присоединяется. Но стоит ей вам довериться — и она станет вашей тенью. Точка идеально подойдёт для спокойного дома, где сможет раскрыться в своём темпе.",
      sr: "Dot je dobila ime po savršenoj smeđoj mrljici na belom čelu. Razmišljava i posmatra — pazi na sve pre nego što odluči da se pridruži. Kad vam se poveri, postaje vaša senka. Dot bi bila savršena za tiši dom gde može da procveta svojim tempom.",
    },
  },
  {
    id: "mochi",
    role: "puppy",
    booked: false,
    avatar: "https://placedog.net/400/400?id=4",
    photos: [
      "https://placedog.net/600/400?id=41",
      "https://placedog.net/600/400?id=42",
      "https://placedog.net/600/400?id=43",
    ],
    name:   { en: "Mochi", ru: "Мочи",  sr: "Mochi"  },
    age:    { en: "8 weeks", ru: "8 недель", sr: "8 nedelja" },
    weight: { en: "0.9 kg", ru: "0,9 кг", sr: "0,9 kg" },
    description: {
      en: "Tiny, round, and impossibly soft — Mochi is the smallest of the litter and fully aware of the power this gives her. She uses her size to sneak under blankets, into jacket pockets, and straight into your heart. She purrs — yes, purrs — when she's happy. The vet confirmed she is, in fact, a dog.",
      ru: "Крошечная, круглая и невозможно мягкая — Мочи самая маленькая в помёте и прекрасно знает, какую власть это ей даёт. Она умудряется пролезть под одеяло, в карманы куртки и прямо в ваше сердце. Она мурлычет — да, именно мурлычет — когда довольна. Ветеринар подтвердил, что она, тем не менее, собака.",
      sr: "Sitna, okrugla i neverovatno mekana — Mochi je najmanji u leglu i savršeno svesna moći koju joj to daje. Koristi veličinu da se uvuče pod deke, u džepove jakni i pravo u vaše srce. Preде — da, prde — kada je srećna. Veterinar je potvrdio da je ipak pas.",
    },
  },
  {
    id: "thunder",
    role: "puppy",
    booked: true,
    avatar: "https://placedog.net/400/400?id=5",
    photos: [
      "https://placedog.net/600/400?id=51",
      "https://placedog.net/600/400?id=52",
      "https://placedog.net/600/400?id=53",
    ],
    name:   { en: "Thunder", ru: "Гром",   sr: "Grom"   },
    age:    { en: "8 weeks", ru: "8 недель", sr: "8 nedelja" },
    weight: { en: "1.4 kg",  ru: "1,4 кг",  sr: "1,4 kg"  },
    description: {
      en: "His name is bigger than he is — for now. Thunder is the largest pup in the litter, with big paws that promise he'll grow into quite the dog. He's energetic, goofy, and absolutely fearless. He once dragged a sock three times his size across the room and looked deeply proud of himself. Thunder needs an active family who will channel all that enthusiasm.",
      ru: "Его имя пока что больше него самого. Гром — самый крупный щенок в помёте, с огромными лапами, которые обещают, что из него вырастет настоящий пёс. Он энергичен, смешон и совершенно бесстрашен. Однажды он тащил носок втрое больше себя через всю комнату и выглядел при этом невероятно гордым. Грому нужна активная семья, готовая направить весь этот энтузиазм в нужное русло.",
      sr: "Njegovo ime je veće od njega — za sada. Grom je najveći štenac u leglu, sa velikim šapama koje obećavaju da će izrasti u pravog psa. Energičan je, smešan i potpuno neustrašiv. Jednom je vukao čarapu trostruko veću od sebe i izgledao duboko ponosan. Gromu treba aktivna porodica koja će usmeriti sav taj entuzijazam.",
    },
  },
  {
    id: "penny",
    role: "puppy",
    booked: false,
    avatar: "https://placedog.net/400/400?id=6",
    photos: [
      "https://placedog.net/600/400?id=61",
      "https://placedog.net/600/400?id=62",
      "https://placedog.net/600/400?id=63",
    ],
    name:   { en: "Penny", ru: "Пенни",  sr: "Penny"  },
    age:    { en: "8 weeks", ru: "8 недель", sr: "8 nedelja" },
    weight: { en: "1.1 kg", ru: "1,1 кг", sr: "1,1 kg" },
    description: {
      en: "Penny is copper-coated and copper-spirited — bright, warm, and always shining. She's the social butterfly of the litter: she greets every visitor, supervises every activity, and makes sure no one feels left out. Penny was the first pup to learn her own name. She's going to be an incredibly smart companion.",
      ru: "Пенни — медно-рыжая снаружи и такая же огненная внутри: яркая, тёплая и всегда сияющая. Она социальная бабочка помёта: встречает каждого гостя, наблюдает за каждым занятием и следит, чтобы никто не чувствовал себя лишним. Пенни первой выучила своё имя. Из неё выйдет невероятно умная подруга.",
      sr: "Penny je bakarnobojne dlake i bakarnobojnog duha — svetla, topla i uvek sjajna. Ona je društveni leptir legla: dočekuje svakog gosta, nadzire svaku aktivnost i brine da se niko ne oseća isključeno. Penny je bila prva koja je naučila svoje ime. Biće neverovatno pametan pratilac.",
    },
  },
  {
    id: "fig",
    role: "puppy",
    booked: false,
    avatar: "https://placedog.net/400/400?id=7",
    photos: [
      "https://placedog.net/600/400?id=71",
      "https://placedog.net/600/400?id=72",
      "https://placedog.net/600/400?id=73",
    ],
    name:   { en: "Fig",   ru: "Финик",  sr: "Fig"    },
    age:    { en: "8 weeks", ru: "8 недель", sr: "8 nedelja" },
    weight: { en: "1.0 kg", ru: "1,0 кг", sr: "1,0 kg" },
    description: {
      en: "Fig is a dreamer. He spends long minutes watching pigeons from the window, chasing dust motes in sunbeams, and falling asleep mid-play. He's gentle, soft-tempered, and has the most peaceful energy in the litter. Fig would thrive in a calm household — perhaps with a person who also enjoys long, quiet afternoons.",
      ru: "Финик — мечтатель. Он подолгу наблюдает за голубями из окна, гоняется за пылинками в солнечных лучах и засыпает прямо во время игры. Он нежный, мягкий и самый спокойный в помёте. Финик будет счастлив в тихом доме — возможно, рядом с тем, кто тоже любит долгие, тихие послеполудни.",
      sr: "Fig je sanjar. Dugo gleda golubove kroz prozor, juri čestice prašine u sunčevim zracima i zaspi usred igre. Nežan je, blagog karaktera i ima najmirniju energiju u leglu. Fig bi procvetao u mirnom domu — možda uz osobu koja takođe uživa u dugim, tihim popodnevima.",
    },
  },
  {
    id: "ziggy",
    role: "puppy",
    booked: true,
    avatar: "https://placedog.net/400/400?id=8",
    photos: [
      "https://placedog.net/600/400?id=81",
      "https://placedog.net/600/400?id=82",
      "https://placedog.net/600/400?id=83",
    ],
    name:   { en: "Ziggy",  ru: "Зигзаг", sr: "Ziggy"  },
    age:    { en: "8 weeks", ru: "8 недель", sr: "8 nedelja" },
    weight: { en: "1.3 kg", ru: "1,3 кг", sr: "1,3 kg" },
    description: {
      en: "Ziggy never travels in a straight line — physically or emotionally. He zigs, he zags, he bounces off walls and rebounds into cuddles. He's the comedian of the bunch, always doing something unexpected. His ears don't match (one flops, one stands), and somehow that makes him even more lovable. Life with Ziggy will never be boring.",
      ru: "Зигзаг никогда не идёт прямо — ни физически, ни эмоционально. Он петляет, скачет, отпрыгивает от стен и возвращается обниматься. Он клоун компании — всегда делает что-то неожиданное. Его уши не совпадают (одно висит, другое торчит), и это делает его только ещё более обаятельным. С Зигзагом скучно не будет никогда.",
      sr: "Ziggy nikad ne ide pravom linijom — ni fizički ni emocionalno. Cik-cakuje, skače, odbija se od zidova i vraća se na zagrljaje. On je komičar grupe, uvek radi nešto neočekivano. Njegove uši se ne podudaraju (jedna visi, druga stoji), i to ga nekako čini još dražesnijim. Sa Ziggyjem nikad neće biti dosadno.",
    },
  },
];
