export const site = {
  brand: "Gaggaboom",
  person: "Kerstin Kleinenbrands",
  tagline: "Moderation · Reels · Vodcast",
  location: "Köln",
  email: "kerstinkleinenbrands@icloud.com",
  instagram: "https://www.instagram.com/gaggaboom/",
  instagramHandle: "@gaggaboom",
};

/** Hero — wordmark laid over the centered fisheye figure. */
export const hero = {
  title: "GAGGABOOM",
};

/** Mehr als nur ein Mikro — wer hier spricht und was das für Marken heißt. */
export const about = {
  label: "Mehr als nur ein Mikro",
  headlineA: "Echte Inhalte.",
  headlineB: "Echter Einfluss.",
  lead:
    "Gaggaboom ist Kerstin Kleinenbrands — Moderatorin und Content-Creatorin aus Köln. Keine Skripte, keine Steifheit: Ich halte drauf, wo was passiert, und hole raus, was Menschen wirklich zu sagen haben.",
  statement: "Ich kreiere Verbindungen zwischen Menschen und Marken.",
  body:
    "Als Presenterin ziehe ich den roten Faden, der Ihr Produkt lebendig macht. Reels, Stories, Voice-over, Live-Moderation: Ich übernehme die authentische Präsentation — für maximale Sichtbarkeit und messbare Reichweite. Von der ersten Content-Strategie und Formatentwicklung bis zum fertigen Social-Media-Content, alles aus einer Hand.",
  facts: ["10+ Jahre vor der Kamera", "500+ Interviews", "50+ Events & Festivals"],
  cta: "Let’s talk",
  photo: {
    src: "/images/echte-inhalte.jpg",
    alt: "Kerstin Kleinenbrands im Vodcast-Studio, im Profil vor dem Mikrofon",
    caption: "Im Studio · Vodcast-Aufnahme",
  },
};

/** Was ich mache — services. */
export const services = {
  label: "Was ich mache",
  headlineA: "Ihr Produkt.",
  headlineB: "Meine Stimme.",
  cta: "Anfrage stellen →",
  items: [
    {
      emoji: "🎬",
      title: "Reels & Short Content",
      body: "Vertikale Videos, die stoppen. Für Events, Launches, Backstage-Momente — direkt vor Ort produziert, sofort einsatzbereit.",
      image: {
        src: "/images/inside-26.jpg",
        alt: "Kerstin spricht in einer vertikalen Instagram-Story ins Ansteckmikrofon",
      },
    },
    {
      emoji: "🎤",
      title: "Interviews & Portraits",
      body: "Ich bringe Menschen zum Reden. Lebendig, natürlich, authentisch.",
      image: {
        src: "/images/interview-1.png",
        alt: "On-Location Interview vor dem Backstage-Eingang eines Festivals",
      },
    },
    {
      emoji: "🎙️",
      title: "Vodcasts",
      body: "Audio trifft Bewegtbild. Ich produziere und moderiere Vodcast-Formate, die Ihre Community wachsen lassen.",
      image: {
        src: "/images/vodcast-studio.jpg",
        alt: "Kerstin im Vodcast-Studio am Mikrofon",
      },
    },
    {
      emoji: "📸",
      title: "Event Coverage",
      body: "Live dabei — von der Ankunft bis zur After Party. Ich halte fest, was sonst keiner zeigt. Hinter die Kulissen — ich führe durch Ihr Event mit Energie und Charakter.",
      image: {
        src: "/images/festival-backstage.jpg",
        alt: "Kerstin moderiert auf dem Festivalgelände vor dem Tapeman-Truck",
      },
    },
    {
      emoji: "🤝",
      title: "Brand Collaboration",
      body: "Kooperationen, die sich nicht wie Werbung anfühlen. Ihr Produkt, meine Stimme — glaubwürdig und wirksam.",
      image: {
        src: "/images/reissdorf-patches.jpg",
        alt: "Selfie mit Puschel-Mikrofon bei der Reissdorf-Aktion",
      },
    },
  ],
};

/** Footer. */
export const funken = {
  statementA: "Zünde den Funken.",
  statementB: "Mit Gaggaboom verbinden.",
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  href: string;
};

export type Cluster = {
  label: string;
  desc?: string;
  ratio: "portrait" | "square" | "tall";
  items: GalleryItem[];
};

