'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Clean',
    description:
      'BCS comes to your home on your schedule and leaves your chimney clean and ready for use.',
    href: '/services',
  },
  {
    number: '02',
    title: 'Repair',
    description:
      'BCS will repair any issues we find, but first you will receive a quote in writing before work begins.',
    href: '/services',
  },
  {
    number: '03',
    title: 'Install',
    description:
      'Some homes may need an upgraded liner if the chimney materials have degraded or been abused.',
    href: '/services',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/Landing Page Background Apr 9 2026.png"
            alt="Blacksburg Chimney Services professional chimney work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-950/75 via-warm-950/55 to-warm-950/85" />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20 px-5 md:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-primary-400 font-semibold tracking-[0.28em] uppercase text-xs mb-6"
          >
            3 CSIA Certified Pros &bull; BBB Accredited &bull; 48+ Years
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display font-black text-white leading-none mb-10 mx-auto"
            style={{ fontSize: 'clamp(3rem, 9vw, 8.5rem)' }}
          >
            Blacksburg
            <br />
            <span className="text-primary-500">Chimney</span>
            <br />
            Services
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:5402390440"
              className="inline-flex items-center gap-3 bg-primary-600 text-white font-bold px-8 py-5 hover:bg-primary-700 transition-colors duration-200"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
            >
              <Phone className="h-5 w-5 shrink-0" />
              (540) 239-0440
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-warm-300 hover:text-white transition-colors duration-200 font-semibold group text-sm"
            >
              See our services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credentials bar — consistent with all other pages */}
      <section className="bg-primary-600 py-4">
        <div className="container-custom section-padding">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <a
              href="https://search.csia.org/company_profile/-blacksburg-chimney-servicesalan-the-chimney-swift"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-xs tracking-[0.22em] uppercase hover:text-primary-100 transition-colors"
            >
              3× CSIA Certified
            </a>
            <span className="text-primary-400 hidden md:block text-xs">—</span>
            <a
              href="https://www.bbb.org/us/va/roanoke/profile/chimney-cleaning/blacksburg-chimney-services-alan-the-chimney-swift-0613-9009080"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-xs tracking-[0.22em] uppercase hover:text-primary-100 transition-colors"
            >
              BBB Accredited
            </a>
            <span className="text-primary-400 hidden md:block text-xs">—</span>
            <span className="text-white font-bold text-xs tracking-[0.22em] uppercase">
              48 Years in Business
            </span>
          </div>
        </div>
      </section>

      {/* What We Do — editorial numbered rows, no cards */}
      <section className="bg-warm-50 py-20">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

            {/* Left: heading + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-[0.28em] uppercase mb-4">
                Services
              </p>
              <h2
                className="font-display font-black text-warm-900 leading-tight mb-6"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
              >
                What
                <br />
                We Do
              </h2>
              <p className="text-warm-500 text-sm leading-relaxed max-w-xs mb-8">
                Professional chimney services performed by CSIA certified professionals. On your
                schedule, done right.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-warm-900 text-white font-bold px-6 py-3 hover:bg-warm-950 transition-colors duration-200 text-sm"
              >
                All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Right: numbered service rows */}
            <div>
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="group border-b border-warm-200 py-7 last:border-b-0"
                >
                  <Link href={service.href} className="block">
                    <div className="flex items-start gap-6">
                      <span
                        className="font-display font-black text-warm-200 group-hover:text-primary-400 transition-colors duration-300 shrink-0 tabular-nums leading-none"
                        style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)' }}
                      >
                        {service.number}
                      </span>
                      <div className="flex-1 pt-0.5">
                        <h3
                          className="font-display font-black text-warm-900 leading-none mb-2 group-hover:translate-x-1.5 transition-transform duration-300 inline-block"
                          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                        >
                          {service.title}
                        </h3>
                        <p className="text-warm-500 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-warm-300 group-hover:text-primary-500 group-hover:translate-x-1 transition-all duration-300 mt-1 shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white py-20 relative overflow-hidden grain">
        <div className="container-custom section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-primary-200 text-xs font-semibold tracking-[0.28em] uppercase mb-5">
              Ready to Schedule?
            </p>
            <h2
              className="font-display font-black text-white leading-tight mb-10"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              Quality Work.
              <br />
              Guaranteed.
            </h2>
            <a
              href="tel:5402390440"
              className="inline-flex items-center gap-4 bg-warm-900 text-white font-bold px-12 py-6 hover:bg-warm-950 transition-colors duration-200"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              <Phone className="h-6 w-6 shrink-0" />
              (540) 239-0440
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
