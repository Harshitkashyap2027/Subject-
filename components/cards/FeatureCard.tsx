'use client'

import { motion } from 'framer-motion'
import type { Feature } from '@/lib/data/features'

interface FeatureCardProps {
  feature: Feature
  index?: number
  large?: boolean
}

export default function FeatureCard({ feature, index = 0, large = false }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 ${large ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-3xl flex-shrink-0"
        >
          {feature.icon}
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-white font-poppins">{feature.title}</h3>
            {feature.badge && (
              <span className="px-1.5 py-0.5 text-xs font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 rounded">
                {feature.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-violet-400 mb-2 font-medium uppercase tracking-wider">{feature.category}</p>
          <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
          {large && (
            <ul className="mt-4 space-y-1.5">
              {feature.details.map((detail) => (
                <li key={detail} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  )
}
