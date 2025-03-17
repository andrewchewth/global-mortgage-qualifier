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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased bg-gradient-to-br from-background via-background/90 to-background/80">
        <nav className="absolute top-0 right-0 p-4 z-10">
          <a
            href="https://github.com/yourusername/global-mortgage-qualifier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
