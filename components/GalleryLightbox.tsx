'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryLightboxProps {
  photos: string[]
}

export default function GalleryLightbox({ photos }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : i === 0 ? photos.length - 1 : i - 1))
  }, [photos.length])

  const goToNext = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : i === photos.length - 1 ? 0 : i + 1))
  }, [photos.length])

  useEffect(() => {
    if (selectedIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selectedIndex, goToPrevious, goToNext])

  return (
    <>
      {/* Masonry grid — natural photo proportions */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '80px' }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.4) }}
            className="break-inside-avoid mb-2 md:mb-3 relative overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={photo}
              alt={`Chimney work photo ${index + 1}`}
              width={600}
              height={450}
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.05]"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover tint — no icon needed, the whole cell is the button */}
            <div className="absolute inset-0 bg-warm-950/0 group-hover:bg-warm-950/30 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-warm-950/97"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 z-10 p-2 text-warm-400 hover:text-white transition-colors duration-200"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Previous */}
            <button
              className="absolute left-3 md:left-6 z-10 p-3 text-warm-400 hover:text-white transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); goToPrevious() }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Next */}
            <button
              className="absolute right-3 md:right-6 z-10 p-3 text-warm-400 hover:text-white transition-colors duration-200"
              onClick={(e) => { e.stopPropagation(); goToNext() }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedIndex]}
                alt={`Chimney work photo ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-display font-black text-warm-500 tracking-[0.18em] text-sm select-none">
              {String(selectedIndex + 1).padStart(2, '0')}
              <span className="text-warm-700 mx-1">/</span>
              {String(photos.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
