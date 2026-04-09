'use client'

import { motion } from 'framer-motion'
import { Phone, Award, CheckCircle } from 'lucide-react'
import { FadeIn } from '@/components/animations'

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
      <section className="relative bg-warm-900 text-white pt-32 pb-16 grain overflow-hidden">
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg text-warm-400 max-w-xl">
              All services performed by CSIA certified professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-warm-50 section-padding">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-center gap-4 bg-white px-6 py-5 rounded-lg border border-warm-200 hover:border-primary-300 transition-colors"
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <span className="text-lg font-semibold text-warm-900">{service}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-warm-900 rounded-xl p-10 grain relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary-600 rounded-lg flex items-center justify-center">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="heading text-2xl text-white mb-2">CSIA Certified &bull; BBB Accredited</h3>
                  <p className="text-warm-300 leading-relaxed">
                    Blacksburg Chimney Services employs 3 CSIA certified professionals with over 48 years of combined experience. We are a BBB accredited business committed to safety and quality.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white section-padding relative grain overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <FadeIn>
            <h2 className="heading text-4xl md:text-5xl mb-4">
              Quality Work Guaranteed
            </h2>
            <p className="text-primary-100 text-lg mb-10">
              Contact us anytime for more information.
            </p>
            <a href="tel:5402390440" className="inline-flex items-center gap-3 bg-white text-warm-900 text-xl font-bold px-10 py-5 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
              <Phone className="h-6 w-6" />
              (540) 239-0440
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
