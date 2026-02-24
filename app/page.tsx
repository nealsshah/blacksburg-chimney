'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Shield, ArrowRight, Flame, Sparkles, Wrench, Quote } from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem, HoverCard } from '@/components/animations'

const services = [
  {
    icon: Sparkles,
    title: 'Clean',
    description: 'BCS comes to your home on your schedule and leaves your chimney clean and ready for use.',
    href: '/services',
  },
  {
    icon: Wrench,
    title: 'Repair',
    description: 'BCS will repair any issues we find, but first you will receive a quote in writing before work begins.',
    href: '/services',
  },
  {
    icon: Flame,
    title: 'Install',
    description: 'Some homes may need an upgraded liner if the chimney materials have degraded or been abused.',
    href: '/services',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center animated-gradient text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl float" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full" />
        </div>

        <div className="container-custom section-padding relative pt-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-8"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">CSIA Certified Professionals</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              Blacksburg{' '}
              <span className="gradient-text">Chimney</span>{' '}
              Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              Chimney Sweeping, Repairs & Installations
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:5402390440" className="btn-secondary">
                <Phone className="mr-2 h-5 w-5" />
                (540) 239-0440
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-16 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary-500" />
                <span className="text-sm text-slate-400">CSIA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary-500" />
                <span className="text-sm text-slate-400">BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary-500" />
                <span className="text-sm text-slate-400">48+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-600">
              Professional chimney services you can trust
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInStaggerItem key={service.title}>
                <HoverCard>
                  <div className="bg-white rounded-3xl p-8 h-full shadow-sm hover:shadow-xl transition-shadow duration-500 shine-effect border border-slate-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 font-semibold group"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </HoverCard>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white section-padding overflow-hidden">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 mb-8">
                <span className="text-sm text-primary-600 font-medium">What People Are Saying</span>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-4 h-20 w-20 text-primary-100" />
                <blockquote className="relative text-3xl md:text-4xl font-medium text-slate-900 mb-8 leading-relaxed">
                  "Superb product and customer service!"
                </blockquote>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">Jo Mulligan</p>
                  <p className="text-slate-500 text-sm">Blacksburg, VA</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quality Work{' '}
              <span className="gradient-text">Guaranteed</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Contact us anytime for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary group">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:5402390440" className="btn-secondary">
                <Phone className="mr-2 h-5 w-5" />
                (540) 239-0440
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
