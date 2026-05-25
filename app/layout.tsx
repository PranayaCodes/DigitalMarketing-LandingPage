import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Free 1:1 Digital Marketing Consultation in Nepal | Pranaya',
  description:
    'Book a free 1:1 digital marketing consultation call and get a practical plan to bring more leads, customers, and sales for your Nepal-based business.',
  keywords:
    'digital marketing consultation Nepal, free marketing consultation, business leads Nepal, Facebook ads Nepal, online marketing Nepal',
  openGraph: {
    title: 'Free 1:1 Digital Marketing Consultation in Nepal',
    description:
      'Get a simple digital marketing plan for your business. Built for Nepal-based business owners who want more customers.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free 1:1 Digital Marketing Consultation in Nepal',
    description: 'Get a practical marketing plan for your Nepal-based business.',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
