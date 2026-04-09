import type { Metadata } from 'next'
import { Bitter, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blacksburg Chimney Services | Professional Chimney Sweeping & Repairs',
  description: 'CSIA certified chimney sweeping, repairs, and installations serving Blacksburg, Roanoke, and the New River Valley. 48+ years of experience. Quality work guaranteed.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} ${dmSans.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
