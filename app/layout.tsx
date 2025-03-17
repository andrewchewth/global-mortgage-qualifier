import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Toaster } from 'sonner'
import Link from 'next/link'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Global Mortgage Qualifier',
  description: 'Pre-qualify for a US mortgage as a foreign national or US expat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
              <div className="flex items-center gap-6">
                <Link 
                  href="/" 
                  className="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
                >
                  Global Mortgage Qualifier
                </Link>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                  <Link 
                    href="/resources" 
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                  >
                    Resources
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                  >
                    Contact
                  </Link>
                  <a
                    href="https://github.com/andrewchewth/global-mortgage-qualifier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 transition-colors hover:text-foreground/80"
                  >
                    GitHub
                  </a>
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-1">
            <div className="container py-6 md:py-10">
              {children}
            </div>
          </main>

          <footer className="border-t py-6 md:py-0">
            <div className="container">
              <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm text-muted-foreground md:text-left">
                  © 2024 Global Mortgage Qualifier. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
          
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  )
}
