import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Toaster } from 'sonner'

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
              <div className="mr-4 hidden md:flex">
                <a className="mr-6 flex items-center space-x-2" href="/">
                  <span className="hidden font-bold sm:inline-block">
                    Global Mortgage Qualifier
                  </span>
                </a>
              </div>
              <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                <div className="w-full flex-1 md:w-auto md:flex-none">
                  <a href="/resources" className="mr-4">Resources</a>
                  <a href="/contact">Contact</a>
                </div>
                <nav className="flex items-center">
                  <a
                    href="https://github.com/andrewchewth/global-mortgage-qualifier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </nav>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  )
}
