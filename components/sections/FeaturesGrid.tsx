'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import AnimatedSection from '@/components/shared/AnimatedSection'

const features = [
  {
    icon: '🤖',
    title: 'AI Assistant',
    description: 'Context-aware AI that answers questions, generates reports, and automates repetitive tasks across your entire organization.',
    badge: 'NEW',
    large: true,
    details: ['Natural language queries', 'Automated reporting', 'Predictive analytics', 'Smart suggestions'],
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Real-time dashboards with deep insights for every role.',
    large: false,
  },
  {
    icon: '🔒',
    title: 'Security',
    description: 'Bank-grade encryption with role-based access control.',
    large: false,
  },
  {
    icon: '⚡',
    title: 'Automation',
    description: 'Build powerful workflows without writing a single line of code.',
    large: false,
  },
]

export default function FeaturesGrid() {
  return (
    <SectionWrapper id="features" className="bg-white/[0.02]">
      <AnimatedSection className="text-center mb-14">
        <p className="text-sm font-semibold text-violet-400 uppercase tracking-widest mb-3">Platform Features</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins mb-4">
          Everything You Need,{' '}
          <span className="gradient-text">Nothing You Don&apos;t</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Powerful features that scale from a 10-person team to a 100,000-person enterprise.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large AI card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/30 rounded-2xl p-8 hover:border-violet-400/50 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl"
            >
              🤖
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white font-poppins">AI Assistant</h3>
                <span className="px-2 py-0.5 text-xs font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 rounded">NEW</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Context-aware AI that answers questions, generates reports, and automates repetitive tasks across your entire organization.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {['Natural language queries', 'Automated reporting', 'Predictive analytics', 'Smart suggestions'].map((d) => (
                  <div key={d} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Analytics card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl mb-4"
          >
            📊
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-2 font-poppins">Analytics</h3>
          <p className="text-slate-400 text-sm">Real-time dashboards with deep insights for every role.</p>
        </motion.div>

        {/* Security card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-4xl mb-4"
          >
            🔒
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-2 font-poppins">Security</h3>
          <p className="text-slate-400 text-sm">Bank-grade encryption with role-based access control.</p>
        </motion.div>

        {/* Automation card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-4xl mb-4"
          >
            ⚡
          </motion.div>
          <h3 className="text-xl font-bold text-white mb-2 font-poppins">Workflow Automation</h3>
          <p className="text-slate-400 text-sm">Build powerful workflows without writing a single line of code. Trigger actions across all your modules automatically.</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
