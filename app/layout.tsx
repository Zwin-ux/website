import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bonellilabs.com"),
  title: "Bonelli Labs — Production Company",
  description:
    "Bonelli Labs is a production company. We launch experimental tools, games, and weird ideas fast. Portfolio, projects, and contact info.",
  icons: {
    icon: "/transparent.png",
    shortcut: "/transparent.png",
    apple: "/transparent.png",
  },
  openGraph: {
    title: "Bonelli Labs — Production Company",
    images: [
      {
        url: "/stylized-tree-logo.png",
        width: 256,
        height: 256,
        alt: "Bonelli Labs Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonelli Labs',
    description: 'Affordable, futuristic web and marketing services',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-[#121317] text-neutral-100 antialiased`} suppressHydrationWarning>
        <div className="grain-overlay" />
        <Header />
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
