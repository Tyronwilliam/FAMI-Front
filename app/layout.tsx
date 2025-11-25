import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { mularSlim, sansSerifBook, bigNoodle } from '@/fonts'

export const metadata: Metadata = {
  title: 'Juju & Max - Restaurant & Résidence de Tablerie à Montreuil',
  description:
    'Restaurant moderne et convivial à Montreuil. Découvrez notre cuisine et notre ambiance chaleureuse.',
  generator: 'v0.app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon512.png" />
        <meta name="theme-color" content="#efaa30" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${mularSlim.variable} ${sansSerifBook.variable} ${bigNoodle.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
