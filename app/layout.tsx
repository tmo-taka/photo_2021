"use client"

import 'styles/index.css'
import { css, cx } from '@styled-system/css'
import { Montserrat } from 'next/font/google'
import { Navigation } from '@component/Navigation'

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
      <html lang="en" className={cx(montserrat.className,css({fontSize: '62.5%'}))}>
        <body className={css({fontSize: '1.6em'})}>
          <Navigation />
          {children}
        </body>
      </html>
    )
  }