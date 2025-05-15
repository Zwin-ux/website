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
    description:
      "Bonelli Labs is a creative tech group. We launch experimental tools, games, and weird ideas fast. Portfolio, projects, and contact info.",
    url: "https://bonelli-labs.vercel.app/",
    siteName: "Bonelli Labs",
    images: [
      {
        url: "/favicon.ico",
        width: 256,
        height: 256,
        alt: "Bonelli Labs Favicon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
