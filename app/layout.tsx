import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="relative min-h-screen flex flex-col">
          <nav className="absolute top-0 right-0 p-4 z-10">
            <a
              href="https://github.com/andrewchewth/global-mortgage-qualifier"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
          <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-24">
            {children}
          </main>
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  )
}
