'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import type { PricingPlan } from '@/lib/data/pricing'

interface PricingCardProps {
  plan: PricingPlan
  index?: number
}

export default function PricingCard({ plan, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative flex flex-col rounded-2xl p-8 ${
        plan.highlighted
          ? 'bg-gradient-to-b from-violet-600/20 to-blue-600/20 border-2 border-violet-500/60 shadow-glow-primary'
          : 'bg-white/5 border border-white/10'
      } backdrop-blur-md overflow-hidden`}
    >
      {plan.badge && (
        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full text-xs font-bold text-white">
          <Star className="w-3 h-3" />
          {plan.badge}
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-1 font-poppins">{plan.name}</h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
          <span className="text-slate-400 text-sm">/{plan.period}</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={plan.name === 'Enterprise' ? '/contact' : '/register'}
        className={`block w-full py-3 px-6 rounded-xl text-center font-semibold text-sm transition-all duration-200 ${
          plan.highlighted
            ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 hover:scale-[1.02]'
            : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
        }`}
      >
        {plan.cta}
      </Link>
    </motion.div>
  )
}
