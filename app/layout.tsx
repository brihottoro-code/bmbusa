import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brihottor Mymensinghbashi USA Inc. | NYC Non-Profit Organization',
  description: 'A social, non-profit organization dedicated to preserving Mymensingh culture and traditions, providing support to immigrants from Greater Mymensingh in the USA.',
  keywords: 'Mymensingh, Bangladesh, USA, NYC, non-profit, social organization, cultural preservation',
  authors: [{ name: 'Brihottor Mymensinghbashi USA Inc.' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.jpg', type: 'image/jpeg', sizes: '32x32' },
    ],
    apple: '/logo.jpg',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Brihottor Mymensinghbashi USA Inc.',
    description: 'A social, non-profit organization in New York City dedicated to preserving Mymensingh culture and supporting the community.',
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

