import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import styles from './styles/components.module.css'
import { Toaster } from 'sonner'
import Link from 'next/link'

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <header className={styles.header}>
            <div className={`${styles.container} ${styles.nav}`}>
              <Link href="/" className={styles.logo}>
                Global Mortgage Qualifier
              </Link>
              <nav className={styles.navLinks}>
                <Link href="/resources" className={styles.link}>
                  Resources
                </Link>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
                <a
                  href="https://github.com/andrewchewth/global-mortgage-qualifier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
              </nav>
            </div>
          </header>
          <main className={styles.main}>
            {children}
          </main>
          <footer className="border-t py-6 md:py-0">
            <div className={`${styles.container} flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row`}>
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © 2024 Global Mortgage Qualifier. All rights reserved.
              </p>
            </div>
          </footer>
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  )
}
