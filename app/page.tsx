'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Shield, ArrowRight, Sparkles, Wrench, Flame, Award, CheckCircle } from 'lucide-react'
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
      {/* Hero — Big image, centered contact info */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Image 3120054.jpg"
            alt="Blacksburg Chimney Services professional chimney work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-950/70 via-warm-950/60 to-warm-950/80" />
        </div>

        <div className="container-custom relative z-10 text-center mx-auto pt-32 pb-20 px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6">
              Blacksburg<br />
              <span className="text-primary-400">Chimney Services</span>
            </h1>

            <p className="text-lg md:text-xl text-warm-200 mb-3 font-medium">
              Chimney Sweeping, Repairs & Installations
            </p>

            <p className="text-primary-400 font-bold text-base md:text-lg tracking-wide uppercase mb-10">
              3 CSIA Certified Pros &bull; BBB Accredited &bull; 48+ Years
            </p>

            {/* Phone number — THE focal point */}
            <motion.a
              href="tel:5402390440"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white text-2xl md:text-3xl font-bold px-10 py-5 rounded-lg shadow-2xl shadow-primary-900/40 transition-all duration-200 hover:-translate-y-1 mb-6"
            >
              <Phone className="h-7 w-7 md:h-8 md:w-8" />
              (540) 239-0440
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-warm-900 text-warm-50 py-5">
        <div className="container-custom px-5">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-center">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary-400" />
              <span className="font-bold tracking-wide text-sm uppercase">CSIA Certified</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-warm-700" />
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary-400" />
              <span className="font-bold tracking-wide text-sm uppercase">BBB Accredited</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-warm-700" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary-400" />
              <span className="font-bold tracking-wide text-sm uppercase">48+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-warm-50 section-padding">
        <div className="container-custom">
          <FadeIn className="max-w-2xl mb-16">
            <h2 className="heading text-4xl md:text-5xl lg:text-6xl text-warm-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-warm-600">
              Professional chimney services you can trust.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <FadeInStaggerItem key={service.title}>
                <HoverCard>
                  <div className="bg-white rounded-xl p-8 h-full border border-warm-200 hover:border-primary-300 transition-colors duration-300">
                    <div className="w-14 h-14 bg-primary-600 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="heading text-2xl text-warm-900 mb-3">{service.title}</h3>
                    <p className="text-warm-600 mb-6 leading-relaxed">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-700 font-bold group"
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

      {/* CTA */}
      <section className="bg-primary-600 text-white section-padding relative grain overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <FadeIn>
            <h2 className="heading text-4xl md:text-5xl lg:text-6xl mb-4">
              Quality Work Guaranteed
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
              CSIA Certified &bull; BBB Accredited &bull; Serving the New River Valley
            </p>
            <a href="tel:5402390440" className="inline-flex items-center gap-3 bg-white text-warm-900 text-xl md:text-2xl font-bold px-10 py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
              <Phone className="h-6 w-6" />
              (540) 239-0440
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
