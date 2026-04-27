'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Award, Shield } from 'lucide-react'

const serviceAreas = [
  'Blacksburg',
  'Christiansburg',
  'Radford',
  'Pulaski County',
  'Giles County',
  'Montgomery County',
  'Floyd County',
  'Roanoke County',
  'Shawsville',
  'Wytheville',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero — phone number IS the headline */}
      <section className="relative bg-warm-900 text-white pt-32 pb-24 overflow-hidden grain">
        {/* Diagonal accent */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(108deg, transparent 55%, rgba(218,93,20,0.09) 55%, rgba(218,93,20,0.09) 100%)',
          }}
        />

        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-primary-400 font-semibold tracking-[0.28em] uppercase text-xs mb-6">
              Reach Us
            </p>

            {/* Phone as display headline */}
            <a
              href="tel:5402390440"
              className="block group"
              aria-label="Call (540) 239-0440"
            >
              <div
                className="font-display font-black text-white leading-none group-hover:text-primary-400 transition-colors duration-300"
                style={{ fontSize: 'clamp(2.6rem, 8.5vw, 7rem)' }}
              >
                (540)
              </div>
              <div
                className="font-display font-black text-primary-500 leading-none group-hover:text-primary-400 transition-colors duration-300"
                style={{ fontSize: 'clamp(2.6rem, 8.5vw, 7rem)' }}
              >
                239-0440
              </div>
            </a>

            <p className="text-warm-300 text-base mt-8 max-w-xs leading-relaxed">
              Quality work guaranteed. Give us a call anytime — we pick up.
            </p>

            {/* Visible tap-to-call on mobile */}
            <motion.a
              href="tel:5402390440"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 mt-8 bg-primary-600 text-white font-bold px-8 py-4 hover:bg-primary-700 transition-colors duration-200"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-primary-600 py-4">
        <div className="container-custom px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <a
              href="https://search.csia.org/company_profile/-blacksburg-chimney-servicesalan-the-chimney-swift"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-xs tracking-[0.22em] uppercase hover:text-primary-100 transition-colors"
            >
              <Award className="h-3.5 w-3.5" />
              3× CSIA Certified
            </a>
            <span className="text-primary-400 hidden md:block text-xs">—</span>
            <a
              href="https://www.bbb.org/us/va/roanoke/profile/chimney-cleaning/blacksburg-chimney-services-alan-the-chimney-swift-0613-9009080"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold text-xs tracking-[0.22em] uppercase hover:text-primary-100 transition-colors"
            >
              <Shield className="h-3.5 w-3.5" />
              BBB Accredited
            </a>
            <span className="text-primary-400 hidden md:block text-xs">—</span>
            <span className="text-white font-bold text-xs tracking-[0.22em] uppercase">
              48 Years in Business
            </span>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-warm-50">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

            {/* Left: heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="text-primary-500 text-xs font-semibold tracking-[0.28em] uppercase mb-4">
                Coverage Area
              </p>
              <h2
                className="font-display font-black text-warm-900 leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Where
                <br />
                We Serve
              </h2>
              <p className="text-warm-500 text-sm leading-relaxed max-w-xs">
                Serving the New River Valley and surrounding counties in Southwest Virginia.
              </p>
            </motion.div>

            {/* Right: typographic list, no containers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-1 sm:grid-cols-2"
            >
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 border-b border-warm-200 py-3.5"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary-400 shrink-0" />
                  <span className="text-warm-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
