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
  title: "Bonelli Labs - Full-Stack Development & Technical Consulting",
  description:
    "Full-stack development team and technical consultants specializing in modern web applications, custom software solutions, and technical consulting. Portfolio, projects, and contact info.",
  icons: {
    icon: [
      { url: "/Stylized Tree Logo Design.png", type: "image/png", sizes: "any" },
    ],
  },
  openGraph: {
    title: "Bonelli Labs - Full-Stack Development & Technical Consulting",
    images: [
      {
        url: "/Stylized Tree Logo Design.png",
        width: 256,
        height: 256,
        alt: "Bonelli Labs - Full-Stack Development & Technical Consulting",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bonelli Labs - Full-Stack Development & Technical Consulting',
    description: 'Full-stack development team and technical consultants specializing in modern web applications and custom software solutions',
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
