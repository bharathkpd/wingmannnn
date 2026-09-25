import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";

const serifFont = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wingmann.co"),
  title: "Wingmann — Date with Intent",
  description:
    "Wingmann replaces superficial swiping with curated human introductions, genuine conversations, and real dates for people seeking intentional relationships.",
  keywords: [
    "Wingmann",
    "Date with Intent",
    "Matchmaking Bengaluru",
    "Matchmaking Hyderabad",
    "Intentional Dating",
    "Curated Introductions",
  ],
  authors: [{ name: "Wingmann Studio" }],
  openGraph: {
    title: "Wingmann — Date with Intent",
    description:
      "Find someone who is looking for the same thing. Human matchmaking and curated introductions in Bengaluru & Hyderabad.",
    url: "https://wingmann.co",
    siteName: "Wingmann",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Wingmann — Date with Intent",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wingmann — Date with Intent",
    description: "Meeting someone is easy. But finding someone who wants the same thing isn't.",
    images: ["/images/hero-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable}`}>
      <body className="antialiased bg-[#F7F2ED] text-[#2B2B2B]">
        <div className="film-grain" aria-hidden="true" />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
