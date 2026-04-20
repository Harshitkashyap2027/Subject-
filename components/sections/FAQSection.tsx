'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { faqItems } from '@/lib/data/faq'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <SectionWrapper id="faq">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">FAQ</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-4">
          Frequently Asked{' '}
          <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Can&apos;t find the answer you&apos;re looking for? Contact our team and we&apos;ll be happy to help.
        </p>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-all duration-200"
              aria-expanded={openId === item.id}
            >
              <span className="text-white font-medium pr-4">{item.question}</span>
              <motion.div
                animate={{ rotate: openId === item.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-violet-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openId === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
