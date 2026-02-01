import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bonelli.dev"),
  title: "Bonelli.dev — Software Engineer",
  description:
    "Software engineering portfolio. Full-stack development, AI/ML projects, and systems engineering. TypeScript, React, Next.js, Python, Docker.",
  icons: {
    icon: "/transparent.png",
    shortcut: "/transparent.png",
    apple: "/transparent.png",
  },
  openGraph: {
    title: "Bonelli.dev — Software Engineer",
    description:
      "Software engineering portfolio. Full-stack development, AI/ML, and systems engineering.",
    url: "https://bonelli.dev",
    siteName: "Bonelli.dev",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bonelli",
              url: "https://bonelli.dev",
              jobTitle: "Software Engineer",
              sameAs: ["https://github.com/Zwin-ux"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        {/* Global SVG Filters for Claymation Effect */}
        <svg className="hidden">
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </svg>
      </body>
    </html>
  );
}
