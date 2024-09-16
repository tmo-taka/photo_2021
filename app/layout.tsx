"use client"

import 'styles/index.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: '200',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en" className={montserrat.className}>
        <body>{children}</body>
      </html>
    )
  }