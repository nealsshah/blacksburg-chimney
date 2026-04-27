'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
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
      <section className="relative bg-warm-900 text-white pt-32 pb-24 overflow-hidden">
        {/* Diagonal accent */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(108deg, transparent 60%, rgba(218,93,20,0.08) 60%, rgba(218,93,20,0.08) 100%)',
          }}
        />

        <div className="container-custom section-padding relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-primary-400 font-semibold tracking-[0.28em] uppercase text-xs mb-5">
              Our Work
            </p>
            <h1
              className="font-display font-black leading-none text-white"
              style={{ fontSize: 'clamp(3.8rem, 11vw, 9.5rem)' }}
            >
              The
              <br />
              <span className="text-primary-500">Work</span>
            </h1>
            <p className="text-warm-300 text-base mt-6 max-w-sm leading-relaxed">
              {photos.length} photos from jobs across the New River Valley.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery — dark background so photos command attention */}
      <section className="bg-warm-950 py-8 md:py-12">
        <div className="container-custom px-3 md:px-6">
          <GalleryLightbox photos={[...photos].reverse()} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white relative overflow-hidden grain">
        <div className="container-custom section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="text-primary-200 text-xs font-semibold tracking-[0.28em] uppercase mb-5">
              Schedule Service
            </p>
            <h2
              className="font-display font-black text-white leading-tight mb-10"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            >
              Quality Work.
              <br />
              Guaranteed.
            </h2>
            <a
              href="tel:5402390440"
              className="inline-flex items-center gap-4 bg-warm-900 text-white font-bold px-12 py-6 hover:bg-warm-950 transition-colors duration-200"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}
            >
              <Phone className="h-6 w-6 shrink-0" />
              (540) 239-0440
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