/** References — image gallery in clusters, wie auf der alten Seite. */
export const clusters: Cluster[] = [
  {
    label: "Festival & Live",
    ratio: "portrait",
    items: [
      {
        src: "/images/interview-1.png",
        alt: "On-Location Interview auf dem Festival",
        caption: "On Location Interview",
        href: "https://www.instagram.com/reel/DZSmxkaOlH1/?igsh=ajFvZTF1NHg4cGdp",
      },
      {
        src: "/images/festival-backstage.jpg",
        alt: "Backstage beim EatPlayLove Festival",
        caption: "Backstage · EatPlayLove Festival",
        href: "https://www.instagram.com/reel/DZSJiyfNJqo/?igsh=MTJjZHJtcWY5OXp4cA==",
      },
      {
        src: "/images/reissdorf-patches.jpg",
        alt: "Reissdorf Aktion Patches",
        caption: "Reissdorf Aktion Patches",
        href: "https://www.instagram.com/reel/DZNRhegNLjp/?igsh=MTFzcTFhOWE3ajZ4Mg==",
      },
      {
        src: "/images/inside-26.jpg",
        alt: "INSIDE '26 Story",
        caption: "INSIDE '26",
        href: "https://www.instagram.com/gaggaboom/",
      },
    ],
  },
  {
    label: "Vodcast & Interview",
    ratio: "square",
    items: [
      {
        src: "/images/vodcast-studio.jpg",
        alt: "Vodcast Studio Setup",
        caption: "Vodcast Studio",
        href: "https://www.barbarella.de/vodcasts/",
      },
      {
        src: "/images/vodcast-thelma.png",
        alt: "Thelma Buabeng im Vodcast",
        caption: "Thelma Buabeng im Vodcast",
        href: "https://www.instagram.com/reel/C3pVyihMnul/?igsh=ajY0eGw0cXpjN2Q4",
      },
      {
        src: "/images/vodcast-raul.jpg",
        alt: "Raul Krauthausen im Vodcast",
        caption: "Raul Krauthausen im Vodcast",
        href: "https://www.instagram.com/reel/C2rowpLMvzP/?igsh=YWl4dGlnZnlsZWhw",
      },
      {
        src: "/images/vodcast-victoria.png",
        alt: "Victoria Reichelt im Vodcast",
        caption: "Victoria Reichelt im Vodcast",
        href: "https://www.instagram.com/reel/C6yJP7fM8ku/?igsh=MXZkYzNwMnQxZ2sw",
      },
      {
        src: "/images/vodcast-maxmoor.png",
        alt: "Max Moor im Vodcast",
        caption: "Max Moor im Vodcast",
        href: "https://www.instagram.com/reel/DFw3c2Zyr1P/?igsh=bmVyMThtZjJ1c3ds",
      },
      {
        src: "/images/vodcast-ingo-dunja.jpg",
        alt: "Ingo Zamperoni und Dunja Hayali im Vodcast",
        caption: "Ingo Zamperoni & Dunja Hayali",
        href: "https://www.instagram.com/reel/DRwPSMOjCRO/?igsh=MWFkaGxncnBoN2g1bg==",
      },
      {
        src: "/images/interview-maik.jpg",
        alt: "Seilbahn-Interview mit Maik Meuser",
        caption: "RheinGefragt · Maik Meuser",
        href: "https://www.youtube.com/shorts/IcwaELrsHsc",
      },
      {
        src: "/images/backstage-tobi.jpg",
        alt: "Tobi Krell Backstage Stories",
        caption: "Tobi Krell · Backstage Stories",
        href: "https://www.instagram.com/reel/DODfR8eCJHJ/?igsh=MXF2ajR5b2sxZm4weA==",
      },
    ],
  },
  {
    label: "Einmal um Block",
    desc: "Social-Media-Format „Einmal um Block“ — als rasende Reporterin interviewe ich Prominente, die bei mir eine Runde mitfahren.",
    ratio: "tall",
    items: [
      {
        src: "/images/block-sophia.png",
        alt: "Einmal um Block mit Sophia Maier",
        caption: "mit Kriegsreporterin Sophia Maier",
        href: "https://www.instagram.com/reel/DXeXft2DARY/?igsh=MTNncnc0MjFnb2tzbg==",
      },
      {
        src: "/images/block-mona.jpg",
        alt: "Einmal um Block mit Mona Ameziane",
        caption: "mit Moderatorin Mona Ameziane",
        href: "https://www.instagram.com/reel/DX_dJVfTpZw/?igsh=MWdxbXlhbmJ6dW5sZg==",
      },
    ],
  },
];
