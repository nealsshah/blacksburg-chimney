'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Shield, CheckCircle, Award } from 'lucide-react'
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
      {/* Hero */}
      <section className="relative bg-warm-900 text-white pt-32 pb-16 grain overflow-hidden">
        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-warm-400">
              Quality Work Guaranteed. Give us a call anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-warm-50 section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto space-y-6">

            {/* Phone CTA */}
            <FadeIn>
              <a
                href="tel:5402390440"
                className="flex items-center gap-5 bg-white border-2 border-warm-200 p-6 rounded-xl hover:border-primary-400 transition-colors group"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-warm-500 mb-1 font-medium">Call Us</p>
                  <p className="text-2xl font-bold text-warm-900 group-hover:text-primary-700 transition-colors">
                    (540) 239-0440
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* Service Areas */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-6 border border-warm-200">
                <h3 className="heading text-lg text-warm-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary-600" />
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
                      <CheckCircle className="h-4 w-4 text-primary-600" />
                      <span className="text-sm text-warm-700">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Trust Badges */}
            <FadeIn delay={0.2}>
              <div className="bg-warm-900 rounded-xl p-6 grain relative overflow-hidden">
                <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Award className="h-6 w-6 text-primary-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm">CSIA Certified</p>
                      <p className="text-warm-400 text-xs">3 Certified Professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <Shield className="h-6 w-6 text-primary-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-bold text-sm">BBB Accredited</p>
                      <p className="text-warm-400 text-xs">Trusted Business</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </>
  )
}
