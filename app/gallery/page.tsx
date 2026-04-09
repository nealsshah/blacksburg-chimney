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
  '/Facebook Image.jpg',
  '/Facebook Image copy.jpg',
  '/Facebook Image (1).jpg',
  '/Facebook Image (1) copy.jpg',
  '/Facebook Image (2).jpg',
  '/Facebook Image (3).jpg',
  '/Facebook Image (4).jpg',
  '/Facebook Image (5).jpg',
  '/Facebook Image (6).jpg',
  '/Facebook Image (7).jpg',
  '/Facebook Image (8).jpg',
  '/Facebook Image (9).jpg',
  '/Facebook Image (10).jpg',
  '/Facebook Image (11).jpg',
  '/Facebook Image (12).jpg',
]

export default function GalleryPage() {
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
              Gallery
            </h1>
            <p className="text-lg text-warm-400 max-w-xl">
              Photos of our work for customers across the New River Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-warm-50 section-padding">
        <div className="container-custom">
          <GalleryLightbox photos={[...photos].reverse()} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-100 section-padding">
        <div className="container-custom">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white rounded-xl p-10 text-center border border-warm-200">
              <h2 className="heading text-3xl md:text-4xl text-warm-900 mb-4">
                Quality Work Guaranteed
              </h2>
              <p className="text-warm-600 mb-8 text-lg">
                Contact us anytime for more information.
              </p>
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
