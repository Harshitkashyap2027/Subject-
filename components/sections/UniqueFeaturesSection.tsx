'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import AnimatedSection from '@/components/shared/AnimatedSection'

const uniqueFeatures = [
  {
    icon: '⚔️',
    title: 'Guild System',
    description: 'Create dynamic cross-functional groups that collaborate, compete, and build culture. Members earn reputation, complete missions, and grow together.',
    color: 'from-violet-600/30 to-purple-800/30',
    border: 'border-violet-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]',
    badge: 'Community',
  },
  {
    icon: '🧬',
    title: 'Skill DNA',
    description: 'Map every member\'s competencies with our dynamic skill profiling engine. Identify gaps, plan growth, and make smarter people decisions.',
    color: 'from-cyan-600/30 to-blue-800/30',
    border: 'border-cyan-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]',
    badge: 'People',
  },
  {
    icon: '🎯',
    title: 'Mission System',
    description: 'Turn organizational goals into gamified missions. Members earn XP, badges, and recognition — while your org hits its targets faster.',
    color: 'from-blue-600/30 to-indigo-800/30',
    border: 'border-blue-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]',
    badge: 'Engagement',
  },
  {
    icon: '🌐',
    title: 'Cross-Org Network',
    description: 'Connect with other organizations on the lvlBase network for benchmarking, collaboration, and knowledge sharing across industries.',
    color: 'from-emerald-600/30 to-teal-800/30',
    border: 'border-emerald-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]',
    badge: 'Network',
  },
]

export default function UniqueFeaturesSection() {
  return (
    <SectionWrapper>
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">What Makes Us Different</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-4">
          Features You Won&apos;t{' '}
          <span className="gradient-text">Find Anywhere Else</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          These aren&apos;t just features — they&apos;re the innovations that separate lvlBase from every other platform.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {uniqueFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative bg-gradient-to-br ${feature.color} backdrop-blur-md border ${feature.border} rounded-2xl p-8 ${feature.glow} transition-all duration-300 overflow-hidden group`}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <div className="text-[8rem] leading-none">{feature.icon}</div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{feature.icon}</span>
                <span className="px-2.5 py-1 text-xs font-semibold bg-white/10 text-white/80 rounded-full border border-white/10">
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-poppins">{feature.title}</h3>
              <p className="text-slate-300 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
