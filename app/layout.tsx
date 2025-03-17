import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Link from "next/link";

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
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="text-lg font-bold hover:text-primary transition-colors"
                >
                  Global Mortgage Qualifier
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                  <Link 
                    href="/calculator" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Calculator
                  </Link>
                  <Link 
                    href="/resources" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Resources
                  </Link>
                  <Link 
                    href="/about" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-1">
            <div className="container py-8">
              {children}
            </div>
          </main>

          <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container py-6">
              <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm text-muted-foreground md:text-left">
                  Built by{" "}
                  <a
                    href="https://github.com/andrewchewth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    Andrew Chew
                  </a>
                  . The source code is available on{" "}
                  <a
                    href="https://github.com/andrewchewth/global-mortgage-qualifier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
