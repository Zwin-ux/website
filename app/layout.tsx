import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white min-h-screen antialiased`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
