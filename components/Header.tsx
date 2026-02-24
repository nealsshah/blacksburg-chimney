'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Flame } from 'lucide-react'

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
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between p-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex lg:flex-1"
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-xl">
                <Flame className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-tight">Blacksburg</span>
              <span className="text-xs text-slate-400 leading-tight tracking-wide">CHIMNEY SERVICES</span>
            </div>
          </Link>
        </motion.div>

        <div className="flex lg:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="button"
            className="p-2.5 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:gap-x-1"
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            >
              <Link
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-1/2 transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <a
            href="tel:5402390440"
            className="flex items-center gap-2 bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/30 px-4 py-2 rounded-full text-primary-400 hover:text-primary-300 font-medium transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">(540) 239-0440</span>
          </a>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-slate-900 px-6 py-6 z-50 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-xl">
                    <Flame className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-bold text-lg text-white">BCS</span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="p-2.5 text-slate-300 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              <div className="mt-8 flow-root">
                <div className="space-y-1 py-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-300 hover:bg-slate-800 hover:text-primary-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border-t border-slate-800 pt-6"
                >
                  <a
                    href="tel:5402390440"
                    className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    (540) 239-0440
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
