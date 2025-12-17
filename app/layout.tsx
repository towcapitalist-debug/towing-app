import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'Tow Commander – Request a Tow',
  description: 'On-demand towing with transparent pricing and ETA'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Tow Central',
  description: '24/7 On-Demand Towing',
  icons: {
    icon: '/favicon.png',
  },
}