'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-900/95 backdrop-blur-md shadow-lg shadow-warm-950/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center group">
            <Image
              src="/bcs-logo.png"
              alt="Blacksburg Chimney Services"
              width={160}
              height={56}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="p-2.5 text-warm-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-semibold text-warm-300 hover:text-white transition-colors uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:5402390440"
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 px-5 py-2.5 rounded-lg text-white font-bold transition-colors duration-200 text-sm tracking-wide"
          >
            <Phone className="h-4 w-4" />
            (540) 239-0440
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-warm-950/60 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-warm-900 px-6 py-6 z-50 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/bcs-logo.png"
                    alt="Blacksburg Chimney Services"
                    width={140}
                    height={48}
                    className="h-10 w-auto brightness-0 invert"
                  />
                </Link>
                <button
                  type="button"
                  className="p-2.5 text-warm-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-8">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-lg font-semibold text-warm-300 hover:bg-warm-800 hover:text-primary-400 transition-colors uppercase tracking-wide"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-warm-800 pt-6">
                  <a
                    href="tel:5402390440"
                    className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-4 rounded-lg font-bold text-lg"
                  >
                    <Phone className="h-5 w-5" />
                    (540) 239-0440
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
