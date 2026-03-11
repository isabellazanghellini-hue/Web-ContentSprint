import type { Metadata } from "next";
import { Asap, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const asap = Asap({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-asap",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "AI Content Sprint – Dein Content-System in deiner Stimme | FemBrand Studio",
  description:
    "In 6 Modulen zum eigenen Content-System – mit KI, in deiner Stimme. Für Coaches & Expertinnen. Jetzt 97 € Early Bird.",
  openGraph: {
    title: "AI Content Sprint – FemBrand Studio",
    description:
      "In 6 Modulen zum eigenen Content-System – mit KI, in deiner Stimme.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${asap.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
