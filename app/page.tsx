'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Shield, ArrowRight, Flame, Sparkles, Wrench, Quote, Award, CheckCircle } from 'lucide-react'
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
      {/* Hero Section - Full width image with centered contact info */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Image 3120054.jpg"
            alt="Blacksburg Chimney Services professional chimney work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container-custom relative z-10 text-center mx-auto pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1] tracking-tight"
            >
              Blacksburg{' '}
              <span className="gradient-text">Chimney</span>{' '}
              Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 mb-4 leading-relaxed"
            >
              Professional Chimney Sweeping, Repairs & Installations
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-primary-400 font-semibold mb-8"
            >
              3 CSIA Certified Professionals on Staff &bull; BBB Accredited Business
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <a href="tel:5402390440" className="btn-primary text-lg px-8 py-4">
                <Phone className="mr-2 h-6 w-6" />
                (540) 239-0440
              </a>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Get a Free Estimate
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/20"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="h-5 w-5 text-primary-400" />
                <span className="text-sm font-medium">CSIA Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="h-5 w-5 text-primary-400" />
                <span className="text-sm font-medium">BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-primary-400" />
                <span className="text-sm font-medium">48+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CSIA Certification Banner */}
      <section className="bg-primary-600 text-white py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Award className="h-8 w-8 flex-shrink-0" />
            <p className="text-lg font-semibold">
              Proudly employing 3 CSIA Certified Chimney Sweep Professionals &mdash; Your safety is our top priority
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-slate-600">
              Professional chimney services you can trust
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInStaggerItem key={service.title}>
                <HoverCard>
                  <div className="bg-white rounded-3xl p-8 h-full shadow-sm hover:shadow-xl transition-shadow duration-500 shine-effect border border-slate-100">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-primary-600 font-semibold group"
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

      {/* Testimonial Section */}
      <section className="bg-white section-padding overflow-hidden">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 mb-8">
                <span className="text-sm text-primary-600 font-medium">What People Are Saying</span>
              </div>

              <div className="relative">
                <Quote className="absolute -top-4 -left-4 h-20 w-20 text-primary-100" />
                <blockquote className="relative text-3xl md:text-4xl font-medium text-slate-900 mb-8 leading-relaxed">
                  &ldquo;Superb product and customer service!&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                  JM
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">Jo Mulligan</p>
                  <p className="text-slate-500 text-sm">Blacksburg, VA</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-slate-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quality Work{' '}
              <span className="gradient-text">Guaranteed</span>
            </h2>
            <p className="text-lg text-slate-300 mb-2">
              CSIA Certified &bull; BBB Accredited &bull; 48+ Years Experience
            </p>
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
