export const site = {
  brand: "Gaggaboom",
  person: "Kerstin Kleinenbrands",
  tagline: "Kreative Allzweckwaffe · Content Creation",
  location: "Köln · Deutschland · Überall wo's kracht",
  email: "kerstinkleinenbrands@icloud.com",
  instagram: "https://www.instagram.com/gaggaboom/",
  instagramHandle: "@gaggaboom",
};

export const nav = [
  { label: "Über", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Einblicke", href: "#work" },
  { label: "Kontakt", href: "#contact" },
];

export const services = [
  {
    icon: "clapperboard",
    title: "Reels & Short Content",
    body: "Vertikale Videos, die stoppen. Für Events, Launches und Backstage-Momente — direkt vor Ort produziert, sofort einsatzbereit.",
  },
  {
    icon: "mic",
    title: "Interviews & Portraits",
    body: "Ich bringe Menschen zum Reden. Lebendig, natürlich, authentisch — ohne Skript-Steifheit.",
  },
  {
    icon: "radio",
    title: "Vodcasts",
    body: "Audio trifft Bewegtbild. Ich produziere und moderiere Vodcast-Formate, die deine Community wachsen lassen.",
  },
  {
    icon: "camera",
    title: "Event Coverage",
    body: "Live dabei — von der Ankunft bis zur After Party. Ich halte fest, was sonst keiner zeigt, und führe mit Energie durchs Event.",
  },
  {
    icon: "handshake",
    title: "Brand Collaboration",
    body: "Kooperationen, die sich nicht wie Werbung anfühlen. Dein Produkt, meine Stimme — glaubwürdig und wirksam.",
  },
] as const;

export const stats = [
  { value: "10+", label: "Jahre vor der Kamera" },
  { value: "500+", label: "Interviews geführt" },
  { value: "50+", label: "Events & Festivals" },
  { value: "∞", label: "Mal mittendrin" },
];

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  href: string;
  ratio?: "portrait" | "square" | "tall";
};

export type Cluster = {
  label: string;
  desc?: string;
  items: GalleryItem[];
};

export const clusters: Cluster[] = [
  {
    label: "Festival & Live",
    items: [
      {
        src: "/images/interview-1.png",
        alt: "On-Location Interview auf dem Festival",
        caption: "On Location Interview",
        href: "https://www.instagram.com/reel/DZSmxkaOlH1/?igsh=ajFvZTF1NHg4cGdp",
        ratio: "portrait",
      },
      {
        src: "/images/festival-backstage.jpg",
        alt: "Backstage beim EatPlayLove Festival",
        caption: "Backstage · EatPlayLove Festival",
        href: "https://www.instagram.com/reel/DZSJiyfNJqo/?igsh=MTJjZHJtcWY5OXp4cA==",
        ratio: "portrait",
      },
      {
        src: "/images/reissdorf-patches.jpg",
        alt: "Reissdorf Aktion Patches",
        caption: "Reissdorf Aktion Patches",
        href: "https://www.instagram.com/reel/DZNRhegNLjp/?igsh=MTFzcTFhOWE3ajZ4Mg==",
        ratio: "portrait",
      },
      {
        src: "/images/inside-26.jpg",
        alt: "INSIDE '26 Story",
        caption: "INSIDE '26",
        href: "https://www.instagram.com/gaggaboom/",
        ratio: "portrait",
      },
    ],
  },
  {
    label: "Vodcast & Interview",
    items: [
      {
        src: "/images/vodcast-studio.jpg",
        alt: "Vodcast Studio Setup",
        caption: "Vodcast Studio",
        href: "https://www.barbarella.de/vodcasts/",
        ratio: "square",
      },
      {
        src: "/images/vodcast-thelma.png",
        alt: "Thelma Buabeng im Vodcast",
        caption: "Thelma Buabeng im Vodcast",
        href: "https://www.instagram.com/reel/C3pVyihMnul/?igsh=ajY0eGw0cXpjN2Q4",
        ratio: "square",
      },
      {
        src: "/images/vodcast-raul.jpg",
        alt: "Raul Krauthausen im Vodcast",
        caption: "Raul Krauthausen im Vodcast",
        href: "https://www.instagram.com/reel/C2rowpLMvzP/?igsh=YWl4dGlnZnlsZWhw",
        ratio: "square",
      },
      {
        src: "/images/vodcast-victoria.png",
        alt: "Victoria Reichelt im Vodcast",
        caption: "Victoria Reichelt im Vodcast",
        href: "https://www.instagram.com/reel/C6yJP7fM8ku/?igsh=MXZkYzNwMnQxZ2sw",
        ratio: "square",
      },
      {
        src: "/images/vodcast-maxmoor.png",
        alt: "Max Moor im Vodcast",
        caption: "Max Moor im Vodcast",
        href: "https://www.instagram.com/reel/DFw3c2Zyr1P/?igsh=bmVyMThtZjJ1c3ds",
        ratio: "square",
      },
      {
        src: "/images/vodcast-ingo-dunja.jpg",
        alt: "Ingo Zamperoni & Dunja Hayali",
        caption: "Ingo Zamperoni & Dunja Hayali",
        href: "https://www.instagram.com/reel/DRwPSMOjCRO/?igsh=MWFkaGxncnBoN2g1bg==",
        ratio: "square",
      },
      {
        src: "/images/interview-maik.jpg",
        alt: "Seilbahn-Interview mit Maik Meuser",
        caption: "RheinGefragt · Maik Meuser",
        href: "https://www.youtube.com/shorts/IcwaELrsHsc",
        ratio: "square",
      },
      {
        src: "/images/backstage-tobi.jpg",
        alt: "Tobi Krell Backstage Stories",
        caption: "Tobi Krell · Backstage",
        href: "https://www.instagram.com/reel/DODfR8eCJHJ/?igsh=MXF2ajR5b2sxZm4weA==",
        ratio: "square",
      },
    ],
  },
  {
    label: "Einmal um Block",
    desc: "Social-Media-Format „Einmal um Block\" — als rasende Reporterin interviewe ich Prominente, die bei mir eine Runde mitfahren.",
    items: [
      {
        src: "/images/block-sophia.png",
        alt: "Einmal um Block mit Sophia Maier",
        caption: "mit Kriegsreporterin Sophia Maier",
        href: "https://www.instagram.com/reel/DXeXft2DARY/?igsh=MTNncnc0MjFnb2tzbg==",
        ratio: "tall",
      },
      {
        src: "/images/block-mona.jpg",
        alt: "Einmal um Block mit Mona Ameziane",
        caption: "mit Moderatorin Mona Ameziane",
        href: "https://www.instagram.com/reel/DX_dJVfTpZw/?igsh=MWdxbXlhbmJ6dW5sZg==",
        ratio: "tall",
      },
      {
        src: "/images/block-yasmine.jpg",
        alt: "Einmal um Block mit Yasmine M'Barek",
        caption: "mit Journalistin Yasmine M'Barek",
        href: "https://www.instagram.com/reel/DQBbJcVjL_G/?igsh=MXA1enY0NGpvOXMxdQ==",
        ratio: "tall",
      },
    ],
  },
];
