import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarcSync Database',
  description: 'A simple way of storing your data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://marcsync.dev" />
        <meta property="og:image" content="https://cdn.marcthedev.it/marcsync/MarcSync%20Logo%20Clean%20Transparent.png" />
        <meta property="og:description" content={metadata.description as string} />
        <meta name="theme-color" content="#261a39" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
