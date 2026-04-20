'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Industry } from '@/lib/data/industries'

interface IndustryCardProps {
  industry: Industry
  index?: number
}

export default function IndustryCard({ industry, index = 0 }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-violet-500/40 transition-all duration-300 cursor-pointer"
    >
      {/* Glow overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

      <div className="relative z-10">
        <div className="text-4xl mb-4">{industry.icon}</div>
        <h3 className="text-xl font-bold text-white mb-2 font-poppins">{industry.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{industry.description}</p>

        <div className="space-y-1.5 mb-6">
          {industry.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
              <div className="w-1 h-1 bg-violet-400 rounded-full flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        <Link
          href={`/solutions/${industry.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group/link"
        >
          Explore
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}
