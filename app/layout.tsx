import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteTitle = 'DrivEd - Driving School in Pune | Car Driving Lessons in Your Own Car'
const siteDescription =
  'DrivEd is a driving school in Pune offering personalised car driving classes in your own car. Patient instructors, flexible timings, defensive driving and help for nervous learners. Book on WhatsApp.'

export const metadata: Metadata = {
  // Base for every relative URL below (canonical, Open Graph image).
  // www is the main domain: drived.in redirects to it.
  metadataBase: new URL('https://www.drived.in'),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: '/',
  },
  // generator: 'v0.app',
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    url: '/',
    siteName: 'DrivEd',
    locale: 'en_IN',
    images:[
      {
        url: '/drivedlogo.png',
        width: 745,
        height: 655,
        alt: 'DrivEd - Driving School in Pune',
      }
    ]
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/drivedlogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
