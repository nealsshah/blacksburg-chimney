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
      {/* Hero Section */}
      <section className="relative animated-gradient text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-6">
              <span className="text-sm text-slate-300 font-medium">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              What We{' '}
              <span className="gradient-text">Offer</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              All services performed by CSIA certified professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 bg-slate-50 px-6 py-5 rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0" />
                  <span className="text-lg font-medium text-slate-900">{service}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certification Banner */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">CSIA Certified &bull; BBB Accredited</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Blacksburg Chimney Services proudly employs 3 CSIA certified professionals with over 48 years of combined experience. We are a BBB accredited business committed to safety and quality.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
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
              <a href="tel:5402390440" className="btn-primary">
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
