import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ContactProvider } from '@/context/contact-context'
import './globals-fixed.css'

export const metadata: Metadata = {
  title: 'Denzel Studios - Professional Photography & Videography',
  description: 'Capturing life\'s precious moments with artistic excellence. Specializing in weddings, portraits, and cultural events.',
  keywords: 'photography, videography, wedding photography, portrait photography, cultural events, professional photographer, Denzel Studios',
  authors: [{ name: 'Denzel Studios' }],
  creator: 'Denzel Studios',
  generator: 'Next.js',
  applicationName: 'Denzel Studios',
  metadataBase: new URL('https://denzelstudios.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://denzelstudios.com',
    siteName: 'Denzel Studios',
    title: 'Denzel Studios - Professional Photography & Videography',
    description: 'Capturing life\'s precious moments with artistic excellence. Specializing in weddings, portraits, and cultural events.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Denzel Studios - Professional Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denzel Studios - Professional Photography & Videography',
    description: 'Capturing life\'s precious moments with artistic excellence.',
    images: ['/images/og-image.jpg'],
    creator: '@denzelstudios',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#ffffff',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ContactProvider>
          {children}
          <Analytics />
        </ContactProvider>
      </body>
    </html>
  )
}
