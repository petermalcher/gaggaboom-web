import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://gaggaboom.de"),
  title: {
    default: "Gaggaboom — Kreative Allzweckwaffe & Content Creation",
    template: "%s · Gaggaboom",
  },
  description:
    "Gaggaboom ist die kreative Allzweckwaffe von Kerstin Kleinenbrands: Live-Moderation, Reels, Vodcasts und Interviews — authentisch, humorvoll, mittendrin. Köln & überall wo's kracht.",
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
    title: "Gaggaboom — Kreative Allzweckwaffe & Content Creation",
    description:
      "Live-Moderation, Reels, Vodcasts und Interviews — authentisch, humorvoll, mittendrin.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${clash.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
