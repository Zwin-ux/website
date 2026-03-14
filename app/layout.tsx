import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bonelli.dev"),
  title: {
    default: "Bonelli Labs",
    template: "%s | Bonelli Labs",
  },
  description:
    "Bonelli Labs builds Synergy for AI script detection and Arbitrage Engine for market scanning.",
  icons: {
    icon: "/transparent.png",
    shortcut: "/transparent.png",
    apple: "/transparent.png",
  },
  openGraph: {
    title: "Bonelli Labs",
    description:
      "Two tools from Bonelli Labs: Synergy for AI script detection and Arbitrage Engine for market scanning.",
    url: "https://bonelli.dev",
    siteName: "Bonelli Labs",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bonelli Labs",
              url: "https://bonelli.dev",
              sameAs: ["https://github.com/Zwin-ux"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Bonelli Labs products",
                itemListElement: [
                  {
                    "@type": "SoftwareApplication",
                    name: "Synergy",
                    applicationCategory: "BrowserApplication",
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "Arbitrage Engine",
                    applicationCategory: "BusinessApplication",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
