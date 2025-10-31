import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Git Webhooks - Professional Cleaning Services in Seattle, WA',
  description: 'Test Git Webhooks provides reliable and thorough cleaning services for homes and businesses in Seattle, Washington. Professional, eco-friendly cleaning solutions you can trust.',
  keywords: 'cleaning services, Seattle cleaning, house cleaning, commercial cleaning, residential cleaning, Washington state, professional cleaners',
  authors: [{ name: 'Test Git Webhooks' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Test Git Webhooks - Professional Cleaning Services in Seattle, WA',
    description: 'Reliable and thorough cleaning services for homes and businesses in Seattle, Washington.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}