export const site = {
  brand: "Gaggaboom",
  person: "Kerstin Kleinenbrands",
  tagline: "Zwischen Menschen und Marken",
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
    "Ich bin’s: Kerstin Kleinenbrands alias Gaggaboom – Moderatorin | Storyteller | Social Media Reporterin | Brand Host aus Köln.",
  statement: "Ich kreiere Verbindungen zwischen Menschen und Marken.",
  body:
    "Als Presenterin bin ich die Zündschnur, die eure Botschaft auf die Zielgruppe überträgt. Reels, Stories, Voice-over, Live-Moderation: Von der ersten Content-Strategie und Formatentwicklung bis zum fertigen Social-Media-Content. Ich erzeuge Lebendigkeit durch eine authentische Präsentation — für maximale Sichtbarkeit und messbare Reichweite.",
  facts: ["10+ Jahre vor der Kamera", "500+ Interviews", "50+ Events & Festivals"],
  cta: "Let’s talk",
  photo: {
    src: "/images/studio-mikro-v2.jpg",
    alt: "Kerstin Kleinenbrands mit Beanie am Studiomikrofon, hinter der Glasscheibe eines Aufnahmeraums",
    caption: "Im Studio · Vodcast-Aufnahme",
  },
};

/** Was ich mache — services. */
export const services = {
  label: "Was ich mache",
  headlineA: "Euer Produkt.",
  headlineB: "Meine Stimme.",
  cta: "Anfrage stellen →",
  items: [
    {
      icon: "Clapperboard",
      title: "Reels, Stories & Short Content",
      body: "Vertikale Videos mit Scroll-Stopp-Effekt. Für Events, Launches und Backstage-Momente — direkt vor Ort produziert, sofort einsatzbereit.",
    },
    {
      icon: "Podcast",
      title: "Interviews & Vodcasts",
      body: "Ich bringe Menschen zum Reden und moderiere Formate, die eure Community wachsen lassen.",
    },
    {
      icon: "Handshake",
      title: "Event Coverage & Brand Collaboration",
      body: "Live dabei, hinter den Kulissen — ich erzähle Geschichten, die Emotionen wecken und Vertrauen schaffen. Ob Event, Produktlaunch oder Unternehmensalltag. Ich halte fest, was sonst keiner zeigt. Kooperationen, die sich nicht wie Werbung anfühlen. Euer Produkt, meine Präsentation — glaubwürdig und wirksam.",
    },
  ] as const,
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
