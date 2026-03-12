import type { Metadata } from "next";
import { Inter, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import localFont from "next/font/local";

const montrealMono = localFont({
  src: [
    {
      path: "../../public/fonts/MontrealMono-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/MontrealMono-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MontrealMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MontrealMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MontrealMono-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/MontrealMono-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Muhammadamin Akhmadov — Fullstack Developer",
  description:
    "Fullstack JS developer portfolio. Next.js, Vue, React, Node.js. Projects: Hant Travel, Novicombank, Bar Karas, Nebula GTS and more.",
  keywords:
    "Muhammadamin Akhmadov, Fullstack Developer, JavaScript, React, Vue, Next.js, Node.js, Samarkand",
  creator: "Muhammadamin Akhmadov",
  openGraph: {
    title: "Muhammadamin Akhmadov — Fullstack Developer",
    description:
      "Fullstack JS developer. 2+ years experience. Next.js, Vue, React, MERN. Open to projects and remote work.",
    url: "https://muhammadamin.dev",
    siteName: "Muhammadamin Akhmadov — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammadamin Akhmadov — Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@muhammad_amin_software_engineer",
    title: "Muhammadamin Akhmadov — Fullstack Developer",
    description: "Fullstack JS, React, Vue, Next.js. Projects and contact.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montrealMono.className} ${inter.className} ${geistMono.className} ${geistSans.className}`}
    >
      <body className={`antialiased bg-(--color-accent-200)`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
