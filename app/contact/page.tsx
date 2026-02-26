'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Shield, CheckCircle } from 'lucide-react'
import { FadeIn } from '@/components/animations'

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
      {/* Hero Section */}
      <section className="relative animated-gradient text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-6">
              <span className="text-sm text-slate-300 font-medium">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get In{' '}
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Quality Work Guaranteed. Give us a call anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto space-y-8">

            {/* Phone CTA */}
            <FadeIn>
              <motion.a
                href="tel:5402390440"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 bg-primary-50 border-2 border-primary-200 p-6 rounded-2xl hover:bg-primary-100 transition-colors group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 shrink-0">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Call Us</p>
                  <p className="text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                    (540) 239-0440
                  </p>
                </div>
              </motion.a>
            </FadeIn>

            {/* Service Areas */}
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-500" />
                  Areas We Serve
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-4 w-4 text-primary-500" />
                      <span className="text-sm text-slate-600">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Trust Badges */}
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-primary-50 px-4 py-2.5 rounded-full"
                >
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium text-primary-700">CSIA Certified</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-slate-100 px-4 py-2.5 rounded-full"
                >
                  <Shield className="h-5 w-5 text-slate-600" />
                  <span className="text-sm font-medium text-slate-700">BBB Accredited</span>
                </motion.div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  )
}
