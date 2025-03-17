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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <header className={styles.header}>
            <nav className={styles.container}>
              <div className={styles.nav}>
                <Link href="/" className={styles.logo}>
                  Global Mortgage Qualifier
                </Link>
                <div className={styles.navLinks}>
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
                </div>
              </div>
            </nav>
          </header>

          <main className={styles.main}>
            <div className={styles.container}>
              {children}
            </div>
          </main>

          <footer className="border-t">
            <div className={`${styles.container} py-6 md:py-0`}>
              <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
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
