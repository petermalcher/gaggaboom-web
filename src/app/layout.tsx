import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Unbounded } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

const clash = localFont({
  variable: "--font-clash",
  src: "./fonts/ClashDisplay-Variable.woff2",
  weight: "200 700",
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaggaboom.de"),
  title: {
    default: "Gaggaboom — Moderation, Reels & Vodcast aus Köln",
    template: "%s · Gaggaboom",
  },
  description:
    "Gaggaboom ist Kerstin Kleinenbrands: Moderatorin und Content-Creatorin aus Köln. Keine Skripte, keine Steifheit — Moderation, Reels, Vodcasts und Interviews, von der Formatidee bis zum fertigen Clip.",
  keywords: [
    "Gaggaboom",
    "Kerstin Kleinenbrands",
    "Moderatorin",
    "Content Creation",
    "Reels",
    "Vodcast",
    "Interviews",
    "Köln",
  ],
  openGraph: {
    title: "Gaggaboom — Moderation, Reels & Vodcast aus Köln",
    description:
      "Keine Skripte, keine Steifheit — Moderation, Reels, Vodcasts und Interviews mit Kerstin Kleinenbrands.",
    type: "website",
    locale: "de_DE",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${jetbrainsMono.variable} ${clash.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
