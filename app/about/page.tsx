'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Shield } from 'lucide-react'

const team = [
  {
    name: 'Alan Duchovnay',
    title: 'Master Sweep & Founder',
    experience: '48',
    cert: null,
  },
  {
    name: 'Zachery Ratcliff',
    title: 'CSIA Certified',
    experience: '8',
    cert: 'CSIA #10698',
    bio: null,
  },
  {
    name: 'Josh Dowdy',
    title: 'CSIA Certified',
    experience: '8',
    cert: 'CSIA #12314',
    bio: null,
  },
]

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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-900 text-white pt-32 pb-24 overflow-hidden">
        {/* Ghost "48" — Alan's tenure as atmosphere */}
        <div
          aria-hidden="true"
          className="absolute right-0 bottom-0 font-display font-black text-warm-800 leading-none select-none pointer-events-none"
          style={{ fontSize: 'clamp(14rem, 28vw, 20rem)', lineHeight: 0.85 }}
        >
          48
        </div>
        {/* Diagonal tint */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(112deg, transparent 58%, rgba(218,93,20,0.07) 58%, rgba(218,93,20,0.07) 100%)',
          }}
        />

        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-primary-400 font-semibold tracking-[0.28em] uppercase text-xs mb-5">
              The People Behind the Work
            </p>
            <h1
              className="font-display font-black leading-none text-white"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8.5rem)' }}
            >
              Meet
              <br />
              <span className="text-primary-500">the Team</span>
            </h1>
            <p className="text-warm-300 text-base mt-6 max-w-sm leading-relaxed">
              3 CSIA certified professionals. Nearly five decades of combined experience serving the New River Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team — editorial roster */}
      <section className="bg-warm-50">
        <div className="container-custom section-padding">

          {/* Alan — featured, dominant treatment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col md:flex-row md:items-end gap-6 md:gap-14 border-b-2 border-warm-800 pb-12 mb-10"
          >
            {/* "48" as hero stat */}
            <div className="shrink-0">
              <div
                className="font-display font-black text-primary-500 leading-none"
                style={{ fontSize: 'clamp(5rem, 14vw, 9rem)' }}
              >
                48
              </div>
              <div className="text-warm-400 text-xs font-semibold tracking-[0.22em] uppercase">
                Years
              </div>
            </div>

            <div className="flex-1 pb-1">
              <h2
                className="font-display font-black text-warm-900 leading-none mb-2"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Alan Duchovnay
              </h2>
              <p className="text-primary-600 font-bold text-base mb-3 uppercase tracking-wide text-sm">
                Master Sweep &amp; Founder
              </p>
            </div>
          </motion.div>

          {/* Zachery + Josh — equal, subordinate */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-warm-200">
            {[team[1], team[2]].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`py-8 ${i === 0 ? 'md:pr-10' : 'md:pl-10'}`}
              >
                <div
                  className="font-display font-black text-warm-200 leading-none mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
                >
                  {member.experience}
                  <span
                    className="font-semibold text-warm-300 ml-2"
                    style={{ fontSize: '1rem' }}
                  >
                    yrs
                  </span>
                </div>
                <h3
                  className="font-display font-black text-warm-900 leading-tight mb-1"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)' }}
                >
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">
                  {member.title}
                </p>
                {member.cert && (
                  <div className="inline-flex items-center gap-1.5 text-warm-400 text-xs font-semibold">
                    <Shield className="h-3 w-3" />
                    {member.cert}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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

      {/* Service Areas — typographic, no pill containers */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

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
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}
              >
                Where
                <br />
                We Serve
              </h2>
              <p className="text-warm-500 text-sm leading-relaxed max-w-xs">
                Proudly serving the New River Valley and surrounding counties in Southwest Virginia.
              </p>
            </motion.div>

            {/* Right: plain two-column list */}
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
                  className="flex items-center gap-3 border-b border-warm-100 py-3.5"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary-400 shrink-0" />
                  <span className="text-warm-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA — stark panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-20 bg-warm-900 p-10 grain relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:justify-between">
              <div>
                <h3
                  className="font-display font-black text-white leading-tight mb-1"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}
                >
                  Quality Work. Guaranteed.
                </h3>
                <p className="text-warm-400 text-sm">Contact us anytime for more information.</p>
              </div>
              <a
                href="tel:5402390440"
                className="inline-flex items-center gap-3 bg-primary-600 text-white font-bold text-lg px-8 py-5 hover:bg-primary-700 transition-colors duration-200 shrink-0"
              >
                <Phone className="h-5 w-5" />
                (540) 239-0440
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
