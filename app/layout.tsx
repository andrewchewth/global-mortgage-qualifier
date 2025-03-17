import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { Toaster } from 'sonner'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Global Mortgage Qualifier",
  description: "Calculate your mortgage qualification across different countries",
  keywords: "mortgage, qualification, calculator, global, international",
  authors: [{ name: "Andrew Chew" }],
  creator: "Andrew Chew",
  publisher: "Andrew Chew",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://global-mortgage-qualifier.vercel.app",
    title: "Global Mortgage Qualifier",
    description: "Calculate your mortgage qualification across different countries",
    siteName: "Global Mortgage Qualifier",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Mortgage Qualifier",
    description: "Calculate your mortgage qualification across different countries",
    creator: "@andrewchewth",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Home
              </a>
              <a href="/calculator" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Calculator
              </a>
              <a href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                About
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex h-14 items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Built by{" "}
              <a
                href="https://github.com/andrewchewth"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Andrew Chew
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/andrewchewth/global-mortgage-qualifier"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </footer>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
