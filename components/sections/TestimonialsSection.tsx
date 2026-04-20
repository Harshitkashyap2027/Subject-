'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import AnimatedSection from '@/components/shared/AnimatedSection'
import TestimonialCard from '@/components/cards/TestimonialCard'
import { testimonials } from '@/lib/data/testimonials'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length)

  return (
    <SectionWrapper className="bg-white/[0.02]">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">Loved by Leaders</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-4">
          Don&apos;t Take Our{' '}
          <span className="gradient-text">Word for It</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Thousands of organizations trust lvlBase to run their day-to-day operations.
        </p>
      </AnimatedSection>

      {/* Desktop: 3 cards */}
      <div className="hidden md:grid grid-cols-3 gap-6 mb-8">
        {testimonials.slice(0, 3).map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="md:hidden relative overflow-hidden mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls (mobile) + dots */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-6 bg-violet-400'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </SectionWrapper>
  )
}
