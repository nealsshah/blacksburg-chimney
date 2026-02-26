'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  Wrench,
  Flame,
  Camera,
  Wind,
  Shield,
  Home,
  Layers,
  Phone,
} from 'lucide-react'
import { FadeIn, FadeInStagger, FadeInStaggerItem, HoverCard } from '@/components/animations'

const services = [
  { icon: Sparkles, title: 'Chimney Sweeping' },
  { icon: Layers, title: 'Chimney Relining' },
  { icon: Wrench, title: 'Chimney Repairs' },
  { icon: Shield, title: 'Copper Flashing' },
  { icon: Home, title: 'Caps' },
  { icon: Flame, title: 'Woodstove Installation' },
  { icon: Wrench, title: 'Woodstove Repairs' },
  { icon: Camera, title: 'Video Inspection' },
  { icon: Wind, title: 'Dryer Vent Cleaning & Repairs' },
]

const process = [
  {
    icon: Sparkles,
    title: 'Clean',
    description: 'BCS comes to your home on your schedule and leaves your chimney clean and ready for use.',
  },
  {
    icon: Wrench,
    title: 'Repair',
    description: 'BCS will repair any issues we find, but first you will receive a quote in writing before work begins.',
  },
  {
    icon: Flame,
    title: 'Install',
    description: 'Some homes may need an upgraded liner if the chimney materials have degraded or been abused.',
  },
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
              CSIA certified chimney sweeping, repairs, and installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeInStaggerItem key={service.title}>
                <HoverCard>
                  <div className="bg-slate-50 rounded-2xl p-6 hover:bg-slate-100 transition-all duration-300 border border-transparent hover:border-primary-200 group">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/30 transition-shadow">
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                    </div>
                  </div>
                </HoverCard>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <FadeInStaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/25">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </motion.div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
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
