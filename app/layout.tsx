import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn English Online with Jose Collas",
  description: "Learn English online with Jose Collas",
  keywords: [
    "learn English online",
    "English teacher",
    "Jose Collas",
    "virtual classes",
    "TEFL",
    "ESL",
    "Peru",
    "grammar",
  ],
  openGraph: {
    title: "Collas English - Learn English with Jose Collas",
    description: "Learn English online with Jose Collas, native speaker.",
    url: "https://collasenglish.xyz",
    siteName: "Collas English",
    images: ["/opengraph-image.jpg"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YPVCSFR1YZ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YPVCSFR1YZ');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <header className="w-full px-6 py-4 bg-foreground text-background shadow flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Collas English
            <br />
            <small className="text-lg">Learn English with Jose Collas</small>
          </h1>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about_jose" className="hover:underline">
              About Jose
            </Link>
            {/* <Link href="/lessons" className="hover:underline">Lessons</Link> */}
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center p-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full px-6 py-4 bg-foreground text-background text-sm text-center">
          © {new Date().getFullYear()} Jose Collas, English Teacher. All rights
          reserved.
        </footer>
      </body>
    </html>
  );
}
