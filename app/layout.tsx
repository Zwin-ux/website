import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bonelli.dev"),
  title: {
    default: "Bonelli Labs",
    template: "%s | Bonelli Labs",
  },
  description: "Bonelli Labs is on hiatus.",
  icons: {
    icon: "/transparent.png",
    shortcut: "/transparent.png",
    apple: "/transparent.png",
  },
  openGraph: {
    title: "Bonelli Labs",
    description: "Bonelli Labs is on hiatus.",
    url: "https://bonelli.dev",
    siteName: "Bonelli Labs",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
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
                    name: "Superior",
                    applicationCategory: "BusinessApplication",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
