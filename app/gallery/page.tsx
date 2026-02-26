'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { FadeIn } from '@/components/animations'
import GalleryLightbox from '@/components/GalleryLightbox'

const photos = [
  '/3120026.jpg',
  '/Image 1200x1044.jpg',
  '/Image 3120011.jpg',
  '/Image 3120020.jpg',
  '/Image 3120039.jpg',
  '/Image 3120054.jpg',
  '/Image 3120064.jpg',
  '/Image 3120071.jpg',
  '/Image 3120079.jpg',
  '/Image 3120087.jpg',
  '/Image 3120089.jpg',
  '/Image 3120096.jpg',
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative animated-gradient text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom section-padding relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 mb-6">
              <span className="text-sm text-slate-300 font-medium">Gallery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our Adventure{' '}
              <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Get access now to a collection of chimney photographs that detail our work in time featuring photographs from local customers in your neighborhood.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <GalleryLightbox photos={photos} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-white rounded-3xl p-10 text-center shadow-sm border border-slate-100">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Quality Work{' '}
                  <span className="gradient-text">Guaranteed</span>
                </h2>
                <p className="text-slate-600 mb-8 text-lg">
                  Contact us anytime for more information.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:5402390440" className="btn-primary">
                    <Phone className="mr-2 h-5 w-5" />
                    (540) 239-0440
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
