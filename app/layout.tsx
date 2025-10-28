import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Bonelli Labs — Creative Tech Group",
  description:
    "Bonelli Labs is a creative tech group. We launch experimental tools, games, and weird ideas fast. Portfolio, projects, and contact info.",
  openGraph: {
    title: "Bonelli Labs — Creative Tech Group",
    images: [
      {
        url: "/favicon.ico",
        width: 256,
        height: 256,
        alt: "Bonelli Labs Favicon",
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
        <Header />
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
