import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: {
    default: 'lvlBase — Run Your Entire Organization on One Platform',
    template: '%s | lvlBase',
  },
  description:
    'lvlBase is the all-in-one AI-powered platform for schools, hospitals, corporations, and government agencies. Unify operations, communications, and analytics.',
  keywords: [
    'organization management',
    'AI platform',
    'school management',
    'hospital management',
    'corporate platform',
    'lvlBase',
  ],
  metadataBase: new URL('https://lvlbase.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lvlbase.com',
    siteName: 'lvlBase',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} bg-[#0f172a] text-[#f8fafc] antialiased`}>
        {children}
      </body>
    </html>
  )
}
