import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'DrivEd - Learn Driving the Right Way',
  description: 'Professional driving lessons,Learn in your own car with flexible scheduling and expert guidance.',
  // generator: 'v0.app',
  openGraph: {
    title: 'DrivEd - Learn Driving the Right Way',
    description: 'Professional driving lessons with personalized instruction in your own car',
    type: 'website',
    url: 'https://drived.in',
    images:[
      {
        url: '/drivedlogo.png',
        width: 1200,
        height: 630,
        alt: 'DriveEd Logo',

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
