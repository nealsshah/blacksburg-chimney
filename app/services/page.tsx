'use client'

import { motion } from 'framer-motion'
import { Phone, Award, ExternalLink } from 'lucide-react'

const services = [
  'Chimney Sweeping',
  'Chimney Relining',
  'Chimney Repairs',
  'Copper Flashing',
  'Caps',
  'Woodstove Installation',
  'Woodstove Repairs',
  'Video Inspection',
  'Dryer Vent Cleaning & Repairs',
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-900 text-white pt-32 pb-24 overflow-hidden">
        {/* Ghost numeral */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 font-display font-black text-warm-800 leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(14rem, 30vw, 22rem)', lineHeight: 0.85 }}
        >
          9
        </div>
        {/* Diagonal accent bar */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(108deg, transparent 62%, rgba(218,93,20,0.08) 62%, rgba(218,93,20,0.08) 100%)',
          }}
        />

        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-primary-400 font-semibold tracking-[0.28em] uppercase text-xs mb-5">
              What We Do
            </p>
            <h1
              className="font-display font-black leading-none text-white"
              style={{ fontSize: 'clamp(3.8rem, 11vw, 9.5rem)' }}
            >
              Our
              <br />
              <span className="text-primary-500">Services</span>
            </h1>
            <p className="text-warm-300 text-base mt-6 max-w-sm leading-relaxed">
              All work performed by{' '}
              <strong className="text-white font-semibold">
                CSIA certified professionals
              </strong>{' '}
              with 48+ years of combined experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services — numbered editorial list */}
      <section className="bg-warm-50 py-16">
        <div className="container-custom section-padding">
          <div className="max-w-2xl">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.055,
                  duration: 0.5,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="group flex items-baseline gap-5 border-b border-warm-200 py-5 last:border-b-0"
              >
                <span
                  className="font-display font-black text-warm-200 group-hover:text-primary-400 transition-colors duration-300 select-none shrink-0 tabular-nums"
                  style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-semibold text-warm-800 group-hover:text-warm-950 group-hover:translate-x-1.5 transition-all duration-300 inline-block"
                  style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)' }}
                >
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials grid */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="bg-warm-900 py-0"
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-warm-700 border-y border-warm-700">
            {/* Stat 1 */}
            <div className="px-10 py-14 text-center">
              <div
                className="font-display font-black text-primary-500 leading-none"
                style={{ fontSize: 'clamp(4rem, 9vw, 6.5rem)' }}
              >
                48
              </div>
              <div className="text-warm-400 text-xs font-semibold tracking-[0.22em] uppercase mt-2">
                Years in Business
              </div>
            </div>

            {/* Stat 2 */}
            <div className="px-10 py-14 text-center">
              <div
                className="font-display font-black text-primary-500 leading-none"
                style={{ fontSize: 'clamp(4rem, 9vw, 6.5rem)' }}
              >
                3
              </div>
              <div className="text-warm-400 text-xs font-semibold tracking-[0.22em] uppercase mt-2">
                CSIA Certified Pros
              </div>
            </div>

            {/* Accreditations */}
            <div className="px-10 py-14 flex flex-col justify-center gap-5">
              <a
                href="https://search.csia.org/company_profile/-blacksburg-chimney-servicesalan-the-chimney-swift"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <Award className="h-6 w-6 text-primary-500 shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm group-hover:text-primary-400 transition-colors">
                    CSIA Certified
                  </div>
                  <div className="text-warm-500 text-xs">Chimney Safety Institute</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-warm-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="h-px bg-warm-700" />
              <a
                href="https://www.bbb.org/us/va/roanoke/profile/chimney-cleaning/blacksburg-chimney-services-alan-the-chimney-swift-0613-9009080"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="h-6 w-6 shrink-0 flex items-center justify-center border-2 border-primary-500 rounded-sm">
                  <span className="text-primary-500 font-black text-[10px]">BBB</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm group-hover:text-primary-400 transition-colors">
                    BBB Accredited
                  </div>
                  <div className="text-warm-500 text-xs">Better Business Bureau</div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-warm-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

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
              Schedule Service
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
